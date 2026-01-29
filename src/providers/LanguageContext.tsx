import { createContext, useContext, useEffect, useState } from 'react';
import {
	translations,
	Lang,
	TranslationKey,
} from '../assets/lang/translations';

const STORAGE_KEY = 'app_language';

interface LangContextValue {
	lang: Lang;
	setLang: (lang: Lang) => void;
	t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LangContextValue | null>(null);

export const LanguageProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [lang, setLang] = useState<Lang>(() => {
		const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
		return saved && saved in translations ? saved : 'en';
	});

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, lang);
	}, [lang]);

	const t = (key: TranslationKey) => translations[lang][key];

	return (
		<LanguageContext.Provider value={{ lang, setLang, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLang = () => {
	const ctx = useContext(LanguageContext);
	if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
	return ctx;
};
