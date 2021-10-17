import axios from 'jest-mock-axios';
import http from '../http';

describe('http', () => {
  it('should create the client with the correct params', () => {
    http('http://localhost:3000', 'AAA-BBB-CCC');

    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'http://localhost:3000',
      headers: {
        Authorization: 'AAA-BBB-CCC',
      },
      timeout: 10000,
    });
  });
});
