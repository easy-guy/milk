var doc = document,
    productsList = doc.getElementsByClassName('products__item'),
    prodBtns = doc.getElementsByClassName('products__buy'),
    basketBtn = doc.querySelector('.menu__link-iconed'),
    basketWin = doc.querySelector('.basket__window'),
    basket = doc.querySelector('.basket__products'),
    basketClose = doc.querySelector('.basket__close');
for (var i = 0; i < prodBtns.length; i++) {
	prodBtns[i].setAttribute('data-btn', i);
}
for (var i = 0; i < prodBtns.length; i++) {
	prodBtns[i].onclick = function() {
		(this.innerHTML==='добавлено') ? this.innerHTML = 'купить' : this.innerHTML = 'добавлено';
		productsList[this.getAttribute('data-btn')].classList.toggle('products__item-active');
		this.classList.toggle('products__buy-active');
	};
}

basketBtn.onclick = function() {
  basket.innerHTML = '';
  var products = doc.querySelectorAll('.products__item-active'),
	  prodNum = [];
  for (var i = 0; i < products.length; i++) {
  prodNum[i] = products[i].cloneNode(true);
  }
  for (var i = 0; i < products.length; i++) {
	basket.appendChild(prodNum[i]);  
  }
  basketWin.style.display = 'block';
}
basketClose.onclick = function() {
  basketWin.style.display = 'none';
}
