import { useEffect, useState } from 'react';
import { ContactModal } from '../ContactModal/ContactModal';
import styles from './Contact.module.scss';

export const Contact = () => {
	const [isVisibleModal, setVisibleModal] = useState(false);

	const toggleModal = () => setVisibleModal(!isVisibleModal);

	useEffect(() => {
		const body = document.querySelector('body');

		if (body) {
			if (isVisibleModal && body !== null) body.style.overflow = 'hidden';
			else body.style.overflow = 'auto';
		}
	}, [isVisibleModal]);

	return (
		<>
			{isVisibleModal && <ContactModal toggleModal={toggleModal} />}
			<div className={styles.contact}>
				<div className={styles.bgEffect} />

				<h1>Get answers to all your questions.</h1>

				<p>
					Problems trying to resolve the conflict between the two major realms
					of Classical physics:
				</p>

				<button onClick={toggleModal}>Contact our company</button>

				<div className={styles.socialMedia}></div>
			</div>
		</>
	);
};
