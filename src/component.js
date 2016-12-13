const storedComponents = {};

class Component {
  constructor(node, name, props) {
    const currentComponents = Object.keys(storedComponents);
    this.props = {};
    this.name = name;
    this.id = currentComponents.length;

    if (props) {
      this.props = props.reduce((propList, prop) => {
        propList[prop] = {
          value: node.getAttribute(`data-prop-${prop}`),
          dependents: Array.from(node.querySelectorAll(`${this.name}-${prop}`)),
        };

        return propList;
      }, {});
    }

    if (currentComponents.includes(name)) {
      const length = Object.keys(storedComponents[name]).length;
      storedComponents[name][length] = this;
      return;
    }

    storedComponents[name] = {
      0: this,
    };
  }

  update(prop, value) {
    this.props[prop].value = value;
    this.props[prop].dependents.forEach((dependent) => {
      dependent.textContent = this.props[prop].value;
    });
    // modify this to use requestAnimationFrame for batching
    // what about on non-tag elements, what if want on a button etc
      // thinking some data attribute
  }

  static destroy(component) {
    const {name, id} = component;
    storedComponents[name][id] = null;
    delete storedComponents[name][id];
    component = null;
  }

  static stored() {
    return storedComponents;
  }
}

export default Component;
