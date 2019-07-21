

let dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
}

let cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {
        if (!(this.raining)) {
            console.log(this.noise);
        }    
    }
}

cats.makeNoise();
dogs.makeNoise();

