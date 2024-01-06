import styles from './OrderHistory.module.scss';

export const OrderHistory = () => {
	return (
		<div className={styles.orders}>
			<div className={styles.header}>
				<h1 className={styles.title}>Order history</h1>
			</div>

			<table>
				<thead>
					<tr>
						<th>Order ID</th>
						<th>Date</th>
						<th>Total</th>
						<th>Status</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>1</td>
						<td>2024-01-01</td>
						<td>$100.00</td>
						<td>Completed</td>
					</tr>

					<tr>
						<td>2</td>
						<td>2024-01-02</td>
						<td>$50.00</td>
						<td>Processing</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
