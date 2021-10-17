import axios from 'jest-mock-axios';
import Config from '../Config';
import User from '../User';

describe('User', () => {
  let user: User;

  it('should throw an error if thr SDK is not configured', () => {
    expect(() => {
      user = new User();
    }).toThrowError();
  });

  describe('when configured', () => {
    beforeEach(() => {
      Config.configure({
        baseUrl: 'http://localhost:3000',
        key: 'AAA-BBB-CCC',
      });

      user = new User();
    });

    describe('createUser', () => {
      beforeEach(() => {
        axios.post.mockResolvedValueOnce({
          data: {
            email: 'test@example.com',
            id: 'AAA-BBB-CCC',
            name: 'Test user',
          },
        });
      });

      it('should make the correct HTTP request', async () => {
        await user.createUser({
          email: 'test@example.com',
          name: 'Test user',
        });

        expect(axios.post).toHaveBeenCalledWith('/user', {
          email: 'test@example.com',
          name: 'Test user',
        });
      });

      it('should return the correct data', async () => {
        const result = await user.createUser({
          email: 'test@example.com',
          name: 'Test user',
        });

        expect(result).toEqual({
          email: 'test@example.com',
          id: 'AAA-BBB-CCC',
          name: 'Test user',
        });
      });
    });
  });
});
