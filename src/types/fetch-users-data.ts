export interface UserResponse {
    results: UserData[];
}

export interface UserData {
    gender: string;
    location: {
        street: {
            number: number;
            name: string;
        },
        city: string;
        state: string;
        country: string;

    },
    nat: string;
    name: {
        first: string;
        last: string;
    },
    email: string;
    dob: {
        age: number;
    },
    picture: {
        medium: string;
        thumbnail: string;
    },
    phone: string;
}
