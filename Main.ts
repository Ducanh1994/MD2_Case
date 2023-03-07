import {pri, Room, stt} from "./Room";
import {RoomManage} from "./RoomManage";
import {Receipt} from "./Receipt";
import {ReceiptManage} from "./ReceiptManage";
import {Account} from "./Account";
import {AccountManage} from "./AccountManage";

let input = require('readline-sync');

function mainMenu(){
    let choice = -1;
    do {
        console.log(`
       ------MENU-----
       1.Đăng ký
       2.Đăng nhập
        `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                signUp();
                break;
            case 2:
                logIn();
                break;
        }
    }
        while (choice !== 0) ;
}
function signUp(){
    let userNameRegExp = /^[_a-z0-9]{8,}$/;
    let userName: string =  input.question("Enter username: ");
    if (userNameRegExp.test(userName)) {
        let passWord: string = input.question("Enter password: ");
        let passWordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (passWordRegExp.test(passWord)) {
            let newAccount = new Account(userName,passWord);
            newAccountManager.addAccount(newAccount);
            console.log("-----Đăng ký thành công!-----");
        }
        else {
            console.log( "Tên password phải nhập ít nhất 8 ký tự, bao gồm 1 chữ cái viết hoa và số");
        }

    } else {
        console.log("Tên tài khoản phải nhập ít nhất 8 ký tự, bao gồm ký tự số và chữ");
    }

}
let newAccountManager = new AccountManage();
function logIn() {
    let userName: string =  input.question("Enter username: ");
    let passWord: string = input.question("Enter password: ");
   if (newAccountManager.checkLoginInfo(userName,passWord)) {
       main()
   }
   else {
       console.log("Tài khoản không tồn tại, vui lòng đăng ký lại!");
   }
}

mainMenu();
function main (){
    let choice = -1;
    do {
        console.log(`
    --------- Lựa chọn  ------------
    1. Quản lý phòng
    2. Quản lý hoá đơn 
    0. Thoát
    `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                manageRoom();
                break;
            case 2:
                manageReceipt();
                break;
        }
    } while (choice !== 0);
}
function manageRoom(){
    let choice = -1;
    do {
        console.log(`
    --------- Nội dung các phòng ------------
    1. Thêm phòng mới
    2. Chỉnh sửa thông tin phòng 
    3. Tìm kiếm phòng bằng id 
    4. Xóa phòng
    5. Hiển thị tất cả các phòng
    6. Kiểm tra trạng thái các phòng
    7. Hiển thị thông tin phòng theo giá
    0. Thoát
    `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                addNewRoom() ;
                break;
            case 2:
                editRooms();
                break;
            case 3:
                findRooms();
                break;
            case 4:
                deleteRooms();
                break;
            case 5:
                showRooms();
                break;
            case 6:
                checkStatusRooms();
                break;
            case 7:
                checkRoomsByPrice();
                break;
        }
    } while (choice !== 0);
}

let newRoomManage = new RoomManage();
function addNewRoom(){
    let id = +input.question('Enter ID: ');
    let roomName = input.question('Enter roomName: ');
    let roomPrice: pri = input.question('Enter roomPrice: ');
    let numberOfToilet = +input.question('Enter number of toilet: ');
    let numberOfBedRoom = +input.question('Enter number of bedroom: ');
    let status: stt = input.question('Enter status: ');
    let newRoom = new Room(id,roomName,roomPrice,numberOfToilet,numberOfBedRoom,status);
    newRoomManage.addRoom(newRoom);
}
function editRooms(){
    let choice = -1;
    do {
        console.log(`
    --------- Bạn muốn sửa thông tin nào ? ------------
    1. Sửa thông tin Tên 
    2. Sửa thông tin Giá
    3. Sửa thông tin Number Of Toilet
    4. Sửa thông tin Number Of Bedroom
    5. Sửa thông tin trạng thái phòng
    0. Exit
   
    `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                editName() ;
                break;
            case 2:
                editPrice();
                break;
            case 3:
                editNumberOfToilet();
                break;
            case 4:
                editNumberOfBedRoom();
                break;
            case 5:
                editStatus();
                break;
        }
    } while (choice !== 0);
}
function editName(){
    let id = +input.question("Enter the ID to edit: ");
    let newName = input.question("Enter new name: ");
    newRoomManage.replaceRoomName(id,newName);
    console.log("-----Cập nhật thành công-----");
    let updateName = newRoomManage.informationOfRoom();
    console.log(updateName[id]);
}
function editPrice(){
    let id = +input.question("Enter the ID to edit: ");
    let newPrice: pri = input.question("Enter new price: ");
    newRoomManage.replaceRoomPrice(id,newPrice);
    console.log("-----Cập nhật thành công-----");
    let updatePrice = newRoomManage.informationOfRoom();
    console.log(updatePrice[id]);
}
function editNumberOfToilet(){
    let id = +input.question("Enter the ID to edit: ");
    let newNumb = +input.question("Enter new number: ")
    newRoomManage.replaceNumberOfToilet(id,newNumb);
    console.log("-----Cập nhật thành công-----");
    let updateNumb = newRoomManage.informationOfRoom();
    console.log(updateNumb[id]);
}
function editNumberOfBedRoom(){
    let id = +input.question("Enter the ID to edit: ");
    let newNumb = +input.question("Enter new number: ")
    newRoomManage.replaceNumberOfBedRoom(id,newNumb);
    console.log("-----Cập nhật thành công-----");
    let updateNumb = newRoomManage.informationOfRoom();
    console.log(updateNumb[id]);
}
function editStatus(){
    let id = +input.question("Enter the ID to edit: ");
    let newStatus: stt = input.question("Enter new status: ");
    newRoomManage.replaceStatus(id,newStatus);
    console.log("-----Cập nhật thành công-----");
    let updateStatus = newRoomManage.informationOfRoom();
    console.log(updateStatus[id]);
}

function findRooms(){
    let id = +input.question("Enter ID: ");
    let index = newRoomManage.findRoom(id);
    let listRoomManage = newRoomManage.informationOfRoom();
    if (index != -1){
        console.log(listRoomManage[index]);
    }
}

function deleteRooms(){
    let id = +input.question("Enter ID: ");
    newRoomManage.deleteRoom(id);
    console.log(newRoomManage);
}

function showRooms(){
    let listRoom = newRoomManage.informationOfRoom();
    console.log(listRoom);
}

function checkStatusRooms(){
    let status: stt = input.question("Enter status: ");
    let listRoom = newRoomManage.checkStatus(status);
    console.log(listRoom);
}

function checkRoomsByPrice(){
    let price: pri = input.question("Enter price: ");
    let listRoom = newRoomManage.checkRoomPrice(price);
    console.log(listRoom);
}
function manageReceipt(){
    let choice = -1;
    do {
        console.log(`
    --------- Nội dung các hóa đơn ------------
    1. Thêm hóa đơn mới
    2. Chỉnh sửa thông tin hóa đơn
    3. Tìm kiếm hóa đơn bằng id
    4. Hiển thị tất cả các hóa đơn
    0. Thoát
    `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                addNewReceipt();
                break;
            case 2:
                editReceipts();
                break;
            case 3:
                findReceipts();
                break;
            case 4:
                showReceipts();
                break;
        }
    } while (choice !== 0);
}
let newReceiptManage = new ReceiptManage();
function addNewReceipt(){
    let id = +input.question('Enter ID: ');
    let startTime = +input.question('Enter start time: ');
    let endTime = +input.question('Enter end time: ');
    let staffName = input.question('Enter staff name: ');
    let listRoom = newRoomManage.informationOfRoom();
    let menu = '--- Chọn phòng để thêm vào hóa đơn---\n';
    for (let i = 0; i < listRoom.length; i++) {
        menu += `${i+1}-${listRoom[i].roomName},${listRoom[i].roomPrice}\n`
    }
    console.log(menu);
    let choice = +input.question("Enter choice: ");
    let newReceipt = new Receipt(id,startTime,endTime,staffName,listRoom[choice-1]);
    newReceiptManage.addReceipt(newReceipt);
}

function editReceipts(){
    let choice = -1;
    do {
        console.log(`
    --------- Bạn muốn sửa thông tin nào ? ------------
    1. Sửa thời gian bắt đầu 
    2. Sửa thời gian kết thúc
    3. Sửa tên nhân viên phục vụ
    4. Sửa tên phòng
    5. Sửa giá phòng
    0. Exit
   
    `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                editStartTime() ;
                break;
            case 2:
                editEndTime();
                break;
            case 3:
                editStaffName();
                break;
            case 4:
                editRoomName();
                break;
            case 5:
                editRoomPrice();
                break;
        }
    } while (choice !== 0);
}
function editStartTime (){
    let id = +input.question("Enter the ID to edit: ");
    let newTime = +input.question("Enter new start time: ");
    newReceiptManage.replaceStartTime(id,newTime);
    console.log("-----Cập nhật thành công-----");
    let updateTime = newReceiptManage.informationOfReceipt();
    console.log(updateTime[id]);
}
function editEndTime (){
    let id = +input.question("Enter the ID to edit: ");
    let newTime = +input.question("Enter new end time: ");
    newReceiptManage.replaceEndTime(id,newTime);
    console.log("-----Cập nhật thành công-----");
    let updateTime = newReceiptManage.informationOfReceipt();
    console.log(updateTime[id]);
}
function editStaffName (){
    let id = +input.question("Enter the ID to edit: ");
    let newName = input.question("Enter new staff name: ");
    newReceiptManage.replaceStaffName(id,newName);
    console.log("-----Cập nhật thành công-----");
    let updateName = newReceiptManage.informationOfReceipt();
    console.log(updateName[id]);
}
function editRoomName (){
    let id = +input.question("Enter the ID to edit: ");
    let newName = input.question("Enter new room name: ");
    newReceiptManage.replaceRoomName(id,newName);
    console.log("-----Cập nhật thành công-----");
    let updateName = newReceiptManage.informationOfReceipt();
    console.log(updateName[id]);
}

function editRoomPrice (){
    let id = +input.question("Enter the ID to edit: ");
    let newPrice: pri = input.question("Enter new room price: ");
    newReceiptManage.replaceRoomPrice(id,newPrice);
    console.log("-----Cập nhật thành công-----");
    let updatePrice = newReceiptManage.informationOfReceipt();
    console.log(updatePrice[id]);
}
function findReceipts(){
    let id = +input.question("Enter ID: ");
    let index = newReceiptManage.findReceipt(id);
    let listReceipt = newReceiptManage.informationOfReceipt();
    if (index != -1){
        console.log(listReceipt[index]);
    }
}
function showReceipts(){
    let listReceipt = newReceiptManage.informationOfReceipt();
    console.log(listReceipt);
}

main();