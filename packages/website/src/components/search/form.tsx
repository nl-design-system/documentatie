import { Button } from '@components/button/button';
import { FormFieldErrorMessage, Textbox } from '@utrecht/component-library-react';
import { IconSearch } from '@tabler/icons-react';
import { i18n, type I18nLanguages } from '../../i18n';
import { useEffect, useState, type ChangeEvent, type FormEvent, type FormEventHandler } from 'react';
import '@utrecht/textbox-css/dist/index.css';
import './form.css';

export interface SearchFormProps {
  value?: string | null;
  onChange?: (_value: string | undefined | null) => void;
  autoFocus?: boolean;
  lang: I18nLanguages;
  required?: boolean;
}

export function SearchForm(props: SearchFormProps) {
  const [value, setValue] = useState<string | undefined | null>('');
  const [error, setError] = useState(false);

  useEffect(() => setValue(props.value), [props.value]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (props.required && !value?.trim()) {
      setError(true);
      return;
    }
    props?.onChange?.(value);
  };

  return (
    <search className="ma-search-form">
      <form className="ma-search-form__form" action="/zoeken" noValidate onSubmit={handleSubmit}>
        {error && (
          <div className="ma-search-form__error">
            <FormFieldErrorMessage role="alert" id="search-form-error">
              {i18n[props.lang].searchRequiredError}
            </FormFieldErrorMessage>
          </div>
        )}
        <Textbox
          aria-label={i18n[props.lang].searchAriaLabel}
          aria-describedby={error ? 'search-form-error' : undefined}
          name="query"
          required={props.required}
          invalid={error}
          autoFocus={props.autoFocus}
          value={value || ''}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
            if (error) setError(false);
          }}
          type="search"
        />
        <Button type="submit" purpose="secondary" iconStart={<IconSearch aria-hidden="true" />}>
          {i18n[props.lang].search}
        </Button>
      </form>
    </search>
  );
}
