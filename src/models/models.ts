export interface ILogReq {
    username: string;
    password: string;
}

export interface IUser {
    username: ILogReq["username"];
    password: ILogReq["password"];
    posts: any[];
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface IRegRes {
    newUser: IUser;
    token: string;
    message?: string;
}

export interface accountData {
    user: IUser;
    token: string;
    message?: string;
}