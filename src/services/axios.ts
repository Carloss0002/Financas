import axios from 'axios';
import {UserMovements, UserResponse} from '../models/User';

type User = {
  email: string;
  password: string;
  name?: string;
};

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
}
