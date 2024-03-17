import Buyable from "./Buyable";
import Buyable2 from "./Buyable2";  

export default class Cart{
  private _items: Buyable2 [] = [];

  add (item: Buyable2): void {
    this._items.push(item);

  }

  get items(): Buyable2[] {
    return[...this._items];
  }

  sum(): number {
    let sum = 0
    for (let i=0; i<this._items.length; i++) {
      sum += this._items[i].price
    }
    return sum
  }

  sumWithDiscount(discount: number): number {
    let sum = 0
    for (let i=0; i<this._items.length; i++) {
      sum += this._items[i].price
    }
    sum *= (1-discount/100)
    return sum
  }

  removeFromCart (id: number): void {
    for (let i=0; i<this._items.length; i++) {
      if (this._items[i].id === id) {
        this._items.splice(i,1)
        break
      };
    };
  }
}

/*
Реализуйте в нём несколько дополнительных функций:

Функцию, считающую суммарную стоимость (без учёта скидки)

Функцию, считающую суммарную стоимость (с учётом скидки) - скидка должна быть параметром, передаваемым в эту функцию

Функцию, позволяющую удалять уже добавленный в корзину объект по полю id

Для функций обязательно:

Указание типов параметров

Указание типа возвращаемого значения (если функция ничего не возвращает, то должен быть указан тип void)

Напишите авто-тесты на функции - удостоверьтесь, что покрытие по строкам для тестируемых функций равно 100%.
*/