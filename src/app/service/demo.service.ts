import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class DemoService {
    constructor(private http: HttpClient) {

    }

    getMethod() {
        this.http.get(
            'https://catfact.ninja/fact',
            {
                headers: {

                }
            }
        ).subscribe((res) => {
            console.log(res);            
        });
    }
}