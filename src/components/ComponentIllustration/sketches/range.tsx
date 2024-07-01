import React, { HTMLAttributes } from 'react';

export const RangeSketch = (props: HTMLAttributes<SVGElement>) => (
  <svg width="960" height="540" viewBox="0 0 960 540" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_641_3012)">
      <rect width="960" height="540" fill="var(--component-illustration-background-color, white)" />
      <g clipPath="url(#clip1_641_3012)">
        <rect width="960" height="540" fill="var(--component-illustration-background-color, white)" />
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
      <rect
        x="235"
        y="260"
        width="490"
        height="20"
        stroke="var(--component-illustration-color, #666)"
        strokeWidth="4"
      />
      <g clipPath="url(#clip2_641_3012)">
        <rect x="235" y="258" width="120" height="24" fill="var(--component-illustration-color, #666)" />
      </g>
      <g clipPath="url(#clip3_641_3012)">
        <rect
          x="334"
          y="249"
          width="42"
          height="42"
          rx="21"
          fill="var(--component-illustration-background-color, white)"
        />
        <circle cx="355" cy="270" r="19" stroke="var(--component-illustration-color, #666)" strokeWidth="4" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_641_3012">
        <rect width="960" height="540" fill="white" />
      </clipPath>
      <clipPath id="clip1_641_3012">
        <rect width="960" height="540" fill="white" />
      </clipPath>
      <clipPath id="clip2_641_3012">
        <rect width="120" height="24" fill="white" transform="translate(235 258)" />
      </clipPath>
      <clipPath id="clip3_641_3012">
        <rect x="334" y="249" width="42" height="42" rx="21" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
