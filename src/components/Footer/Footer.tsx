import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import { ReactComponent as Logo } from '../../assets/icons/logo-text.svg';
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as XSocial } from '../../assets/icons/x-social.svg';
import { ReactComponent as Email } from '../../assets/icons/email.svg';
import { ReactComponent as Age } from '../../assets/icons/18-plus.svg';
import certified from '../../assets/images/certified.png';
import maskot from '../../assets/images/maskot.png';

import styles from './Footer.module.scss';
import { useLang } from '../../providers/LanguageContext';

const socialIcons = [
	{ Component: Instagram, onClick: () => console.log('Inst') },
	{ Component: Telegram, onClick: () => console.log('Telegram') },
	{ Component: XSocial, onClick: () => console.log('XSocial') },
	{ Component: Email, onClick: () => console.log('Email') },
];

const languages = [
	{ code: 'en', label: 'English' },
	{ code: 'de', label: 'Deutsch' },
	{ code: 'fr', label: 'Français' },
	{ code: 'es', label: 'Español' },
	{ code: 'it', label: 'Italiano' },
] as const;

export const Footer = () => {
	const { lang, setLang } = useLang();
	const { t } = useLang();

	return (
		<footer className={styles.footer}>
			<div className={styles.maskot}>
				<img src={maskot} alt="maskot" />
			</div>
			<div className={styles.download}>
				<Logo className={styles.logo} />
				<div className={styles.textBlock}>
					<h2>{t('download')}</h2>
					<p>{t('play')}</p>
					<Button text={t('install')} icon={<DownloadIcon />} iconPosition="left" />
				</div>
			</div>
			<div className={styles.secondBlock}>
				<Dropdown
					value={lang}
					options={languages}
					onChange={(code) => setLang(code)}
				/>
				<div className={styles.socials}>
					<p>{t('socials')}</p>
					<div className={styles.iconsList}>
						{socialIcons.map(({ Component, onClick }, index) => (
							<a
								key={index}
								href="#"
								onClick={(e) => {
									e.preventDefault();
									onClick?.();
								}}
							>
								<Component />
							</a>
						))}
					</div>
				</div>
			</div>
			<div className={styles.adultBlock}>
				<div className={styles.age}>
					<Age />
					<p>{t('onlyAdult')}</p>
				</div>
				<div className={styles.certified}>
					<img src={certified} alt="certified" />
					<p>{t('casinoCertified')}</p>
				</div>
			</div>
		</footer>
	);
};
