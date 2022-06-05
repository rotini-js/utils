import * as fs from 'fs';

export const isAllowedStringValue = (value: unknown, values: Array<unknown>): boolean => values.includes(value);

export const isNotAllowedStringValue = (value: unknown, values: Array<unknown>): boolean => !isAllowedStringValue(value, values);

export const isArray = (value: unknown): boolean => Array.isArray(value);

export const isNotArray = (value: unknown): boolean => !isArray(value);

export const isArrayOfStrings = (values: Array<unknown>): boolean => values.every((value: unknown) => typeof value === 'string');

export const isNotArrayOfStrings = (values: Array<unknown>): boolean => !isArrayOfStrings(values);

export const stringContainsSpaces = (value: string): boolean => (value.indexOf(' ') >= 0);

export const stringDoesNotContainSpaces = (value: string): boolean => !stringContainsSpaces(value);

export const isBoolean = (value: unknown): boolean => (typeof value === 'boolean');

export const isNotBoolean = (value: unknown): boolean => !isBoolean(value);

export const isDefined = (value: unknown): boolean => (value !== undefined && value !== null && value !== '');

export const isNotDefined = (value: unknown): boolean => !isDefined(value);

export const isFunction = (value: unknown): boolean => (typeof value === 'function');

export const isNotFunction = (value: unknown): boolean => !isFunction(value);

export const isJson = (value: unknown): boolean => {
  try {
    JSON.parse(JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
};

export const isNotJson = (value: unknown): boolean => !isJson(value);

export const stringsMatch = (firstValue: string, secondValue: string): boolean => (firstValue === secondValue);

export const stringsDoNotMatch = (firstValue: string, secondValue: string): boolean => !stringsMatch(firstValue, secondValue);

export const isObject = (value: unknown): boolean => (typeof value === 'object' && !Array.isArray(value));

export const isNotObject = (value: unknown): boolean => !isObject(value);

export const isString = (value: unknown): boolean => (typeof value === 'string');

export const isNotString = (value: unknown): boolean => !isString(value);

export const stringIsBoolean = (value: string): boolean => {
  const tests = [
    (value === 'true'),
    (value === 'false')
  ];

  return tests.some(test => test);
};

export const stringIsNotBoolean = (value: string): boolean => !stringIsBoolean(value);

export const stringIsNumber = (value: string): boolean => {
  const tests = [
    (typeof value === 'number'),
    (/^0x[0-9a-f]+$/i.test(value)),
    (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(value))
  ];

  return tests.some(test => test);
};

export const stringIsNotNumber = (value: string): boolean => !stringIsNumber(value);

export const writeFile = (filePath: string, fileName: string, fileContent: string): void => {
  fs.writeFileSync(`${process.env.PWD}/${filePath}/${fileName}`, fileContent);
};
