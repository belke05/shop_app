export default class Product {
  constructor(id, user_id, name, picture_url, description, price) {
    this.id = id;
    this.user_id = user_id;
    this.name = name;
    this.picture_url = picture_url;
    this.description = description;
    this.price = price;
  }
}
