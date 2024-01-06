import { FC, useEffect, useState } from 'react';

import styles from './Register.module.scss';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchAuthRegister } from '@/redux/user/user.action';
import { HOME_ROUTE, LOGIN_ROUTE } from '@/routes/routes';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export const Register: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [values, setValues] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState<boolean>(false);

	const [isVisiblePassword, setVisiblePassword] = useState({
		password: false,
		confirm: false,
	});

	const toggleVisiblePassword = (e: any, isConfirm: boolean) => {
		e.preventDefault();

		if (isConfirm) {
			setVisiblePassword({
				...isVisiblePassword,
				confirm: !isVisiblePassword.confirm,
			});
		} else {
			setVisiblePassword({
				...isVisiblePassword,
				password: !isVisiblePassword.password,
			});
		}
	};

	const createNewUser = async e => {
		e.preventDefault();

		if (values.password !== values.confirmPassword) {
			setError(true);
			return;
		}
		const data = await dispatch(fetchAuthRegister(values));

		if ('token' in data.payload)
			sessionStorage.setItem('token', data.payload.token);

		navigate(HOME_ROUTE);
	};

	useEffect(() => {
		setError(false);
	}, [values]);

	return (
		<div className={styles.register}>
			<h1>Sign Up</h1>

			<form>
				<input
					type='text'
					placeholder='Email'
					onChange={e => setValues({ ...values, email: e.target.value })}
					className={error ? styles.error : ''}
				/>

				<div className={styles.passwordInput}>
					<input
						type={isVisiblePassword.password ? 'text' : 'password'}
						placeholder='Password'
						onChange={e => setValues({ ...values, password: e.target.value })}
						className={error ? styles.error : ''}
					/>

					<button
						onClick={e => toggleVisiblePassword(e, false)}
						className={styles.showPassword}
					>
						{isVisiblePassword.password ? <FaEyeSlash /> : <FaEye />}
					</button>
				</div>

				<div className={styles.passwordInput}>
					<input
						type={isVisiblePassword.confirm ? 'text' : 'password'}
						placeholder='Confirm Password'
						onChange={e =>
							setValues({ ...values, confirmPassword: e.target.value })
						}
						className={error ? styles.error : ''}
					/>

					<button
						onClick={e => toggleVisiblePassword(e, true)}
						className={styles.showPassword}
					>
						{isVisiblePassword.confirm ? <FaEyeSlash /> : <FaEye />}
					</button>
				</div>

				{error && (
					<p className={styles.error}>Check the correctness of the data!</p>
				)}

				<button
					onClick={e => createNewUser(e)}
					className={styles.submit}
					type='submit'
				>
					Register
				</button>

				<p className={styles.signUpAccount}>
					Alredy have account? <Link to={LOGIN_ROUTE}>Sign in</Link>
				</p>
			</form>
		</div>
	);
};
