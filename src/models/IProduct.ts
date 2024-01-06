interface ImageModel {
	base64: string;
}

export interface IProduct {
	title: string;
	descripiton: string;
	sizes: string[];
	price: number;
	quantity: number;
	availability: boolean;
	images: ImageModel[];
}
