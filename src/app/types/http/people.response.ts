export interface PeopleResponse {
    results: Result[];
    info: Info;
}

export interface Result{
    name: Name;
    email: string;
    dob: Dob;
    location: Location;
    phone: string;
    login: Login;
    picture: Picture;
}

export interface Name {
    first: string;
    last: string;
}

export interface Dob {
    date: string;
    age: number;
}

export interface Location {
    street: Street;
}

export interface Street {
    number: number;
    name: string;
}

export interface Login {
    password: string;
}

export interface Picture {
    thumbnail: string;
}

export interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}
