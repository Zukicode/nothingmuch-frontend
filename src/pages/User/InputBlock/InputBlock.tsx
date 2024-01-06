import { FC } from 'react';
import styles from './InputBlock.module.scss';

interface Props {
	title: string;
	type?: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: any) => void;
}

export const InputBlock: FC<Props> = ({
	title,
	type = 'text',
	placeholder = '',
	value,
	onChange,
}) => {
	return (
		<div className={styles.input}>
			<p>{title}</p>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};
