const storedComponents = {};
const changeEvent = new Event('changed');

class Component {
  constructor(node, name, props) {
    const currentComponents = Object.keys(storedComponents);
    this.node = node;
    this.name = name;
    this.props = {};
    this.id = currentComponents.length;

    if (props) {
      this.props = props.reduce((propList, prop) => {
        propList[prop] = {
          value: node.getAttribute(`data-prop-${prop}`),
          dependents: Array.from(node.querySelectorAll(`${this.name}-${prop}`)),
        };

        return propList;
      }, {});

      Object.keys(this.props).forEach((prop) => this.update(prop, this.props[prop].value));
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
    if (!value) {
      return [];
    }

    this.props[prop].value = value;
    window.requestAnimationFrame(() => {
      this.node.setAttribute(`data-prop-${prop}`, value);
      this.props[prop].dependents.forEach((dependent) => {
        dependent.textContent = value;
        dependent.dispatchEvent(changeEvent);
      });
    });

    return this.props[prop].dependents;
  }

  static destroy(component) {
    const {name, id} = component;
    storedComponents[name][id] = null;
    delete storedComponents[name][id];
  }

  static stored() {
    return storedComponents;
  }
}

export default Component;
