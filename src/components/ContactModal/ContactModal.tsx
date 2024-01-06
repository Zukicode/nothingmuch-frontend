import { FC } from 'react';
import styles from './ContactModal.module.scss';

interface ConatactModalProps {
	toggleModal: () => void;
}

export const ContactModal: FC<ConatactModalProps> = ({ toggleModal }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>
				<div className={styles.left}>
					<div className={styles.block}>
						<span className={styles.icon}>
							<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
								<title />
								<path d='M21.971,8.92,17.769,7.3a.75.75,0,1,0-.539,1.4l2.168.835a.25.25,0,0,1,0,.466l-7.309,2.924a.257.257,0,0,1-.185,0L4.569,9.989a.249.249,0,0,1,0-.466L6.763,8.7a.75.75,0,1,0-.527-1.4L1.978,8.9a.769.769,0,0,0-.479.72v8.917a.5.5,0,0,0,.277.447l10,4.969.014,0a.472.472,0,0,0,.419,0l.014,0,10-4.969a.5.5,0,0,0,.276-.447V9.5C22.5,9.488,22.547,9.141,21.971,8.92Z' />
								<path d='M11.2,10.1a1,1,0,0,0,1.6,0l3-4A1,1,0,0,0,15,4.5H13.5v-3a1.5,1.5,0,0,0-3,0v3H9a1,1,0,0,0-.8,1.6Z' />
							</svg>
						</span>
						<p>example@gmail.com</p>
					</div>

					<div className={styles.divider} />

					<div className={styles.block}>
						<span className={styles.icon}>
							<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
								<path d='M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z' />
								<path d='M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z' />
							</svg>
						</span>
						<p>(219) 000 000</p>
					</div>
				</div>

				<div className={styles.right}>
					<button onClick={toggleModal} className={styles.close}>
						<svg enableBackground='new 0 0 512 512' viewBox='0 0 512 512'>
							<path d='M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z' />
						</svg>
					</button>

					<div className={styles.text}>
						<h1>Just say hello!</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
							quisquam ipsum debitis maiores ea eaque.
						</p>
					</div>

					<input type='email' placeholder='Email' />

					<textarea placeholder='Subject' />

					<button className={styles.send}>Send Message</button>
				</div>
			</div>
		</div>
	);
};
