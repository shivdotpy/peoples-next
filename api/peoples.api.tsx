import axios from 'axios';
import axiosInstance from './axiosConfig';
import { GET_PEOPLES_API_ENDPOINT } from './urls';

interface PeopleType {
  id: number;
  name: string;
  email: string;
  website: string;
}

export class People {
  id: number;
  name: string;
  email: string;

  constructor(obj: PeopleType) {
    this.id = obj.id;
    this.name = obj.name;
    this.email = obj.email;
  }
}

export const getPoeplesApi = () => {
  return axiosInstance
    .get(GET_PEOPLES_API_ENDPOINT)
    .then((response) =>
      response.data.map((obj: PeopleType) => new People(obj))
    );
};
