/* All data for the TrustedCompanies section */

import { HiAcademicCap, HiBuildingOffice2, HiStar } from 'react-icons/hi2';

/* ── Company logo imports ── */
import logoDreamOnline from '../assets/logos/dreamonline.svg';
import logoNttData from '../assets/logos/ntt-data.svg';
import logoToshiba from '../assets/logos/toshiba.svg';
import logoUltraX from '../assets/logos/ultra-x.svg';
import logoVirtualex from '../assets/logos/virtualex.svg';

/* ── Hiring partner companies ── */
export const companies = [
  /* International */
  {
    id: 1,
    name: 'NTT DATA',
    abbr: 'NTT',
    logo: logoNttData,
    color: '#C5003C',
    lightBg: '#fff0f4',
    country: 'Japan',
    category: 'international',
  },
  {
    id: 2,
    name: 'Toshiba',
    abbr: 'TOS',
    logo: logoToshiba,
    color: '#E4002B',
    lightBg: '#fff1f1',
    country: 'Japan',
    category: 'international',
  },
  {
    id: 3,
    name: 'Virtualex',
    abbr: 'VTX',
    logo: logoVirtualex,
    color: '#005BAC',
    lightBg: '#edf4ff',
    country: 'Japan',
    category: 'international',
  },
  {
    id: 4,
    name: 'DreamOnline',
    abbr: 'DOL',
    logo: logoDreamOnline,
    color: '#E85D04',
    lightBg: '#fff4ee',
    country: 'Japan',
    category: 'international',
  },
  {
    id: 5,
    name: 'Ultra-X',
    abbr: 'ULX',
    logo: logoUltraX,
    color: '#1B1464',
    lightBg: '#eeedfb',
    country: 'Bangladesh',
    category: 'international',
  },
];

/* ── Section statistics ── */
export const sectionStats = [
  {
    id: 1,
    Icon: HiAcademicCap,
    rawValue: 450,
    displayValue: '450+',
    label: 'Happy Learners',
    subtext: 'Students launched successful careers',
    iconColor: '#1d4ed8',
    iconBg: '#eff6ff',
    borderColor: '#bfdbfe',
  },
  {
    id: 2,
    Icon: HiBuildingOffice2,
    rawValue: 30,
    displayValue: '30+',
    label: 'Hiring Partners',
    subtext: 'National & international companies',
    iconColor: '#059669',
    iconBg: '#f0fdf4',
    borderColor: '#a7f3d0',
  },
  {
    id: 3,
    Icon: HiStar,
    rawValue: 95,
    displayValue: '95%',
    label: 'Student Satisfaction',
    subtext: 'Average satisfaction rating',
    iconColor: '#d97706',
    iconBg: '#fffbeb',
    borderColor: '#fde68a',
  },
];
