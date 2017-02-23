import {Model} from 'ringa';

export default class TodoModel extends Model {
  constructor() {
    super();

    this.addProperty('list', []);
  }
}
