/**
 * (c) 2023 Frameless B.V.
 * @license EUPL-1.2
 */
import {
  FormField,
  FormFieldDescription,
  FormFieldErrorMessage,
  FormLabel,
  Textbox,
} from '@utrecht/component-library-react';
import type { FormFieldProps } from '@utrecht/component-library-react';
import type { TextboxTypes } from '@utrecht/component-library-react/dist/Textbox';
import clsx from 'clsx';
import { forwardRef, useId } from 'react';
import type { ForwardedRef, ReactNode } from 'react';

export interface FormFieldTextboxProps extends FormFieldProps {
  autoComplete?: string;
  defaultValue?: string;
  description?: ReactNode;
  disabled?: boolean;
  errorMessage?: ReactNode;
  invalid?: boolean;
  label: ReactNode;
  max?: number | string;
  min?: number | string;
  name?: string;
  onBlur?: FormFieldProps['onBlur'];
  onChange?: FormFieldProps['onChange'];
  onFocus?: FormFieldProps['onFocus'];
  onInput?: FormFieldProps['onInput'];
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  status?: ReactNode;
  type?: string;
  value?: string | number;
}

export const FormFieldTextbox = forwardRef(
  (
    {
      autoComplete,
      defaultValue,
      description,
      disabled,
      errorMessage,
      invalid,
      label,
      max,
      min,
      name,
      onBlur,
      onChange,
      onFocus,
      onInput,
      pattern,
      placeholder,
      readOnly,
      required,
      status,
      type,
      value,
      ...props
    }: FormFieldTextboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const inputId = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <FormField invalid={invalid} {...props}>
        <p className="utrecht-form-field__label">
          <FormLabel htmlFor={inputId}>{label}</FormLabel>
        </p>
        {description && <FormFieldDescription id={descriptionId}>{description}</FormFieldDescription>}
        {invalid && errorMessage && (
          <FormFieldErrorMessage className="utrecht-form-field__error-message" id={errorMessageId}>
            {errorMessage}
          </FormFieldErrorMessage>
        )}
        <p className="utrecht-form-field__input">
          <Textbox
            ref={ref}
            id={inputId}
            name={name}
            type={(type as TextboxTypes) || 'text'}
            autoComplete={autoComplete}
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid,
                [statusId]: status,
              }) || undefined
            }
            invalid={invalid}
            dir="auto"
            disabled={disabled}
            min={typeof min === 'number' ? String(min) : typeof min === 'string' ? min : undefined}
            max={typeof max === 'number' ? String(max) : typeof max === 'string' ? max : undefined}
            pattern={pattern}
            placeholder={placeholder}
            readOnly={readOnly}
            aria-required={required}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onInput={onInput}
            onChange={onChange}
            defaultValue={defaultValue}
          />
        </p>
        {status && (
          <div className="utrecht-form-field__status" id={statusId}>
            <div className="utrecht-form-field-description utrecht-form-field-description--status">{status}</div>
          </div>
        )}
      </FormField>
    );
  },
);

FormFieldTextbox.displayName = 'FormFieldTextbox';
