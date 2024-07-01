import React, { HTMLAttributes } from 'react';

export const AccordionSketch = (props: HTMLAttributes<SVGElement>) => (
  <svg width="960" height="540" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="var(--component-illustration-background-color, white)">
      <rect width="960" height="540" />
      <rect width="960" height="540" />
    </g>
    <g fill="var(--component-illustration-grid-color, #eee)">
      <rect width="2" height="540" transform="translate(69)" />
      <rect width="2" height="540" transform="translate(151)" />
      <rect width="2" height="540" transform="translate(233)" />
      <rect width="2" height="540" transform="translate(315)" />
      <rect width="2" height="540" transform="translate(397)" />
      <rect width="2" height="540" transform="translate(479)" />
      <rect width="2" height="540" transform="translate(561)" />
      <rect width="2" height="540" transform="translate(643)" />
      <rect width="2" height="540" transform="translate(725)" />
      <rect width="2" height="540" transform="translate(807)" />
      <rect width="2" height="540" transform="translate(889)" />
      <rect width="960" height="2" transform="translate(0 64)" />
      <rect width="960" height="2" transform="translate(0 146)" />
      <rect width="960" height="2" transform="translate(0 228)" />
      <rect width="960" height="2" transform="translate(0 310)" />
      <rect width="960" height="2" transform="translate(0 392)" />
      <rect width="960" height="2" transform="translate(0 474)" />
    </g>
    <g fill="var(--component-illustration-color, #666)">
      <path d="M185.586 180.586C186.367 179.805 187.633 179.805 188.414 180.586L199 191.172L209.586 180.586C210.367 179.805 211.633 179.805 212.414 180.586C213.195 181.367 213.195 182.633 212.414 183.414L200.414 195.414C199.633 196.195 198.367 196.195 197.586 195.414L185.586 183.414C184.805 182.633 184.805 181.367 185.586 180.586Z" />
      <rect x="239" y="180" width="360" height="16" rx="8" />
      <path d="M151 150H809V142H151V150ZM809 226H151V234H809V226Z" />
      <path d="M185.586 263.586C186.367 262.805 187.633 262.805 188.414 263.586L199 274.172L209.586 263.586C210.367 262.805 211.633 262.805 212.414 263.586C213.195 264.367 213.195 265.633 212.414 266.414L200.414 278.414C199.633 279.195 198.367 279.195 197.586 278.414L185.586 266.414C184.805 265.633 184.805 264.367 185.586 263.586Z" />
      <rect x="239" y="263" width="240" height="16" rx="8" />
      <path d="M809 309H151V317H809V309Z" />
      <path d="M185.586 345.586C186.367 344.805 187.633 344.805 188.414 345.586L199 356.172L209.586 345.586C210.367 344.805 211.633 344.805 212.414 345.586C213.195 346.367 213.195 347.633 212.414 348.414L200.414 360.414C199.633 361.195 198.367 361.195 197.586 360.414L185.586 348.414C184.805 347.633 184.805 346.367 185.586 345.586Z" />
      <rect x="239" y="345" width="320" height="16" rx="8" />
      <path d="M809 391H151V399H809V391Z" />
    </g>
  </svg>
);
