export interface FieldInterface {
  id: string;
  name: string;
}

export class Field implements FieldInterface {
    constructor(
        public id: string,
        public name: string) {
    }
}
