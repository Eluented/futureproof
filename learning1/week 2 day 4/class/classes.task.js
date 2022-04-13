class Pet {
    constructor {
        this.name = name,
        this.happiness = happiness,
        this.hunger = hunger,
        this.owner = owner;
    },

    kill(){
        console.log(`${this.name} killed you`)
    },

    adopt(newOwner){
        this.owner = Owner;
    },

    showPetStatus(){
        console.log(`Your pet has a hunger level of ${this.hunger} and has a happiness level of ${this.happiness}`)
    },

    playPet(num){
        this.happiness += num
    },

    feed(num){
        this.hunger -= num
    },
}