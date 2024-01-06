import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';
import styles from './ConfirmModal.module.scss';

interface ModalProps {
	closeModal: () => void;
	handleClick: () => void;
}

export const ConfirmModal: FC<ModalProps> = ({ closeModal, handleClick }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>
				<div className={styles.header}>
					<h1>Are you sure!</h1>

					<button onClick={closeModal}>
						<IoMdClose />
					</button>
				</div>
				<p>Are you sure you want to continue?</p>

				<div className={styles.buttons}>
					<button onClick={handleClick}>Yes</button>
					<button onClick={closeModal}>No</button>
				</div>
			</div>
		</div>
	);
};
