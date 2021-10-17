interface IConfigConstructor {
  /** API base URL */
  baseUrl: string;

  /** API key */
  key: string;
}

class Config {
  /** Client base URL */
  public static baseUrl: string;

  /** Client API key */
  public static key: string;

  /**
   * Configure the SDK
   *
   * @param config - SDK configuration
   */
  public static configure(config: IConfigConstructor): void {
    Config.baseUrl = config.baseUrl;
    Config.key = config.key;
  }

  /**
   * Validates SDK configuration
   */
  public static validate(): void {
    if (!Config.baseUrl) {
      throw new Error('Base URL not set');
    }

    if (!Config.key) {
      throw new Error('No API key set');
    }
  }
}

export default Config;
