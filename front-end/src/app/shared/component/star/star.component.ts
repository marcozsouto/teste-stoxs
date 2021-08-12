import { Component, Input, OnChanges } from "@angular/core";

@Component({
    templateUrl: './star.component.html',
    selector: 'app-star'
})



export class StarComponent implements OnChanges{

    @Input()
    rating: number = 0;

    stars: Star[] = [];
    
    ngOnChanges(): void { 
        
        
        for(let i = 0; i < 5; i++){
            var star: Star  = {
                class: 'string',
                style: 'string'
            };

            if(i < this.rating){
                star.class = "fa fa-star";
                star.style = "color: #f7941d;";

            }else{
                star.class = "fa fa-star-o";
                star.style = "color: #b7b7b7;";
            }
            this.stars.push(star);
        }
        console.log(this.stars);
    }
}

type Star = {
    class: string;
    style: string;
};