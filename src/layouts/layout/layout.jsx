import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { IntlProvider } from 'react-intl';
import de from './../../translations/de';
import en from './../../translations/en';

// eslint-disable-next-line react/prop-types
function Layout({ props }) {
    const [locale, setLocale] = useState('en');
    return (
        <IntlProvider
            messages={locale === 'en' ? en : de}
            locale={locale}
            defaultLocale="en"
        >
            <Header setLocale={setLocale} />
            <div>{props}</div>
            <Footer />
        </IntlProvider>
    );
}

export default Layout;
