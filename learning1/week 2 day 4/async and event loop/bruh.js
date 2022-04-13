const orderPizza = () => new Promise(makePizza);

function makePizza(resolve, reject) {
  let num = 0;
  if (num > 0) {
    resolve(console.log("Pizza is ready to eat"));
  } else {
    const error = "Pizza is raw";
    reject(error);
  }
}

orderPizza();