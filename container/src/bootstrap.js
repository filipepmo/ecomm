
import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log("Bootstrapping container...");

cartMount(document.querySelector('#my-cart'));

productsMount(document.querySelector('#my-products'));
