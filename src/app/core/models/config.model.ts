export interface ConfigInterface {
  id: number;
  login: string;
  email: string;
}

export class Config implements ConfigInterface {
    constructor(
        public id: number,
        public login: string,
        public email: string) {
    }
}
