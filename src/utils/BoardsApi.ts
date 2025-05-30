import axios from 'axios';

interface IApiOptions {
  url: string;
  headers: {
    'Content-Type': string;
  };
}

class BoardsApi {
  private _url: string;
  private _header: { [key: string]: string };

  constructor(options: IApiOptions) {
    this._url = options.url;
    this._header = options.headers;
  }

  getBoards() {
    return axios
      .get(`${this._url}/boards`, {
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
  url: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const BoardApi = new BoardsApi(BoardsApiOptions);
