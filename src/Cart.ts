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
    return this._items.reduce((acc: number, item: Buyable2) => acc + item.price, 0)
  }

  sumWithDiscount(discount: number): number {
    return this.sum() * (1-discount/100)
  }

  removeFromCart (id: number): void {
    this._items.splice(this._items.findIndex(e => e.id === id),1);
}
}