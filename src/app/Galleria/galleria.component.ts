import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { FreeApiService } from "../services/freeapi.service";

@Component({
    selector: 'galleria',
    templateUrl: './galleria.component.html',
    styleUrls: ['./galleria.component.css']

})

export class Galleria implements OnInit {

    images: any[] = []

    constructor(private photoService: FreeApiService) { }


    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    ngOnInit() {
        this.photoService.getImages().then(images => this.images = images);
    }
}