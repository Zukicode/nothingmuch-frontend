import styles from './Filter.module.scss';

import { Dropdown } from './Dropdown/Dropdown';
export const Filter = () => {
	return (
		<div className={styles.filter}>
			<div className={styles.left}>
				<Dropdown title='Category' />
				<Dropdown title='Pricing' />
			</div>

			<Dropdown title='Rating' />
		</div>
	);
};
