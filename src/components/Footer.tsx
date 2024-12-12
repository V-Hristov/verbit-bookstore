import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer className="footer">
			<p>{t('verbitFooter')}</p>
		</footer>
	);
};

export default Footer;
