import React from 'react';

export { default as IconAppStore } from './appstore';
export { default as IconBookmark } from './bookmark';
export { default as IconCodepen } from './codepen';
export { default as IconExternal } from './external';
export { default as IconFolder } from './folder';
export { default as IconFork } from './fork';
export { default as Icon } from './icon';
export { default as IconGitHub } from './github';
export { default as IconHex } from './hex';
export { default as IconInstagram } from './instagram';
export { default as IconLinkedin } from './linkedin';
export { default as IconLoader } from './loader';
export { default as IconLogo } from './logo';
export { default as IconPlayStore } from './playstore';
export { default as IconStar } from './star';
export { default as IconTwitter } from './twitter';
export { default as FilledIconStar } from './filled-star';
export { default as IconEye } from './eye';
export { default as IconHeart } from './heart';
export { default as IconHeartRegular } from './heart-regular';
export { default as IconOrcid } from './orcid';
export { default as IconTag } from './tag';

export const IconArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

export const IconArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
