import faker from 'faker';

const mount = (el) => {

    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

    el.innerHTML = cartText;
    
  };
  
  if(process.env.NODE_ENV === 'development') {

    const el =   document.querySelector('#dev-cart');
    if(el) {
      mount(el);
    }
  }
  
  // up to the container to decide when to show our application on screen
  export { mount };
  