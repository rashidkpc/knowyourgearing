const ephemeralState = {
  wheelDiameter: 622,
  tireSize: 28,
  minRing: 24,
  maxRing: 46,
  minCog: 12,
  maxCog: 32,
};

const state = new Proxy({}, {
  set: (obj, prop, value) => {
    const tempState = JSON.parse(localStorage.getItem('state') || '{}');
    tempState[prop] = value;
    localStorage.setItem('state', JSON.stringify(tempState));
    return true;
  },
  get: (obj, prop) => JSON.parse(localStorage.getItem('state') || '{}')[prop],
});

Object.entries(ephemeralState).forEach(([k, v]) => {
  if (state[k] == null) {
    state[k] = v;
  }
});

export default state;
