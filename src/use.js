import Component from './component';

class Cat extends Component {
  constructor(node, name, props) {
    super(node, name, props);
  }
}

const cats = Array.from(document.getElementsByClassName('cat'));

const catClasses = cats.map((cat) => new Cat(cat, 'cat', ['age', 'color']));
window.catClasses = catClasses;

cats.forEach((cat) => {
  cat.querySelector('cat-color').addEventListener('changed', function(evt) {
    evt.srcElement.style.color = this.parentNode.getAttribute('data-prop-color');
  });
});

class Ticker extends Component {
  constructor(node, name, props) {
    super(node, name, props);
    this.tick = this.tick.bind(this);
    setInterval(this.tick, 1000);
  }

  tick() {
    const tick = Number(this.props.ticks.value)
    this.update('ticks', tick + 1);
  }
}


const tickerElement = document.getElementById('ticker');

const ticker = new Ticker(tickerElement, 'ticker', ['ticks']);
