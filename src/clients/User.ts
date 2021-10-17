import http from '../factories/http';
import type { THttp } from '../factories/http';
import Config from './Config';

interface ICreateUser {
  /** User's email address */
  email: string;
  /** User's full name */
  name: string;
}

interface IUser {
  /** User unique ID */
  id: string;
  /** User's email address */
  email: string;
  /** User's full name */
  name: string;
}

class User {
  /** HTTP client */
  private readonly http: THttp;

  constructor() {
    Config.validate();

    this.http = http(Config.baseUrl, Config.key);
  }

  /**
   * Creates a new user
   *
   * @param user - Create user DTO
   */
  public async createUser(user: ICreateUser): Promise<IUser> {
    const { data } = await this.http.post<IUser>('/user', user);

    return data;
  }
}

export default User;
