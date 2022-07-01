import { map, flattenDeep } from 'lodash';

export class StringEnum {
  constructor(private value: string) { }
  /** For equality == with string */
  toString(): string {return this.value; }
  /** For send to server serialization */
  toJSON() {return this.value; }

  /** For concat and string output enums, used to concat endPoint options */
  concat(next?: StringEnum): StringEnum {
    return this.add(next ? next.value : null);
  }

  /** Add String to enum, used to concat endPoint options */
  add(next?: string): StringEnum {
    if (next) {
      return new StringEnum(this.value + '/' + next);
    }

    return this;
  }

  /** check if a string matches the enum */
  equals(val: string): boolean {
    return this.value === val;
  }
}

export class StringEnumExtensions {
  /** convert array of StringEnums to array of strings, for simple comparison */
  static mapToStringArray(enums: Array<StringEnum>): Array<string> {
    return map(flattenDeep(enums), (e) => e.toString());
  }
}
