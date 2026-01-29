import { Footer } from './components/Footer/Footer';
import { MainBlock } from './components/MainBlock/MainBlock';
import styles from './App.module.scss';
import { LanguageProvider } from './providers/LanguageContext';

const App = () => {
	return (
		<div className={styles.app}>
			<LanguageProvider>
				<MainBlock />
				<Footer />
			</LanguageProvider>
		</div>
	);
};

export default App;
