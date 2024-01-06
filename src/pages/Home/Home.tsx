import { FC } from 'react';

import styles from './Home.module.scss';

import { Banner } from '@/components/Banner/Banner';
import { WhyChooseUs } from './WhyChooseUs/WhyChooseUs';

import { Contact } from '@/components/Contact/Contact';
import { FaAnglesDown } from 'react-icons/fa6';
import { Products } from './Products/Products';

export const Home: FC = () => {
	return (
		<div className={styles.home}>
			<Banner />

			<div className={styles.animationDown}>
				<FaAnglesDown size={38} color={'#222831'} />
			</div>

			<Products />

			<Contact />

			<WhyChooseUs />
		</div>
	);
};
