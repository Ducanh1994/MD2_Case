import {pri, Room} from "./Room";
import {stat} from "fs";
export type stt = "Ready" | "Empty" | "Busy";

export class RoomManage {
     private numberOfRooms: number ;
     private listRoom: Room[];

    constructor() {
        this.numberOfRooms = 0;
        this.listRoom = [];
    }
    addRoom(item: Room): void{
        this.listRoom.push(item);
    }
    informationOfRoom() {
        return this.listRoom;
    }
    findRoom(id: number): number{
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].id === id){
                return i;
            }
        }
        return -1
    }
    deleteRoom(id: number){
        let index = this.findRoom(id)
        this.listRoom.splice(index,1);
    }

    replaceRoomName (id:number, roomName: string) {
        let index = this.findRoom(id);
        this.listRoom[index].roomName = roomName;
}
    replaceRoomPrice (id:number, roomPrice: pri) {
        let index = this.findRoom(id);
        this.listRoom[index].roomPrice = roomPrice;
    }
    replaceNumberOfToilet (id:number, numberOfToiLet: number) {
        let index = this.findRoom(id);
        this.listRoom[index].numberOfToilet = numberOfToiLet;
    }
    replaceNumberOfBedRoom (id:number, numberOfBedRoom: number) {
        let index = this.findRoom(id);
        this.listRoom[index].numberOfBedRoom = numberOfBedRoom;
    }
    replaceStatus (id:number, status: stt) {
        let index = this.findRoom(id);
        this.listRoom[index].status = status;
    }
    checkStatus(stt: string): Room[] {
        let listRoomStt: Room[] = [];
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].status === stt) {
                listRoomStt.push(this.listRoom[i]);
            }
        }
        return listRoomStt;
    }

        checkRoomPrice (price: number): Room[] {
        let arrRoomPrice: Room[] = [];
            for (let i = 0; i < this.listRoom.length; i++) {
                if(this.listRoom[i].roomPrice === price) {
                    arrRoomPrice.push(this.listRoom[i])
                }
            }
            return arrRoomPrice;
        }
    }

// let a = new RoomManage();
// let b = new Room(1,"jj",500,1,1,"Ready");
// a.addRoom(b);
// let c = new Room(2,"kk",1000,2,2,"Ready");
// a.addRoom(c);
//
// console.log(a.checkStatus("Busy"));


