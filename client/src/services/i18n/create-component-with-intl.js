// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import frMessages from 'translations/fr.json';

import { flattenMessages } from './intl';

type IntlProps = {
  locale: string,
  messages: { [string]: string },
};

const locales = {
  fr: flattenMessages(frMessages),
};

const createComponentWithIntl = (
  children: React$Element<*>,
  props: IntlProps = { locale: 'fr', messages: locales.fr },
) => renderer.create(<IntlProvider {...props}>{children}</IntlProvider>);

export default createComponentWithIntl;
