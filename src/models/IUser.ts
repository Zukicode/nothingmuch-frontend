export interface IUser {
	names: {
		firstName: string;
		lastName: string;
	};
	email: string;
	avatar: string;
	phone: number | null;
	billings: {
		street: string;
		country: string;
		city: string;
		zipcode: string;
	};
	orders: [];
}
