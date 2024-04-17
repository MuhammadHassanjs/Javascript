const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Abdullah',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },
];

document.addEventListener('DOMContentLoaded', function() {
    const phoneList = document.getElementById('phoneList');
    phones.forEach((phone, index) => {
        const phoneBox = document.createElement('div');
        phoneBox.classList.add('phone-box');
        phoneBox.innerHTML = `
            <h2>${phone.brand} ${phone.model}</h2>
            <p>RAM: ${phone.ram}GB</p>
            <p>ROM: ${phone.rom}GB</p>
            <p>Camera: ${phone.camera}</p>
            <p>Price: $${phone.price}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        phoneList.appendChild(phoneBox);
    });
});

function addToCart(index) {
    const selectedPhone = phones[index];
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(selectedPhone);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Item has been added to cart!');
}

function checkout() {
    window.location.href = 'checkout.html';
}
