/* All data for the TrustedCompanies section */

import {
  HiAcademicCap,
  HiBuildingOffice2,
  HiStar,
} from "react-icons/hi2";

/* ── Company logo imports ── */
import logoNttData        from "../assets/logos/ntt-data.svg";
import logoToshiba        from "../assets/logos/toshiba.svg";
import logoVirtualex      from "../assets/logos/virtualex.svg";
import logoDreamOnline    from "../assets/logos/dreamonline.svg";
import logoUltraX         from "../assets/logos/ultra-x.svg";
import logoGrameenphone   from "../assets/logos/grameenphone.svg";
import logoRobi           from "../assets/logos/robi.svg";
import logoBjit           from "../assets/logos/bjit.svg";
import logoBrainStation23 from "../assets/logos/brainstation23.svg";
import logoSelise         from "../assets/logos/selise.svg";
import logoKazSoftware    from "../assets/logos/kaz-software.svg";
import logoTechnext       from "../assets/logos/technext.svg";
import logoShikho         from "../assets/logos/shikho.svg";
import logoTherap         from "../assets/logos/therap.svg";
import logoDataSoft       from "../assets/logos/datasoft.svg";

/* ── Hiring partner companies ── */
export const companies = [
  /* International */
  { id: 1,  name: "NTT DATA",           abbr: "NTT",  logo: logoNttData,        color: "#C5003C", lightBg: "#fff0f4", country: "Japan",       category: "international" },
  { id: 2,  name: "Toshiba",            abbr: "TOS",  logo: logoToshiba,        color: "#E4002B", lightBg: "#fff1f1", country: "Japan",       category: "international" },
  { id: 3,  name: "Virtualex",          abbr: "VTX",  logo: logoVirtualex,      color: "#005BAC", lightBg: "#edf4ff", country: "Japan",       category: "international" },
  { id: 4,  name: "DreamOnline",        abbr: "DOL",  logo: logoDreamOnline,    color: "#E85D04", lightBg: "#fff4ee", country: "Japan",       category: "international" },
  { id: 5,  name: "Ultra-X",            abbr: "ULX",  logo: logoUltraX,         color: "#1B1464", lightBg: "#eeedfb", country: "Bangladesh",  category: "international" },

  /* National — Bangladesh */
  { id: 6,  name: "Grameenphone",       abbr: "GP",   logo: logoGrameenphone,   color: "#0B8E4F", lightBg: "#edfff5", country: "Bangladesh",  category: "national" },
  { id: 7,  name: "Robi Axiata",        abbr: "ROB",  logo: logoRobi,           color: "#CC0000", lightBg: "#fff1f1", country: "Bangladesh",  category: "national" },
  { id: 8,  name: "BJIT Group",         abbr: "BJT",  logo: logoBjit,           color: "#2D4CF7", lightBg: "#eff2ff", country: "Bangladesh",  category: "national" },
  { id: 9,  name: "Brain Station 23",   abbr: "BS23", logo: logoBrainStation23, color: "#E53935", lightBg: "#fff0ef", country: "Bangladesh",  category: "national" },
  { id: 10, name: "SELISE Digital",     abbr: "SLS",  logo: logoSelise,         color: "#6A0DAD", lightBg: "#f7eeff", country: "Switzerland", category: "national" },
  { id: 11, name: "Kaz Software",       abbr: "KAZ",  logo: logoKazSoftware,    color: "#00796B", lightBg: "#e8f8f7", country: "Bangladesh",  category: "national" },
  { id: 12, name: "Technext",           abbr: "TNX",  logo: logoTechnext,       color: "#D32F2F", lightBg: "#fff0f0", country: "Bangladesh",  category: "national" },
  { id: 13, name: "Shikho",             abbr: "SKO",  logo: logoShikho,         color: "#F57F17", lightBg: "#fff9e6", country: "Bangladesh",  category: "national" },
  { id: 14, name: "Therap BD",          abbr: "TBD",  logo: logoTherap,         color: "#1565C0", lightBg: "#edf4ff", country: "Bangladesh",  category: "national" },
  { id: 15, name: "DataSoft",           abbr: "DST",  logo: logoDataSoft,       color: "#2E7D32", lightBg: "#edf7ee", country: "Bangladesh",  category: "national" },
];

/* ── Section statistics ── */
export const sectionStats = [
  {
    id: 1,
    Icon: HiAcademicCap,
    rawValue: 450,
    displayValue: "450+",
    label: "Happy Learners",
    subtext: "Students launched successful careers",
    iconColor: "#1d4ed8",
    iconBg: "#eff6ff",
    borderColor: "#bfdbfe",
  },
  {
    id: 2,
    Icon: HiBuildingOffice2,
    rawValue: 30,
    displayValue: "30+",
    label: "Hiring Partners",
    subtext: "National & international companies",
    iconColor: "#059669",
    iconBg: "#f0fdf4",
    borderColor: "#a7f3d0",
  },
  {
    id: 3,
    Icon: HiStar,
    rawValue: 95,
    displayValue: "95%",
    label: "Student Satisfaction",
    subtext: "Average satisfaction rating",
    iconColor: "#d97706",
    iconBg: "#fffbeb",
    borderColor: "#fde68a",
  },
];
