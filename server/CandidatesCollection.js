import AbstractCollection from './helpers/AbstractCollection';
import ids from 'short-id';

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
      item._id = ids.generate();
      this.itemsArray.push(item);
    });
  }

  updateItem(item, callback) {
    if (!item) {
      callback('Send correct value please', item);
    }

    this.itemsArray.forEach(c => {
      if (c._id === item._id) {
        c.candidateName = item.candidateName;
        c.candidateStatus = item.candidateStatus;
        c.candidateNeedOffer = parseInt(item.candidateNeedOffer);
      }
      return c;
    });

    callback(null, item);
  }

  deleteItem(_id, callback) {
    if (!_id) {
      return callback('Send correct value please', _id);
    }

    this.itemsArray.forEach( (c, i) => {
      if (c._id === _id) {
        this.itemsArray.splice(i, 1);
      }
    });

    callback(null, _id);
  }

  clear() {
    this.itemsArray.length = 0;
  }

}
