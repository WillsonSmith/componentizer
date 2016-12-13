import Component from './component';

class Cat extends Component {
  constructor(node, name, props) {
    super(node, name, props);
  }

  what() {
    return this.props;
  }
}

const cats = Array.from(document.getElementsByClassName('cat'));

const catClasses = cats.map((cat) => new Cat(cat, 'cat', ['age', 'color']));
window.catClasses = catClasses;
// const cat = new Cat(document.getElementById('cat'), 'cat', ['age', 'color']);

// cat.update('age', 7);
// window.cat = cat;
