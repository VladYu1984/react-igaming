import { useState } from 'react';
import { Button } from '../Button/Button';
import { ReactComponent as Logo } from '../../assets/icons/logo-text.svg';
import slotsImg from '../../assets/images/slots.png';
import bgImg from '../../assets/images/bg.png';
import styles from './MainBlock.module.scss';
import { Loader } from '../Loader/Loader';
import { useLang } from '../../providers/LanguageContext';

const GAME_URL =
	'https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en';

export const MainBlock = () => {
	const [isGameOpen, setIsGameOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { t } = useLang();

	const openGame = () => {
		setIsGameOpen(true);
		setIsLoading(true);
	};

	const closeGame = () => setIsGameOpen(false);

	return (
		<main
			className={styles.mainBlock}
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<div className={styles.container}>
				<Logo className={styles.logo} />
				<img src={slotsImg} alt="Slots" className={styles.image} />
				<Button text={t('openGame')} uppercase onClick={openGame} />
			</div>

			{isGameOpen && (
				<div className={styles.gameModal}>
					<button className={styles.closeBtn} onClick={closeGame}>
						×
					</button>
					{isLoading && <Loader />}
					<iframe
						src={GAME_URL}
						title="Game"
						frameBorder="0"
						allowFullScreen
						onLoad={() => setIsLoading(false)}
					/>
				</div>
			)}
		</main>
	);
};
