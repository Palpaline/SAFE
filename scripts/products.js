const quantities = document.querySelectorAll('.product__quantity');

for (const quantity of quantities) {
    const amounts = quantity.querySelectorAll('.product__quantity__amount');
    const lesses = quantity.querySelectorAll('.product__quantity__less');
    const mores = quantity.querySelectorAll('.product__quantity__more');

    for (const amount of amounts) {
        amount.addEventListener('input', () => console.log('item amount => ', amount.value));
    }

    for (const less of lesses) {
        less.addEventListener('click', (e) => {
            const amount = e.target.parentNode.querySelector('.product__quantity__amount')
            if (amount.value > 0) {
                amount.value = Number(amount.value) - 1;
                console.log('item amount => ', amount.value);
            }
        });
    }

    for (const more of mores) {
        more.addEventListener('click', (e) => {
            const amount = e.target.parentNode.querySelector('.product__quantity__amount')
            amount.value = Number(amount.value) + 1;
            console.log('item amount => ', amount.value);
        });
    }
}
