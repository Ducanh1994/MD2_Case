let input = require('readline-sync');
import {AccountManage} from "./AccountManage";

function viewAccount(){
    let choice = -1;
    do {
        console.log(`
    --------- Nội dung tài khoản ------------
    1. Thêm tài khoản
    2. Hiển thị các tài khoản
    3. Tìm kiếm tài khoản 
    4. Kiểm tra tài khoản đã có hay chưa
    0. Thoát
    `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                addAccount();
                break;
            case 2:
                showAccount();
                break;
            case 3:
                findAccount();
                break;
            case 4:
                checkAccount();
                break;
        }
    } while (choice !== 0);
}

function addAccount(){
    let id = +input.question("Enter ID: ");
    let name = input.question("Enter name: ");
    let age = +input.question("Enter age: ");
    let userName = input.question("Enter userName: ");
    // if (newAccountManager.checkUserName(userName)){
    //     console.log(userName);
    // }
    // let passWord = input.question("Enter passWord: ");
    // if (newAccountManager.checkPassWord(passWord)){
    //     console.log(passWord);
    // }
    // let newAccount = new Account(id,name,age,userName,passWord);
    // newAccountManager.addAccount(newAccount);
}

function showAccount (){
    let listAccount = newAccountManager.showAccount();
    console.log(listAccount);
}
function findAccount(){
    let id = +input.question("Enter ID: ");
    let listRoom = newAccountManager.searchAccount(id);
    console.log(listRoom);
}
function checkAccount(){
    let name = input.question("Enter name account: ");
    let listAccount = newAccountManager.checkAccount(name);
    if (listAccount){
        console.log(listAccount)
    }
    else {
        console.log("-----Không tồn tại tài khoản này!-----")
    }
}