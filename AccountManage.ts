import {Account} from "./Account";

export class AccountManage {
    listAccount: Account[];

    constructor() {
        this.listAccount = [];
    }

    addAccount(account: Account) {
        this.listAccount.push(account);
    }

    showAccount() {
        return this.listAccount;
    }
    checkAccount(userName: string){
        for (let i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].userName === userName) {
                return this.listAccount[i];
            }
        }
        return -1;
    }
    checkLoginInfo(userName: string, passWord:string){
        for (let i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].userName == userName) {
                if (this.listAccount[i].passWord == passWord) {
                    return true;
                }
            }
        }
        return false;
    }
    // checkUserName(userName: string){
    //     for (let i = 0; i < this.listAccount.length; i++) {
    //         if (this.listAccount[i].userName.test(userName)){
    //             return userName;
    //         }
    //     }
    //     return -1;
    // }
    // checkPassWord(passWord: string){
    //     for (let i = 0; i < this.listAccount.length; i++) {
    //         if (this.listAccount[i].passWord.test(passWord)){
    //             return passWord;
    //         }
    //     }
    //     return -1;
    // }
}