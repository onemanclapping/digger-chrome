(function () {

class SellReleasePage {
	constructor() {
		this.rootElement = document
	}

	getItems() {
		return [...this.rootElement.querySelectorAll('.shortcut_navigable')].map(item => new SellReleaseItem(item))
	}

	getUsername() {
		return this.rootElement.querySelector('.user_image').alt
	}

	getItemTitle() {
		return this.rootElement.querySelector('#profile_title').textContent.trim()
	}
}

class SellReleaseItem {
	constructor(rootElement) {
		this.rootElement = rootElement
	}

	getSellerName() {
		return this.rootElement.querySelector('.seller_label + strong').textContent
	}

	getShippingLocation() {
		return this.rootElement.querySelector('.seller_info li:nth-child(3) span').nextSibling.textContent
	}

	getPrice() {
		return this.rootElement.querySelector('.price').textContent
	}
}

const page = new SellReleasePage()
const items = page.getItems().map(item => {
	return {
		sellerName: item.getSellerName(),
		shippingLocation: item.getShippingLocation(),
		price: item.getPrice()
	}
})

return {
	username: page.getUsername(),
	itemTitle: page.getItemTitle(),
	items
}

}())