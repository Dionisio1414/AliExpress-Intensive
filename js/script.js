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

            showMore();
            calcGoods(1);

            trigger.remove();
            removeBtn.classList.add('goods__item-remove');
            removeBtn.innerHTML = '&times';

            item.appendChild(removeBtn);
            cartWrapper.appendChild(item);

            if(empty) {
                empty.remove();
            }

            calcTotal();
            removeFromCat();

        }, false);
    });

    titles.forEach(function(item) {
        if(item.textContent.length < 70) {
            return;
        } else {
            let str = item.textContent.slice(0, 71) + "...";
            item.textContent = str;
        }
    });

    let showMore = function() {
        confirm.style.display = 'block';
        let counter = 100;
        const id = setInterval(() => {
            if(counter == 10) {
                clearInterval(id);
                confirm.style.display = 'none';
            } else {
                counter--;
                confirm.style.transform = `translateX(${counter}px)`;
                confirm.style.opacity = '.' + counter;
            }
        }, 10);
    };

    let calcGoods = function(i) {
        const items = cartWrapper.querySelectorAll('.goods__item');
        badge.textContent = i + items.length;
        const empty = document.createElement('div');
        empty.textContent = 'Ваша корзина пока пуста';
        empty.classList.add('empty');
        if(items.length + i == 0) cartWrapper.append(empty);
    }

    let calcTotal = function() {
        const prices = document.querySelectorAll('.cart__wrapper > .goods__item > .goods__price > span');
        let total = 0;
        prices.forEach(item => {
            total += +item.textContent;
        });

        totalCost.textContent = total;
    }

    let removeFromCat = function() {
        let removeBtn = document.querySelectorAll('.goods__item-remove');
        let empty = document.createElement('div');
        let crtWrp = document.querySelector('.cart__wrapper');
        empty.textContent = 'Корзина пуста';
        removeBtn.forEach(function(btn) {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                calcGoods(0);
                calcTotal();
            }, false);
        });
    }
});
