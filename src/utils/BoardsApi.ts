import axios from 'axios';
import { IApiOptions } from './IssuesApi';

class BoardsApi {
  private _url: string;
  private _header: { [key: string]: string };

  constructor(options: IApiOptions) {
    this._url = options.url;
    this._header = options.headers;
  }

  getBoards() {
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

  getBoardById(id: string | undefined) {
    return axios
      .get(`${this._url}/${id}`, {
        headers: this._header,
      })
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        return Promise.reject(error);
      });
  }
}

const BoardsApiOptions: IApiOptions = {
  url: 'http://localhost:8080/api/v1/boards',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const BoardApi = new BoardsApi(BoardsApiOptions);
