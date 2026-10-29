import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import './html-image.css';

export interface HTMLImageProps extends HTMLAttributes<HTMLElement> {
  colorScheme?: 'dark' | 'light';
  forcedColorsAdjust?: boolean;
  label?: ReactNode;
  labelId?: string;
}

export const HTMLImage = ({
  label,
  labelId,
  className,
  colorScheme,
  forcedColorsAdjust = false,
  children,
  dangerouslySetInnerHTML,
  ...restProps
}: PropsWithChildren<HTMLImageProps>) => {
  /*
   * Use the `<figure>` element to have nice indentation when CSS cannot be loaded.
   *
   * Use the implied `figure` role as fallback when no label is configured, instead of `img`.
   *
   * Hide the `<figcaption>` element both when CSS is available and when it isn't available.
   *
   * The hidden label with the text alternative is associated with the `img` role element using
   * `aria-labelledby`, and this is sufficient.
   *
   * Use `inert` to ensure any interactive elements are non-responsive. The cannot be clicked,
   * and don't have interactive states in CSS such as `:hover`. This way it behaves like an image.
   *
   * Use `aria-hidden="true"` to ensure contents don't show up in the accessibility tree.
   *
   * Set `aria-hidden` on an element nested inside the `role="img"`, to avoid accidentally
   * hiding the image with the text alternative from the accessibility.
   *
   * You wouldn't want a form control inside an image, to show up in screen readers.
   *
   * Pass the `dangerouslySetInnerHTML` prop to the element that renders `children`.
   *
   * Add `aria-labelledby` even for the regular `figure`/`figcaption` combination with
   * the implied `figure` role, because only Firefox supports setting the accessible
   * name via `figcaption`. Last tested with: https://nldesignsystem.nl/baseline/2026-10/
   */
  return (
    <figure
      className={clsx('ma-html-image', className)}
      role={label ? 'img' : undefined}
      aria-labelledby={label ? labelId : undefined}
      {...restProps}
    >
      {label && (
        <figcaption className="ma-html-image__label" hidden id={labelId}>
          {label}
        </figcaption>
      )}
      <div
        className={clsx('ma-html-image__body', {
          'ma-html-image__body--color-scheme-dark': colorScheme === 'dark',
          'ma-html-image__body--color-scheme-light': colorScheme === 'light',
          'ma-html-image__body--forced-colors-adjust': forcedColorsAdjust,
        })}
        inert="true"
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        aria-hidden="true"
      >
        {children}
      </div>
    </figure>
  );
};
