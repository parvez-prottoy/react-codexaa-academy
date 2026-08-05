import { useEffect } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input",
  "select",
  "textarea",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

/**
 * Traps keyboard focus inside `containerRef` while `active` is true.
 * Moves focus into the container on open, cycles focus within it on Tab,
 * closes on Escape, and restores focus to the previously focused element
 * on teardown.
 *
 * @param {boolean}      active       Whether the trap is enabled.
 * @param {React.RefObject} containerRef Ref to the element that should trap focus.
 * @param {() => void}   onClose      Called when Escape is pressed.
 */
export default function useFocusTrap(active, containerRef, onClose) {
  useEffect(() => {
    if (!active) return undefined;
    const container = containerRef.current;
    if (!container) return undefined;

    const previouslyFocused = document.activeElement;
    container.setAttribute("tabindex", "-1");
    container.focus();

    const getFocusable = () =>
      Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
        (el) =>
          !el.closest("[inert], [aria-hidden='true']") &&
          el.offsetParent !== null
      );

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = getFocusable();
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      container.removeAttribute("tabindex");
      if (previouslyFocused && typeof previouslyFocused.focus === "function") {
        previouslyFocused.focus();
      }
    };
  }, [active, containerRef, onClose]);
}