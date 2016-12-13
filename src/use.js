import Component from './component';

class Cat extends Component {
  constructor(node, name, props) {
    super(node, name, props);
  }

  what() {
    return this.props;
  }
}

const cat = new Cat(document.getElementById('cat'), 'cat', ['age', 'color']);

cat.update('age', 7);
window.cat = cat;
