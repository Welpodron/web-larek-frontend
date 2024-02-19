import {
	IProduct,
	TOrderInvoice,
	IOrderResult,
	IShopAPI,
	TApiListResponse,
} from '../../types';

import { API } from '../base/API';

class ShopAPI extends API implements IShopAPI {
	readonly cdn: string;

	constructor(cdn: string, baseUrl: string, options?: RequestInit) {
		super(baseUrl, options);
		this.cdn = cdn;
	}

	getProduct(id: string) {
		return this.get(`/product/${id}`).then((item: IProduct) => ({
			...item,
			image: this.cdn + item.image,
		}));
	}

	getProducts() {
		return this.get('/product').then((data: TApiListResponse<IProduct>) =>
			data.items.map((item) => ({
				...item,
				image: this.cdn + item.image,
			}))
		);
	}

	createOrder(invoice: TOrderInvoice) {
		return this.post('/order', invoice).then((data: IOrderResult) => data);
	}
}

export { IShopAPI, ShopAPI };
