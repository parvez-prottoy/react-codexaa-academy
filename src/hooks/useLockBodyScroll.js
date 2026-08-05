import { useEffect } from "react";

/**
 * Locks body scroll while `locked` is true and restores the previous
 * overflow value when it becomes false (or the component unmounts).
 */
export default function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;

    const previousValue = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousValue;
    };
  }, [locked]);
}