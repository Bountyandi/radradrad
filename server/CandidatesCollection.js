import AbstractCollection from './helpers/AbstractCollection'

export default class CandidatesCollection extends AbstractCollection {

  constructor() {
    super();
    this.itemsArray = [];
  }

  getItems() {
    return this.itemsArray;
  }

  addItems(array) {
    this.clear();

    array.forEach((item, index) => {
      item._id = index;
      this.itemsArray.push(item);
    });
  }

  updateItem(item, callback) {
    if (!item) {
      callback('Send correct value please', item)
    }

    this.itemsArray.splice(item._id, 1, item);
    callback(null, item);
  }

  deleteItem(_id, callback) {
    if (!_id) {
      return callback('Send correct value please', _id)
    }

    this.itemsArray.splice(_id, 1);
    callback(null, _id);
  }

  clear() {
    this.itemsArray.length = 0;
  }

}
