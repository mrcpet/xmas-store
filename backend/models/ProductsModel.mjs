export class ProductsModel {
  constructor(id, title, image, price) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.price = price;
  }
}

export class DetailsModel extends ProductsModel {
  constructor(id, title, image, price, balance, in_stock, description) {
    super(id, title, image, price);
    this.balance = balance;
    this.in_stock = in_stock;
    this.description = description;
  }
}
