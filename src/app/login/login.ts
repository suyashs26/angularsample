
export class Login{
    userName: number;
    password: string;
    constructor(){}
}

export class LoginDto {
    userName: number;
    password: String;
    userStatus: String;
    userInformation: userInfo;

}

export interface userInfo{
    userId: number;
    emailId: string;
    name: string;
    phoneNo: string;
}