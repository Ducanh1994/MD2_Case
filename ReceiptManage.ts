import {Receipt} from "./Receipt";
import {pri} from "./Room";

export class ReceiptManage {
    private listReceipt: Receipt[];

    constructor() {
        this.listReceipt = [];
    }

    addReceipt(item: Receipt) {
        this.listReceipt.push(item);
    }

    informationOfReceipt() {
        return this.listReceipt;
    }

    findReceipt(id: number) {
        for (let i = 0; i < this.listReceipt.length; i++) {
            if (this.listReceipt[i].id === id) {
                return i;
            }
        }
        return -1
    }

    deleteReceipt(id: number) {
        let index = this.findReceipt(id)
        this.listReceipt.splice(index, 1);
    }

    replaceStartTime(id: number, startTime: number) {
        let index = this.findReceipt(id);
        this.listReceipt[index].startTime = startTime;
    }
    replaceEndTime(id: number, endTime: number) {
        let index = this.findReceipt(id);
        this.listReceipt[index].endTime = endTime;
    }
    replaceStaffName(id: number, staffName: string) {
        let index = this.findReceipt(id);
        this.listReceipt[index].staffName = staffName;
    }
    replaceRoomName(id: number, roomName: string) {
        let index = this.findReceipt(id);
        this.listReceipt[index].room.roomName = roomName;
    }
    replaceRoomPrice(id: number, roomPrice: pri) {
        let index = this.findReceipt(id);
        this.listReceipt[index].room.roomPrice = roomPrice;
    }
}