import { getPlantsById } from './getPlantsById';
// import { getPlantsByOwner } from './getPlantsByOwner.js'

// function bindArgsFromN(fn, n, ...boundArgs) {
//   const named = (...args) => fn(...args.slice(0, n - 1), ...boundArgs);
//
//   return named;
// }

const MOCKUPDATA = [
  {
    id: 0, plantName: 'Eyachalle', maxKwp: 12, currentlyProducing: 3, currentlyConsuming: 5, owner: 'Lukas Schuster',
  },
  {
    id: 1, plantName: 'Wasserwerk', maxKwp: 32, currentlyProducing: 10, currentlyConsuming: 0.2, owner: 'Lukas Schuster',
  },
];

module.exports = {
  getPlantsById: getPlantsById.bind(null, MOCKUPDATA),
  // getPlantsByOwner: bind_args_from_n(getPlantsByOwner, 1, MOCKUPDATA),
};
