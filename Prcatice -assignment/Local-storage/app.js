let cart=document.querySelector("#cart")

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

]

// for(i=0;i<phones.length;i++){
//     const cartdetails=phones[i]
//     cart.innerHTML += `<div style="margin:40px;border:1px solid black;padding:60px;border-radius:25px"}><p s> <b>brand</b> :${cartdetails.brand}</p><p> <b>Model</b> :${cartdetails.model}</p><p> <b>Ram</b> :${cartdetails.ram}</p><p> <b>ROM</b> :${cartdetails.rom}</p><b>ROM</b> :${cartdetails.rom}</p> <button onclick="hello(i)"style="border-radius:10px;padding:10px">Add to Cart</button></div>`
//     function hello(i){
//         if(localStorage.getItem('data')==null){
//             localStorage.setItem('data','[]');
//         }
//         let old_data=JSON.parse(localStorage.getItem('data'));
//         old_data.push(cartdetails)
//         localStorage.setItem('data',JSON.stringify(old_data))
//         Swal.fire({
//             position: 'top-right',
//             title: "Item added to cart successfully",
//             icon: "success"
//           });
//     }
// }
