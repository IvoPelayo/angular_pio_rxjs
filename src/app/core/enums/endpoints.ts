import { StringEnum } from './string-enum-type';

export class EndPoints extends StringEnum {
  static webApiBaseUrl = new EndPoints('api');
}
