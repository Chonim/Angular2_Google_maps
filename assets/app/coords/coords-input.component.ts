import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { CoordsService } from "./coords.service";
import { Coords } from "./coords.model";

@Component({
    selector: 'app-coords-input',
    templateUrl: './coords-input.component.html'
})
export class CoordsInputComponent implements OnInit {
    coords: Coords;
    constructor(private coordsService: CoordsService) {}

    onSubmit(form: NgForm) {
        if (this.coords) {
            // Edit
            console.log("coords");
        } else {
            // Create
            console.log("no coords");
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.coords = null;
        form.resetForm();
    }

    ngOnInit() {
      console.log("ng init!");
    }
}
