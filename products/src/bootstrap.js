import faker from 'faker';

// mount('#dev-products')

/**
 * 
 * @param {*} el html element 
 */
const mount = (el) => {

  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  
  el.innerHTML = products;

  // if using react
  //  ReactDOM.render(<App />, el);

};

// check if we're running in isolation
if(process.env.NODE_ENV === 'development') {

  const el =   document.querySelector('#dev-products');
  if(el) {
    mount(el);
  }
}

// up to the container to decide when to show our application on screen
export { mount };
