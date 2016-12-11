var Component = require('../src/component');
var assert = require('assert');

describe('ObjectPool', () => {
  var first;
  var second;
  class Cat extends Component {
    constructor(name, description) {
      super(name, description);
    }
  }

  beforeEach(() => {
    first = new Cat('cat', 'bob');
    second = new Cat('cat', 'stanley');
  });

  afterEach(() => {
    first = null;
    second = null;
  });

  describe('instantiation', () => {

    it('should add current components to the list', () => {
      assert.isOk(Component.stored['cat'][0]);
      assert.isOk(Component.stored['cat'][1]);
    });

  });

});
