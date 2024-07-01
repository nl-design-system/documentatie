import React, { HTMLAttributes } from 'react';

export const ImageSketch = (props: HTMLAttributes<SVGElement>) => (
  <svg width="960" height="540" viewBox="0 0 960 540" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_640_2742)">
      <rect width="960" height="540" fill="var(--component-illustration-background-color, white)" />
      <g clipPath="url(#clip1_640_2742)">
        <rect width="2" height="540" transform="translate(69)" fill="var(--component-illustration-grid-color, #eee)" />
        <rect width="2" height="540" transform="translate(151)" fill="var(--component-illustration-grid-color, #eee)" />
        <rect width="2" height="540" transform="translate(233)" fill="var(--component-illustration-grid-color, #eee)" />
        <rect width="2" height="540" transform="translate(315)" fill="var(--component-illustration-grid-color, #eee)" />
        <rect width="2" height="540" transform="translate(397)" fill="var(--component-illustration-grid-color, #eee)" />
        <rect width="2" height="540" transform="translate(479)" fill="var(--component-illustration-grid-color, #eee)" />
        <rect width="2" height="540" transform="translate(561)" fill="var(--component-illustration-grid-color, #eee)" />
        <rect width="2" height="540" transform="translate(643)" fill="var(--component-illustration-grid-color, #eee)" />
        <rect width="2" height="540" transform="translate(725)" fill="var(--component-illustration-grid-color, #eee)" />
        <rect width="2" height="540" transform="translate(807)" fill="var(--component-illustration-grid-color, #eee)" />
        <rect width="2" height="540" transform="translate(889)" fill="var(--component-illustration-grid-color, #eee)" />
        <rect
          width="960"
          height="2"
          transform="translate(0 64)"
          fill="var(--component-illustration-grid-color, #eee)"
        />
        <rect
          width="960"
          height="2"
          transform="translate(0 146)"
          fill="var(--component-illustration-grid-color, #eee)"
        />
        <rect
          width="960"
          height="2"
          transform="translate(0 228)"
          fill="var(--component-illustration-grid-color, #eee)"
        />
        <rect
          width="960"
          height="2"
          transform="translate(0 310)"
          fill="var(--component-illustration-grid-color, #eee)"
        />
        <rect
          width="960"
          height="2"
          transform="translate(0 392)"
          fill="var(--component-illustration-grid-color, #eee)"
        />
        <rect
          width="960"
          height="2"
          transform="translate(0 474)"
          fill="var(--component-illustration-grid-color, #eee)"
        />
      </g>
      <g clipPath="url(#clip2_640_2742)">
        <line
          x1="2"
          y1="-2"
          x2="547.041"
          y2="-2"
          transform="matrix(0.897024 0.441983 -0.527604 0.84949 233 151.333)"
          stroke="var(--component-illustration-color, #666)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="-2"
          x2="547.041"
          y2="-2"
          transform="matrix(0.897024 -0.441983 0.527604 0.84949 234.496 394)"
          stroke="var(--component-illustration-color, #666)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <rect
        x="235"
        y="148"
        width="490"
        height="244"
        stroke="var(--component-illustration-color, #666)"
        strokeWidth="4"
      />
    </g>
    <defs>
      <clipPath id="clip0_640_2742">
        <rect width="960" height="540" fill="white" />
      </clipPath>
      <clipPath id="clip1_640_2742">
        <rect width="960" height="540" fill="white" />
      </clipPath>
      <clipPath id="clip2_640_2742">
        <rect x="233" y="146" width="494" height="248" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
