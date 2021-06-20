import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable()

export class FreeApiService {

    constructor(private httpclient: HttpClient) { }


    

    path: string = 'assets/data.json'
    path2: string = 'assets/images.json'

    getImages() {
        return this.httpclient.get<any>('assets/showcase/data/photos.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }

    getphotos(): Observable<any> {
        return this.httpclient.get(this.path2);
    }

}