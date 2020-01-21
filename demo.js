const CatBuilder = require('./builders/cat.builder');

const catFromBuilder = new CatBuilder()
    .setName('Brume')
    .setGender('F')
    .setSize(53)
    .setWeight(4)
    .setBreed('ChatDesRues')
    .build();

console.log(catFromBuilder);