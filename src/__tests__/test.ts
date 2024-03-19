import Cart from '../Cart';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0); 
});

test('add & get methods of class Cart', () => {
  const cart = new Cart();
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
  const result = [{
      id: 101,
      name: 'Мстители',
      price: 300,
      nameEn: 'Avengers',
      year: 2012,
      country: 'США',
      slogan: 'Avengers Assemble!',
      genre: [ 'боевик', 'фэнтези', 'приключения' ],
      time: '137 мин./02:17'
    }]
  expect(result).toEqual(cart.items); 
});

test('sum method of class Cart', () => {
  const cart = new Cart();
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
  const sum = cart.sum()
  expect(sum).toEqual(1300); 
});

test('sumWithDiscount method of class Cart', () => {
  const cart = new Cart();
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
  const sum = cart.sumWithDiscount(20)
  expect(sum).toBe(1040); 
});

test('removeFromCart method of class Cart', () => {
  const cart = new Cart();
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
  cart.removeFromCart(101)
  expect(cart.items.length).toBe(0); 
});