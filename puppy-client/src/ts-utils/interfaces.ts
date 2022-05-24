interface Puppy {
    id: number,
    breed: string,
    name: string,
    birthdate: string,
}

interface Puppies extends Array<Puppy>{}

export type { Puppy, Puppies };