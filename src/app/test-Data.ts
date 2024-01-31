import { InMemoryDbService } from 'angular-in-memory-web-api';
export class  TestData implements InMemoryDbService {
    createDb(){

        let userDetails=[
            { id: 101, name: 'Ketan', email: 'Ketan@gmail.com',status:'2020',role:'user' },
            { id: 102, name: 'sujit', email: 'sujit345@gmail.com',status:'2021',role:'user' },
            { id: 103, name: 'hitesh', email: 'hitesh945@gmail.com',status:'2022',role:'user' },
            { id: 104, name: 'Rajshree', email: 'Rajshree954@gmail.com',status:'2023',role:'admin' },
            { id: 105, name: 'snehal', email: 'snehal5432@gmail.com',status:'2024',role:'admin' },
            { id: 106, name: 'Raj', email: 'Raj305@gmail.com',status:'2025',role:'admin' },
            { id: 107, name: 'vivek', email: 'vivek506@gmail.com',status:'2026',role:'admin' },
            { id: 108, name: 'Rajat', email: 'rajat879@gmail.com',status:'2027',role:'user' },
            { id: 109, name: 'suraj', email: 'suraj876@gmail.com',status:'2028',role:'user' },
            { id: 1010, name: 'Narendra', email: 'Narendra905@gmail.com',status:'2029',role:'user' },

        ];
         //Text data
       let welcomeMsg = "Welcome to the Angular world!";
       return { books: userDetails, message: welcomeMsg};
       
    }
}