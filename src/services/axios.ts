import axios from "axios";
import { UserResponse } from "../models/User";

type User = {
    email: string,
    password: string,
    name?: string
}

export class userControler{
    private static serveUrl:string = 'http://localhost' 

    public static sendUser({email, name, password}:User){
        let dataUrl:string = `${this.serveUrl}/users` 

        return axios.post(dataUrl, {
            name: name,
            password: password,
            email: email
        })
    }

    public static getUser({email, password}:User){
        let URL = `${this.serveUrl}/login`

        return axios.post<UserResponse>(URL, {
            email,
            password
        })
    }
}