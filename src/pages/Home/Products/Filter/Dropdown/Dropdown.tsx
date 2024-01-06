import { FC } from 'react';

import styles from './Dropdown.module.scss';

import { FaAngleDown } from 'react-icons/fa6';

export const Dropdown: FC<{ title: string }> = ({ title }) => {
	return (
		<div className={styles.dropdown}>
			<div className={styles.current}>
				<h1>Select {title}</h1>
				<FaAngleDown />
			</div>
		</div>
	);
};
