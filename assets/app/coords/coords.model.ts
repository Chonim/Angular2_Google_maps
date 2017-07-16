export class Coords {
    latLng: [number, number];
    username: string;
    coordsId?: string;
    userId?: string;

    constructor(
      latLng: [number, number],
      username: string,
      coordsId?: string,
      userId?: string
    ) {
        this.latLng = latLng;
        this.username = username;
        this.coordsId = coordsId;
        this.userId = userId;
    }
}
