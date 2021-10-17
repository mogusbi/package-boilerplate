import Config from '../Config';

describe('Config', () => {
  describe('validate', () => {
    it('should throw an error if base URL is not set', () => {
      expect(() => {
        Config.validate();
      }).toThrowError('Base URL not set');
    });

    it('should throw an error if key is not set', () => {
      expect(() => {
        Config.baseUrl = 'http://localhost:3000';

        Config.validate();
      }).toThrowError('No API key set');
    });

    it('should not throw an error if base URL and key are set', () => {
      expect(() => {
        Config.baseUrl = 'http://localhost:3000';
        Config.key = 'AAA-BBB-CCC';

        Config.validate();
      }).not.toThrowError();
    });
  });

  describe('configure', () => {
    it('should set the correct values', () => {
      Config.configure({
        baseUrl: 'http://localhost:4000',
        key: 'CCC-BBB-AAA',
      });

      expect(Config.baseUrl).toEqual('http://localhost:4000');
      expect(Config.key).toEqual('CCC-BBB-AAA');
    });
  });
});
