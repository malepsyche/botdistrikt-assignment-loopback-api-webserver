import Route from '@ember/routing/route';

export default class TaskManagerRoute extends Route {
  model() {
    return this.store.findAll('task');
  }
}
