import { FC } from 'react';

import { InputBlock } from '@/pages/User/InputBlock/InputBlock';
import styles from './BillingCart.module.scss';

export const BillingCart: FC = () => {
	return (
		<div className={styles.billing}>
			<div className={styles.header}>
				<h1 className={styles.title}>Billing addres</h1>
			</div>

			<div className={styles.content}>
				<div className={styles.names}>
					<InputBlock title='First name' placeholder='Your first name' />

					<InputBlock title='Last name' placeholder='Your last name' />
				</div>

				<InputBlock title='Street addres' placeholder='Addres' />

				<div className={styles.countryInfo}>
					<InputBlock title='Country' placeholder='Your country' />

					<InputBlock title='City' placeholder='Your city' />

					<InputBlock title='Zip code' placeholder='Zip Code' />
				</div>

				<div className={styles.feedback}>
					<InputBlock title='Email' type={'email'} placeholder='Email' />
					<InputBlock title='Phone' type={'tel'} placeholder='Phone number' />
				</div>
			</div>
		</div>
	);
};
