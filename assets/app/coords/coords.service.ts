import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Coords } from "./coords.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class CoordsService {
    private coords: Coords[] = [];

    constructor(private http: Http, private errorService: ErrorService) {}

    addCoords(coords: Coords) {
        console.log(coords);
    }

    getCoordsArray() {
        console.log("get!!");
    }

    editCoords(coords: Coords) {
        console.log("edit!!");
    }

    updateCoords(coords: Coords) {
      console.log("update!!");
    }

    deleteCoords(coords: Coords) {
      console.log("delete!!");
    }
}
