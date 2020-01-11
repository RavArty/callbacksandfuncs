Function.prototype.myThrottle = function(interval) {
  let tooSoon = false;
  debugger;
  return (...args) => {
    if (!tooSoon) {
      tooSoon = true;
      setTimeout(() => (tooSoon = false), interval);
      this(...args);
    }
  };
};

class Neuron {
  fire() {
    console.log('Firing!');
  }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// Using Function#myThrottle, we should be able to throttle
// the #fire function of our neuron so that it can only fire
// once every 500ms:

neuron.fire = neuron.fire.myThrottle(5000);

const interval = setInterval(() => {
  neuron.fire();
}, 10);

class Neuron {
  constructor() {
    this.fire = this.fire.myThrottle(500);
  }

  fire() {
    console.log('Firing!');
  }
}
const neuron = new Neuron();

setInterval(() => {
  neuron.fire();
}, 10);
