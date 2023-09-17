import axios from 'axios';
import {UserMovements, UserResponse, receives} from '../models/User';
import {User, receive} from './types'


export class userControler {
    private static serveUrl:string = 'http://localhost' 

  public static sendUser({email, name, password}: User) {
    let dataUrl: string = `${this.serveUrl}/users`;

    return axios.post(dataUrl, {
      name: name,
      password: password,
      email: email,
    });
  }

  public static getUser({email, password}: User) {
    let URL = `${this.serveUrl}/login`;

    return axios.post<UserResponse>(URL, {
      email,
      password,
    });
  }

  public static getUserInformation(token: string) {
    const URL = `${this.serveUrl}/me`;
    return axios.get(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  public static getMovementsUser(date: string) {
    return axios.get<UserMovements[]>(`${this.serveUrl}/balance`, {
      params: {
        date,
      },
    });
  }

  public static setRegister({description, type, value, date}:receive){
    console.log(`receive ${description} \n ${type} \n ${value} \n ${date}`)
    return axios.post(`${this.serveUrl}/receive`, {
      description,
      type,
      value,
      date
    })
  }

  public static getReceives(date:any){
    return axios.get<receives[]>(`${this.serveUrl}/receives`, {
      params:{
        date
      }
    })
  }
}
