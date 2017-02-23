import {Model} from 'ringa';

export default class TodoModel extends Model {
  constructor() {
    super();

    this.addProperty('list', []);
  }

  pushItem(item) {
    this.list.push(item);
    this.notify('list');
  }

  removeItem(id) {
    this.list = this.list.filter(item => item.id !== id);
    this.notify('list');
  }
}
