import {Model} from 'ringa';

export default class ItemModel extends Model {
  constructor(name) {
    super();

    this.addProperty('name', name);
  }
}
