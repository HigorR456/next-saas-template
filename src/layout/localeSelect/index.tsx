import { IoLanguage } from 'react-icons/io5';
import * as Style from './styles'
import Select from 'react-select';
import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/i18n/config';

type LocalesType = {
  value: string;
  label: string;
}

const LocaleSelect = () => {
  const [isPending, startTransition] = useTransition();
  function changeLanguage({ value }: LocalesType) {
    const locale = value as Locale;
    startTransition(() => {''
      setUserLocale(locale);
    });
  }

  const locale = useLocale();

  const locales: LocalesType[] = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' }
  ];

  return (
    <Style.SelectWrapper>
      <Select
        aria-label="Select your language" 
        defaultValue={locale}
        placeholder={<IoLanguage fontSize={22} />}
        // @ts-ignore
        options={locales}
        // @ts-ignore
        onChange={changeLanguage}
      />
    </Style.SelectWrapper>
  );
};

export default LocaleSelect;