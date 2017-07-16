import { Component, OnInit } from "@angular/core";
declare var google: any;

import { Coords } from "./coords.model";
import { CoordsService } from "./coords.service";

@Component({
    selector: 'app-coords-list',
    templateUrl: './coords.component.html'
})
export class CoordsListComponent implements OnInit {
    coords: Coords[];

    // constructor(private coordsService: CoordsService) {}

    ngOnInit() {
    }
}
