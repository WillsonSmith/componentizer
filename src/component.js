const storedComponents = {};

class Component {
  constructor(name, description) {
    const currentComponents = Object.keys(storedComponents);
    this.description = description;

    if (currentComponents.includes(name)) {
      const length = Object.keys(storedComponents[name]).length;
      storedComponents[name][length] = this;
      return;
    }

    storedComponents[name] = {
      0: this,
    };
  }

  static stored() {
    return storedComponents;
  }
}


class Cat extends Component {
  constructor(name, description) {
    super(name, description);
  }

  what() {
    return this.description;
  }
}

const cat = new Cat('cat', 'bub');
const cat2 = new Cat('cat', 'bob');
