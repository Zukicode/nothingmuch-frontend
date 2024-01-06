import { FC, useEffect, useState } from 'react';

import styles from './Login.module.scss';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchAuthLogin } from '@/redux/user/user.action';
import { HOME_ROUTE, REGISTER_ROUTE } from '@/routes/routes';
import { Link, useNavigate } from 'react-router-dom';

export const Login: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [values, setValues] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState<boolean>(false);

	const [isVisiblePassword, setVisiblePassword] = useState(false);
	const [isRememberMe, setRememberMe] = useState(false);

	const toggleVisiblePassword = (e: any) => {
		e.preventDefault();
		setVisiblePassword(!isVisiblePassword);
	};

	const toggleRememberMe = () => setRememberMe(!isRememberMe);

	const authIntoProfile = async e => {
		e.preventDefault();
		const data = await dispatch(fetchAuthLogin(values));

		if (!data.payload) {
			setError(true);
			return;
		}

		if ('token' in data.payload) {
			if (isRememberMe) {
				localStorage.setItem('token', data.payload.token);
			} else {
				sessionStorage.setItem('token', data.payload.token);
			}
		}

		navigate(HOME_ROUTE);
	};

	useEffect(() => {
		setError(false);
	}, [values]);

	return (
		<div className={styles.login}>
			<h1>Sign In</h1>

			<form onSubmit={e => authIntoProfile(e)}>
				<input
					onChange={e => setValues({ ...values, email: e.target.value })}
					type='text'
					placeholder='Email'
					className={error ? styles.error : ''}
				/>

				<div className={styles.passwordInput}>
					<input
						onChange={e => setValues({ ...values, password: e.target.value })}
						type={isVisiblePassword ? 'text' : 'password'}
						placeholder='Password'
						className={error ? styles.error : ''}
					/>

					<div onClick={toggleVisiblePassword} className={styles.showPassword}>
						{isVisiblePassword ? <FaEyeSlash /> : <FaEye />}
					</div>
				</div>

				<div onClick={toggleRememberMe} className={styles.remember}>
					<div className={styles.checkbox}>{isRememberMe && <MdDone />}</div>
					<p>Remember me</p>
				</div>

				{error && (
					<p className={styles.error}>Check the correctness of the data!</p>
				)}

				<button className={styles.submit} type='submit'>
					Login
				</button>

				<p className={styles.signUpAccount}>
					Don't have any account? <Link to={REGISTER_ROUTE}>Sign up</Link>
				</p>
			</form>
		</div>
	);
};
