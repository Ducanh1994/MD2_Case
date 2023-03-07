

export class User {
   private _id: number;
   private _account: string;
   private _password: any;
   private _phoneNumber: number;
   private _fullname: string;
   private _address: string;
   private _email: any;
   private _age: number;

   constructor(id: number, account: string, password: any, phoneNumber: number, fullname: string, address: string, email: any, age: number) {
      this._id = id;
      this._account = account;
      this._password = password;
      this._phoneNumber = phoneNumber;
      this._fullname = fullname;
      this._address = address;
      this._email = email;
      this._age = age;
   }

   get id(): number {
      return this._id;
   }

   set id(value: number) {
      this._id = value;
   }

   get account(): string {
      return this._account;
   }

   set account(value: string) {
      this._account = value;
   }

   get password(): any {
      return this._password;
   }

   set password(value: any) {
      this._password = value;
   }

   get phoneNumber(): number {
      return this._phoneNumber;
   }

   set phoneNumber(value: number) {
      this._phoneNumber = value;
   }


   get fullname(): string {
      return this._fullname;
   }

   set fullname(value: string) {
      this._fullname = value;
   }

   get address(): string {
      return this._address;
   }

   set address(value: string) {
      this._address = value;
   }

   get email(): any {
      return this._email;
   }

   set email(value: any) {
      this._email = value;
   }

   get age(): number {
      return this._age;
   }

   set age(value: number) {
      this._age = value;
   }

   getInfo() {
      return `User có id là: ${this.id}, Tên đầy đủ là: ${this.fullname}, Số điện thoại là: ${this.phoneNumber}, 
       Địa chỉ là: ${this.address}, Email là: ${this.email}, Số tuổi là: ${this.age}`
   }
}