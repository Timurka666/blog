export interface ILogReq {
    username: string;
    password: string;
}

export interface IUser {
    username: ILogReq["username"];
    password: ILogReq["password"];
    posts: string[];
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

export interface IPost {
    username: string;
    title: string;
    text: string;
    imgUrl: string;
    views: number;
    author: string;
    comments: any[];
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface NewPostReq {
    title: string,
    text: string,
}

export interface IMessage {
    message: string;
}

export interface AllPosts {
    posts: IPost[];
    popularPosts?: IPost[];
    message?: string;
}