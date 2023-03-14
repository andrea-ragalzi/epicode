class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    isOlder(other_user) {
        if (this.age > other_user.age) {
            console.log(`${this.firstName} è più vecchio di ${other_user.firstName}`);
            return 1;
        }
        else if (this.age < other_user.age) {
            console.log(`${this.firstName} è più giovane di ${other_user.firstName}`);
            return -1;
        }
        else {
            console.log(`${this.firstName} e ${other_user.firstName} hanno la stessa età`);
            return 0;
        }
    }
}

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }
    static hasSameOwner(pet1, pet2) {
        return pet1.ownerName === pet2.ownerName;
    }
}

const pushPetOnList = (newPet) => {
    const petRef = document.createElement('li');
    petRef.textContent =
        `${newPet.petName}, 
        ${newPet.ownerName},
        ${newPet.species},
        ${newPet.breed}`;
    petListRef.appendChild(petRef);
    formRef.reset();
}

const formRef = document.getElementById('formAnimal');
const submitButtonRef = document.getElementById('submitButton');
const petListRef = document.getElementById('petList');

mario = new User('Mario', 'Biondi', 50, 'Busalla');
luigi = new User('Luigi', 'Ottavi', 60, 'Sezzadio');

console.log(mario);

console.log(mario.isOlder(luigi));
console.log(luigi.isOlder(mario));
luigi.age = mario.age;
console.log(mario.isOlder(luigi));

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
    const newPet = new Pet(petName, ownerName, species, breed);
    pushPetOnList(newPet);
});



