const Cat = require('../models/cat.model.js');

class CatBuilder {
    constructor() { }

    setName(name) {
        this.name = name;
        return this;
    }

    setGender(gender) {
        this.gender = gender;
        return this;
    }

    setSize(size) {
        if (size < 0) {
            throw Error('the size cannot be below zero');
        }
        this.size = size;
        return this;
    }

    setWeight(weight) {
        this.weight = weight;
        return this;
    }

    setBreed(breed) {
        this.breed = breed;
        return this;
    }

    build() {
        return new Cat(this.name, this.gender, this.size, this.weight, this.breed);
    }
}

module.exports = CatBuilder;
