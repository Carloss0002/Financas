import axios from "axios";

type User = {
    email: string,
    password: string,
    name: string
}

export class ApiController{
    private static serveUrl:string = 'http://localhost' 

    public static sendUser({email, name, password}:User){
        let dataUrl:string = `${this.serveUrl}/users` 

        return axios.post(dataUrl, {
            name: name,
            password: password,
            email: email
        })
    }
}