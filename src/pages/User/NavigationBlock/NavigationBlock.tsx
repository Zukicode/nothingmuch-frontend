import { useAppDispatch } from '@/hooks/useAppDispatch';
import { logout } from '@/redux/user/user.slice';
import { USER_OREDRS_ROUTE, USER_ROUTE } from '@/routes/routes';
import { FC } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { LuHistory } from 'react-icons/lu';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './NavigationBlock.module.scss';

export const NavigationBlock: FC = () => {
	const dispatch = useAppDispatch();

	const { pathname } = useLocation();

	const navigate = useNavigate();

	const changeContent = (path: string) => {
		navigate(path);
	};

	const logOut = () => {
		dispatch(logout());
		navigate('/');
	};

	return (
		<div className={styles.navigation}>
			<h1>Navigation</h1>

			<ul>
				<li
					onClick={() => changeContent(USER_ROUTE)}
					className={pathname === '/user' ? styles.active : ''}
				>
					<span className={`${styles.icon} ${styles.iuser}`}>
						<FaRegUser />
					</span>
					<p>Profile</p>
				</li>

				<li
					onClick={() => changeContent(`${USER_ROUTE}${USER_OREDRS_ROUTE}`)}
					className={pathname.includes('/orders') ? styles.active : ''}
				>
					<span className={`${styles.icon} ${styles.history}`}>
						<LuHistory />
					</span>
					<p>Order history</p>
				</li>

				<li onClick={logOut}>
					<span className={`${styles.icon} ${styles.logout}`}>
						<BiLogOut />
					</span>
					<p>Log-out</p>
				</li>
			</ul>
		</div>
	);
};
