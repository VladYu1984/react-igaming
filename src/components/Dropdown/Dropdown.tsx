import { useState, useRef, useEffect } from 'react';
import { ReactComponent as Chevron } from '../../assets/icons/chevron-down.svg';
import FlagEn from '../../assets/images/flags/en.png';
import FlagDe from '../../assets/images/flags/de.png';
import FlagEs from '../../assets/images/flags/es.png';
import FlagFr from '../../assets/images/flags/fr.png';
import FlagIt from '../../assets/images/flags/it.png';
import styles from './Dropdown.module.scss';

interface Option<T extends string = string> {
	code: T;
	label: string;
}

interface DropdownProps<T extends string = string> {
	value: T;
	options: readonly Option<T>[];
	onChange: (value: T) => void;
	className?: string;
}

const flagMap: Record<string, string> = {
	en: FlagEn,
	de: FlagDe,
	es: FlagEs,
	fr: FlagFr,
	it: FlagIt,
};

export const Dropdown = <T extends string>({
	value,
	options,
	onChange,
}: DropdownProps<T>) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div className={`${styles.dropdown}`} ref={ref}>
			<div className={styles.trigger} onClick={() => setIsOpen((prev) => !prev)}>
				<div className={styles.left}>
					{flagMap[value] && (
						<img src={flagMap[value]} alt={value} className={styles.flag} />
					)}
					<span>{options.find((o) => o.code === value)?.label}</span>
				</div>
				<Chevron />
			</div>
			{isOpen && (
				<div className={styles.list}>
					{options.map(({ code, label }) => (
						<div
							key={code}
							className={styles.item}
							onClick={() => {
								onChange(code);
								setIsOpen(false);
							}}
						>
							{label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
