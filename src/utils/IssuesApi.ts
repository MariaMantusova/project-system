import axios from 'axios';
import { IApiOptions, INewIssue, IUpdateIssue } from '../interfaces/mainInterfaces';

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

  createIssue(newIssue: INewIssue) {
    return axios
      .post(`${this._url}/create`, { ...newIssue }, { headers: this._header })
      .then(response => {
        if (!response || !response.data) {
          throw new Error('Некорректный ответ от сервера');
        }
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return Promise.reject(error);
      });
  }

  getIssueById(id: string | undefined) {
    return axios
      .get(`${this._url}/${id}`, { headers: this._header })
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        return Promise.reject(error);
      });
  }

  updateIssue(id: string | undefined, updateIssue: IUpdateIssue) {
    return axios
      .put(`${this._url}/update/${id}`, { ...updateIssue }, { headers: this._header })
      .then(response => {
        if (!response || !response.data) {
          throw new Error('Некорректный ответ от сервера');
        }
        return response.data;
      })
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
