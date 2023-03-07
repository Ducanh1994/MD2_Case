import {Room} from "./Room";

export class Receipt {
    private _id: number;
    private _startTime: number;
    private _endTime: number;
    private _staffName: string;
    private _room: Room;

    constructor(id: number, startTime: number, endTime: number, staffName: string, room: Room) {
        this._id = id;
        this._startTime = startTime;
        this._endTime = endTime;
        this._staffName = staffName;
        this._room = room;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get startTime(): number {
        return this._startTime;
    }

    set startTime(value: number) {
        this._startTime = value;
    }

    get endTime(): number {
        return this._endTime;
    }

    set endTime(value: number) {
        this._endTime = value;
    }

    get staffName(): string {
        return this._staffName;
    }

    set staffName(value: string) {
        this._staffName = value;
    }

    get room(): Room {
        return this._room;
    }

    set room(value: Room) {
        this._room = value;
    }
    totalTime() {
        return this._endTime - this._startTime;
    }
    totalPay(){
        return this.totalTime()*this.room.roomPrice;
    }
    getInfo(){
        return `Thời gian bắt đầu: ${this.startTime}, Thời gian kết thúc: ${this.endTime}, Tổng thời gian: ${this.totalTime()}
         Nhân viên phục vụ là: ${this.staffName}, Thông tin phòng thuê: ${this.room}, Tổng số tiền phải trả: ${this.totalPay()}`
    }
}