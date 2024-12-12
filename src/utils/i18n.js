import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(HttpApi) // load translation using http and import all languages to avoid bundling
	.use(LanguageDetector) // determine the user language
	.use(initReactI18next) // pass the i18n instance to react-i18next
	.init({
		fallbackLng: 'en', // fallback to 'en' when the current language translation is missing
		debug: true,
		detection: {
			order: ['queryString', 'cookie'],
			cache: ['cookie'],
		},
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	});

export default i18n;
