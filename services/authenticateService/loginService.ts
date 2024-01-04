import { axiosInstance } from 'services/utils';

export interface ILoginDataParams {
  username: string;
  password: string;
}

export const loginService = async (data: ILoginDataParams) => await axiosInstance.post('/authenticate/login', data);
