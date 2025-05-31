import axios from 'axios';

interface IApiOptions {
  url: string;
  headers: {
    'Content-Type': string;
  };
}

class IssuesApi {
  private _url: string;
  private _header: { [key: string]: string };

  constructor(options: IApiOptions) {
    this._url = options.url;
    this._header = options.headers;
  }

  getIssues() {
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

  changeIssueStatus(id: string | undefined, status: string) {
    return axios
      .put(`${this._url}/updateStatus/${id}`, { status }, { headers: this._header })
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        return Promise.reject(error);
      });
  }
}

const BoardsApiOptions: IApiOptions = {
  url: 'http://localhost:8080/api/v1/tasks',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const IssueApi = new IssuesApi(BoardsApiOptions);
