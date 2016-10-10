import {Injectable} from '@angular/core';

@Injectable()

export class studService{
    studList;
    message: string;

    getStudList(): Promise<Array<Object>> {
        this.studList = [
            {name: 'vinit1', email: 'vinit1@gmail.com'},
            {name: 'abhi', email: 'abhi@gmail.com'},
            {name: 'amit', email: 'amit@gmail.com'},
            {name: 'sumit', email: 'sumit@gmail.com'}
        ];
        return Promise.resolve(this.studList);
    }
}