import axios from 'axios';
import { IApiOptions } from './IssuesApi';

class UsersApi {
  private _url: string;
  private _header: { [key: string]: string };

  constructor(options: IApiOptions) {
    this._url = options.url;
    this._header = options.headers;
  }

  getUsers() {
    return axios
      .get(this._url, {
        headers: this._header,
      })
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        return Promise.reject(error);
      });
  }
}

const UsersApiOptions: IApiOptions = {
  url: 'http://localhost:8080/api/v1/users',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const UserApi = new UsersApi(UsersApiOptions);
