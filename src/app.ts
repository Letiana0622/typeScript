import Cart from "./Cart"

const cart = new Cart;

cart.add(
  {
    id: 101,
    name: 'Мстители',
    price: 300,
    nameEn: 'Avengers',
    year: 2012,
    country: 'США',
    slogan: 'Avengers Assemble!',
    genre: ['боевик', 'фэнтези', 'приключения'],
    time: '137 мин./02:17',
  }
)

cart.add(
  {
    id: 102,
    name: 'Мстители',
    price: 1000,
    nameEn: 'Avengers',
    year: 2012,
    country: 'США',
    slogan: 'Avengers Assemble!',
    genre: ['боевик', 'фэнтези', 'приключения'],
    time: '137 мин./02:17',
  }
)

console.log(cart.sum())
console.log(cart.sumWithDiscount(20))
console.log(cart.items)