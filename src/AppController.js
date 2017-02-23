import {Controller} from 'ringa';

import TodoModel from './TodoModel';

export default class AppController extends Controller {
  constructor(name, domNode, options) {
    super(name, domNode, options);

    this.addModel(new TodoModel());
  }
}
