export const name = 'calculate';

export function getGearInches(wheelTireInches, frontTeeth, rearTeeth) {
  return (frontTeeth / rearTeeth) * wheelTireInches;
}
