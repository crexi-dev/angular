import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { provideHttpClient } from '@angular/common/http';

describe('UserService', () => {

    let service: UserService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [provideHttpClient(), provideHttpClientTesting()],
        });
        service = TestBed.inject(UserService);

    });

    it('should be created', () => {

        expect(service).toBeTruthy();

    });

});
