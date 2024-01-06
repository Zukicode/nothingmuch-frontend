import { useEffect, useState } from 'react';

import styles from './AccountBlock.module.scss';

import { ConfirmModal } from '@/components/ConfirmModal/ConfirmModal';
import { InputBlock } from '../InputBlock/InputBlock';

import { IUser } from '@/models/IUser';

import { useAppSelector } from '@/hooks/useAppSelector';

import axios from '@/config/axios.ts';

import noAvatarImage from '@/assets/no-avatar.jpg';

export const AccountBlock = () => {
	const { data } = useAppSelector(state => state.user);

	//Modal for confirm change
	const [isShowModalSure, setShowModalSure] = useState({
		isVisible: false,
		handleClick: () => {},
	});

	//Information about account
	const [valuesAccount, setAccountValue] = useState<IUser>({ ...data });

	//Success and Error for form in account, billing information
	const [isSuccess, setSuccess] = useState({
		successAccount: false,
		successBilling: false,
	});
	const [isError, setError] = useState({
		errorAccount: false,
		errorBilling: false,
	});

	//Modal open
	const youSureModalOpen = (e, cb) => {
		e.preventDefault();
		setShowModalSure({ isVisible: true, handleClick: cb });
	};

	//Convert image to base64 code and write inside valuesAccount information
	const handleChangeImage = (e: any) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				const base64Data = reader.result;
				setAccountValue({ ...valuesAccount, avatar: base64Data });
			};

			reader.readAsDataURL(file);
		}
	};

	//Functions for change inside MongoDB
	const saveChangeAccount = async e => {
		e.preventDefault();
		setError({ ...isError, errorAccount: false });
		setShowModalSure({ isVisible: false, handleClick: () => {} });

		try {
			await axios.post('/change/account', {
				...valuesAccount,
			});
		} catch (error) {
			console.log(error);
			setError({ ...isError, errorAccount: true });
			return;
		}

		setSuccess({ ...isSuccess, successAccount: true });
	};

	const saveChangeBilling = async e => {
		e.preventDefault();
		setError({ ...isError, errorBilling: false });
		setShowModalSure({ isVisible: false, handleClick: () => {} });

		if (valuesAccount) {
			try {
				setSuccess({ ...isSuccess, successBilling: true });
				await axios.post('/change/billings', {
					...valuesAccount.billings,
				});
			} catch (error) {
				console.log(error);
				setError({ ...isError, errorBilling: true });
			}
		} else {
			setError({ ...isError, errorBilling: false });
		}
	};

	//Check if inside redux toolkit (user) change data, we change inside valuesAccount info
	useEffect(() => {
		if (data) setAccountValue(data);
	}, [data]);

	//If user start write again, after error, then error message delete
	useEffect(() => {
		setError({ ...isError, errorAccount: false });
	}, [valuesAccount]);

	//Delete message success for account and billing information
	useEffect(() => {
		if (isSuccess.successAccount) {
			const timer = setTimeout(() => {
				setSuccess({ ...isSuccess, successAccount: false });
			}, 2000);

			return () => clearTimeout(timer);
		}

		if (isSuccess.successBilling) {
			const timer = setTimeout(() => {
				setSuccess({ ...isSuccess, successBilling: false });
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [isSuccess]);

	return (
		<>
			{isShowModalSure.isVisible && (
				<ConfirmModal
					handleClick={isShowModalSure.handleClick}
					closeModal={() =>
						setShowModalSure({ ...isShowModalSure, isVisible: false })
					}
				/>
			)}

			<div className={styles.account}>
				<div className={styles.header}>
					<h1 className={styles.title}>Account</h1>
				</div>

				<div className={styles.content}>
					<form>
						<div className={styles.input}>
							<p>First name</p>
							<input
								type='text'
								placeholder='Your first name'
								value={valuesAccount?.names.firstName}
								onChange={e =>
									setAccountValue({
										...valuesAccount,
										names: {
											...valuesAccount.names,
											firstName: e.target.value,
										},
									})
								}
							/>
						</div>

						<div className={styles.input}>
							<p>Last name</p>

							<input
								type='text'
								placeholder='Your last name'
								value={valuesAccount?.names.lastName}
								onChange={e =>
									setAccountValue({
										...valuesAccount,
										names: {
											...valuesAccount.names,
											lastName: e.target.value,
										},
									})
								}
							/>
						</div>

						<div className={styles.input}>
							<p>Email</p>
							<input
								type='email'
								placeholder='Email'
								value={valuesAccount?.email}
								onChange={e =>
									setAccountValue({
										...valuesAccount,
										email: e.target.value,
									})
								}
							/>
						</div>

						<div className={styles.input}>
							<p>Phone number</p>
							<input
								type='tel'
								placeholder='Phone number'
								value={valuesAccount.phone ? valuesAccount.phone : ''}
								onChange={e =>
									setAccountValue({
										...valuesAccount,
										phone: e.target.value,
									})
								}
							/>
						</div>

						{isSuccess.successAccount && (
							<p className={styles.success}>The changes were successful!</p>
						)}
						{isError.errorAccount && (
							<p className={styles.errorMessage}>There has been an error!</p>
						)}

						<button onClick={e => youSureModalOpen(e, saveChangeAccount)}>
							Save changes
						</button>
					</form>

					<div className={styles.image}>
						<img
							src={
								valuesAccount?.avatar ? valuesAccount?.avatar : noAvatarImage
							}
							alt='user'
						/>
						<label
							htmlFor='fileImageInput'
							className={styles.changeImageButton}
						>
							<input
								type='file'
								id='fileImageInput'
								onChange={handleChangeImage}
							/>
							<span>Choose image</span>
						</label>
					</div>
				</div>
			</div>

			<div className={styles.billing}>
				<div className={styles.header}>
					<h1 className={styles.title}>Billing addres</h1>
				</div>

				<div className={styles.content}>
					<div className={styles.names}>
						<InputBlock
							title='First name'
							placeholder='Your first name'
							value={valuesAccount?.names.firstName}
						/>

						<InputBlock
							title='Last name'
							placeholder='Your last name'
							value={valuesAccount?.names.lastName}
						/>
					</div>

					<InputBlock
						title='Street addres'
						placeholder='Addres '
						value={valuesAccount?.billings?.street}
						onChange={e =>
							setAccountValue({
								...valuesAccount,
								billings: {
									...valuesAccount.billings,
									street: e.target.value,
								},
							})
						}
					/>

					<div className={styles.countryInfo}>
						<InputBlock
							title='Country'
							placeholder='Your country'
							value={valuesAccount?.billings?.country}
							onChange={e =>
								setAccountValue({
									...valuesAccount,
									billings: {
										...valuesAccount.billings,
										country: e.target.value,
									},
								})
							}
						/>

						<InputBlock
							title='City'
							placeholder='City'
							value={valuesAccount?.billings?.city}
							onChange={e =>
								setAccountValue({
									...valuesAccount,
									billings: {
										...valuesAccount.billings,
										city: e.target.value,
									},
								})
							}
						/>

						<InputBlock
							title='Zip code'
							placeholder='Your zip-code'
							value={valuesAccount?.billings?.zipcode}
							onChange={e =>
								setAccountValue({
									...valuesAccount,
									billings: {
										...valuesAccount.billings,
										zipcode: e.target.value,
									},
								})
							}
						/>
					</div>

					<div className={styles.feedback}>
						<InputBlock
							title='Email'
							type={'email'}
							placeholder='Email'
							value={valuesAccount?.email}
							onChange={e =>
								setAccountValue({
									...valuesAccount,
									email: e.target.value,
								})
							}
						/>
						<InputBlock
							title='Phone'
							type={'tel'}
							placeholder='Phone number'
							value={valuesAccount?.phone}
							onChange={e =>
								setAccountValue({
									...valuesAccount,
									phone: e.target.value,
								})
							}
						/>
					</div>

					{isSuccess.successBilling && (
						<p className={styles.success}>The changes were successful!</p>
					)}
					{isError.errorBilling && (
						<p className={styles.errorMessage}>There has been an error!</p>
					)}

					<button onClick={e => youSureModalOpen(e, saveChangeBilling)}>
						Save changes
					</button>
				</div>
			</div>
		</>
	);
};
