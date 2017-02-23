import {Controller} from 'ringa';

import TodoModel from './TodoModel';
import ItemModel from './ItemModel';

export default class AppController extends Controller {
  constructor(name, domNode, options) {
    super(name, domNode, options);

    this.addModel(new TodoModel());

    // AppController.ADD_ITEM
    this.addListener('addItem', (todoModel, $ringaEvent) => {
      let item = new ItemModel($ringaEvent.detail.name);
      todoModel.pushItem(item);
    });

    // AppController.REMOVE_ITEM
    this.addListener('removeItem', (todoModel, $ringaEvent) => {
      let id = $ringaEvent.detail.itemId;
      todoModel.removeItem(id);
    });
  }
}
