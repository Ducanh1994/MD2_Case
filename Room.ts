export type stt = "Ready" | "Empty" | "Busy" ;
export type pri = 500 | 1000 | 2000;
export class Room {
    private _id: number;
    private _roomName: string;
    private _roomPrice: pri;
    private _numberOfToilet: number;
    private _numberOfBedRoom: number;
    private _status: stt;

    constructor(id: number, roomName: string, roomPrice: pri, numberOfToilet: number, numberOfBedRoom: number, status: stt) {
        this._id = id;
        this._roomName = roomName;
        this._roomPrice = roomPrice;
        this._numberOfToilet = numberOfToilet;
        this._numberOfBedRoom = numberOfBedRoom;
        this._status = status;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get roomName(): string {
        return this._roomName;
    }

    set roomName(value: string) {
        this._roomName = value;
    }

    get roomPrice(): pri {
        return this._roomPrice;
    }

    set roomPrice(value: pri) {
        this._roomPrice = value;
    }

    get numberOfToilet(): number {
        return this._numberOfToilet;
    }

    set numberOfToilet(value: number) {
        this._numberOfToilet = value;
    }

    get numberOfBedRoom(): number {
        return this._numberOfBedRoom;
    }

    set numberOfBedRoom(value: number) {
        this._numberOfBedRoom = value;
    }

    get status(): stt {
        return this._status;
    }

    set status(value: stt) {
        this._status = value;
    }
    getInfo() {
        return `RoomID: ${this.id}, RoomName: ${this.roomName}, RoomPrice: ${this.roomPrice}, Number Of Toilet: ${this.numberOfToilet},
       Number Of Bedroom: ${this.numberOfBedRoom}, Status: ${this.status} `
    }
}
