export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: ({ pets }) => {
    return pets.filter((pet) => pet.species === 'cat')
  }
}
