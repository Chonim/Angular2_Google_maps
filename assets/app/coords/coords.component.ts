import { Component, Input } from "@angular/core";

import { Coords } from "./coords.model";
import { CoordsService } from "./coords.service";

@Component({
    selector: 'app-coords',
    templateUrl: './coords.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class CoordsComponent {
    @Input() coords: Coords;

    constructor(private coordsService: CoordsService) {}

    onEdit() {
        this.coordsService.editCoords(this.coords);
    }

    onDelete() {
        this.coordsService.deleteCoords(this.coords);
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.coords.userId;
    }
}
