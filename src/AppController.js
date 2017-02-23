import {Controller} from 'ringa';

import ListModel from './ListModel';
import ItemModel from './ItemModel';

export default class AppController extends Controller {
  constructor() {
    super();

    this.addModel(new ListModel());

    // AppController.ADD_ITEM
    this.addListener('addItem', (listModel, name) => {
      listModel.pushItem(new ItemModel(name));
    });

    // AppController.REMOVE_ITEM
    this.addListener('removeItem', (listModel, itemId) => {
      listModel.removeItem(itemId);
    });
  }
}
