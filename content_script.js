console.log('hehehhe')
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = `
#main_wrapper {
	width: 50%;
	float: left;
	overflow: scroll;
}
#page {
	padding: 0 !important;
	min-width: 0;
}

.hide {
	display: none !important;
}

#ez-digger {
    float: left;
    width: 50%;
    border: 0;
    height: 100%;
}

#site_headers_super_wrap, .mprelease_info, .flash_messages, #site_footer_wrap, #page_aside, .item_add_to_cart, th:nth-child(4), .mprelease_info .right {
	display: none;
}

#page_content {
	width: 100% !important;
}

`;
document.body.appendChild(css);
var iframe = document.createElement("iframe");
let mainWrapper = document.querySelector(`#main_wrapper`)
mainWrapper.parentNode.insertBefore(iframe, mainWrapper.nextSibling)

iframe.src = `http://localhost:1234/view1`
iframe.id = `ez-digger`
window.EzDigger = {
	goTo(el) {
		console.log(arguments)

		let title = document.querySelector(`#site_account_menu`).dataset.title
		let buyer = title.substring(title.indexOf(`as `) + 3)
		let seller = el.target.parentNode.querySelector(`a`).textContent
		console.log(buyer, seller)

		iframe.src = `http://localhost:1234/view1?buyer=${buyer}&seller=${seller}`
	}
}


let sellers = document.querySelectorAll(`.seller_info li:first-child`)
for (seller of sellers) {
	let button = document.createElement("button");
	button.textContent = `ezDigger`
	button.addEventListener(`click`, EzDigger.goTo)
	seller.appendChild(button)
}