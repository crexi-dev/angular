import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
};
type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
};

@Injectable({
    providedIn: 'root',
})
export class UserService {

    private baseUrl = 'https://jsonplaceholder.typicode.com/users';
    private httpClient = inject(HttpClient);

    // GET https://jsonplaceholder.typicode.com/users
    users$ = this.httpClient.get<User[]>(this.baseUrl);
    users = firstValueFrom(this.httpClient.get<User[]>(this.baseUrl));

    // GET https://jsonplaceholder.typicode.com/users/:id
    user$ (id: number) {

        return this.httpClient.get<User>(`${this.baseUrl}/${id}`);

    }

    user (id: number) {

        return firstValueFrom(this.httpClient.get<User>(`${this.baseUrl}/${id}`));

    }

}
