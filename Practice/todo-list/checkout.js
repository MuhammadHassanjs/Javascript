document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach(phone => {
            const phoneItem = document.createElement('div');
            phoneItem.classList.add('phone-item');
            phoneItem.innerHTML = `
                <h2>${phone.brand} ${phone.model}</h2>
                <p>RAM: ${phone.ram}GB</p>
                <p>ROM: ${phone.rom}GB</p>
                <p>Camera: ${phone.camera}</p>
                <p>Price: $${phone.price}</p>
            `;
            cartItemsContainer.appendChild(phoneItem);
        });
    }
});
