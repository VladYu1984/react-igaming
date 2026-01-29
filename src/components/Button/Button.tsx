import styles from './Button.module.scss';

interface ButtonProps {
	children?: React.ReactNode;
	className?: string;
	text?: string;
	uppercase?: boolean;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	text,
	uppercase = false,
	icon,
	iconPosition = 'left',
	className = '',
	onClick,
}) => {
	return (
		<button
			className={[styles.button, uppercase && styles.uppercase, className]
				.filter(Boolean)
				.join(' ')}
			onClick={onClick}
		>
			{icon && iconPosition === 'left' && (
				<span className={styles.icon}>{icon}</span>
			)}
			{text || children}
			{icon && iconPosition === 'right' && (
				<span className={styles.icon}>{icon}</span>
			)}
		</button>
	);
};
