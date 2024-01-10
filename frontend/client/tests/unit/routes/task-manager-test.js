import { module, test } from 'qunit';
import { setupTest } from 'client/tests/helpers';

module('Unit | Route | task-manager', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:task-manager');
    assert.ok(route);
  });
});
