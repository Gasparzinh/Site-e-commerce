import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Celular} from "./product-item/model/celular";

@Injectable()

export class CelularService{

    private url='https://localhost:800/api/celularstore';

    httpOptions={
        Headers:new HttpHeaders({'content-type':'aplication/json'})
    }

    constructor (private http:HttpClient){}

    getCelular(){
        return this.http.get(this.url)
    }

}
