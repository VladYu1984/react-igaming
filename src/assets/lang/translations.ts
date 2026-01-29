export const translations = {
	en: {
		openGame: 'Open game',
		onlyAdult: 'Only 18+',
		casinoCertified: 'Casino is certified by the Anjouan Gaming Authority',
		download: 'Download Casino',
		play: 'Play Min anywhere, anytime',
		install: 'Install App',
		socials: 'Us on social media',
	},
	de: {
		openGame: 'Spiel öffnen',
		onlyAdult: 'Nur für Erwachsene ab 18 Jahren',
		casinoCertified:
			'Das Casino ist von der Anjouan Gaming Authority zertifiziert. Zutritt nur für Personen ab 18 Jahren.',
		download: 'Casino herunterladen',
		play: 'Spiele Min überall und jederzeit',
		install: 'App installieren',
		socials: 'In sozialen Netzwerken',
	},
	fr: {
		openGame: 'Jeu ouvert',
		onlyAdult: 'Réservé aux personnes de plus de 18 ans',
		casinoCertified: "Casino agréé par l'Autorité des jeux d'Anjouan",
		download: 'Télécharger le casino',
		play: 'Jouez partout, à tout moment',
		install: "Installer l'application",
		socials: 'Suivez-nous sur les réseaux sociaux',
	},
	es: {
		openGame: 'Juego abierto',
		onlyAdult: 'Solo mayores de 18 años',
		casinoCertified:
			'El casino está certificado por la Autoridad de Juego de Anjouan',
		download: 'Descargar Сasino',
		play: 'Juega con Min donde y cuando quieras',
		install: 'Instalar App',
		socials: 'Síguenos en redes sociales',
	},
	it: {
		openGame: 'Gioco aperto',
		onlyAdult: 'Solo per maggiori di 18 anni',
		casinoCertified:
			"Il casinò è certificato dall'Autorità per il Gioco d'Azzardo di Anjouan",
		download: 'Scarica il casinò',
		play: 'Gioca a Min ovunque, in qualsiasi momento',
		install: "Installa I'app",
		socials: 'Noi sui social media',
	},
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)['en'];
