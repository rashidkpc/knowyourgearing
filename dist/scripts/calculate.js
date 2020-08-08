export default {
  getWheelAndTireToDiameter(wheelDiameterMM, tireSizeMM) {
    return (wheelDiameterMM + (tireSizeMM * 2)) / 25.4;
  },
  getGearInches(wheelTireInches, frontTeeth, rearTeeth, round = 2) {
    return ((frontTeeth / rearTeeth) * wheelTireInches).toFixed(round);
  },
  getRange(min, max, inclusive = true) {
    return [...Array(max - min + (inclusive ? 1 : 0))].map((v, i) => i + min);
  },
};
