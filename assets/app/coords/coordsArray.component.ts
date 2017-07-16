import { Component, OnInit } from "@angular/core";
declare var google: any;

@Component({
    selector: 'app-coords',
    templateUrl: './coordsArray.component.html',
    styles: [`
        #map-container {
            height: 500px;
        }
        #map {
            width: 100%;
            height: 100%;
        }
    `]
})
export class CoordsArrayComponent {
    ngOnInit() {
        console.log(this);
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapProp);
    }
}
