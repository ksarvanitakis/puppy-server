interface Puppy {
    id: number,
    breed: string,
    name: string,
    birthdate: string,
}

interface Puppies {
    puppies: Array<Puppy>
}

export { Puppy, Puppies };