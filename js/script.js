window.addEventListener('DOMContentLoaded', () => {
    const cartWrapper = document.querySelector('.cart__wrapper'),
      cart = document.querySelector('.cart'),
      close = cart.querySelector('.cart__close'),
      open = document.getElementById('cart'),
      products = document.querySelectorAll('.goods__item'),
      goodsBtn = document.querySelectorAll('.goods__btn'),
      confirm = document.querySelector('.confirm'),
      badge = document.querySelector('.nav__badge'),
      totalCost = document.querySelector('.cart__total > span'), 
      titles = document.querySelectorAll('.goods__title'); 

    open.addEventListener('click', (e) => {
        cart.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, false);   

    close.addEventListener('click', (e) => {
        cart.style.display = 'none';
        document.body.style.overflow = 'unset';
    }, false);

    goodsBtn.forEach(function(btn, i) {
        btn.addEventListener('click', () => {
            let item = products[i].cloneNode(true), 
            trigger = item.querySelector('button'),
            removeBtn = document.createElement('div'),
            empty = cartWrapper.querySelector('.empty');

            trigger.remove();
            removeBtn.classList.add('goods__item-remove');
            removeBtn.innerHTML = '&times';

            item.appendChild(removeBtn);
            cartWrapper.appendChild(item);

            if(empty) {
                empty.remove();
            }

        }, false);
    });
});
