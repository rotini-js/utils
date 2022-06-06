export const getDuplicateStrings = (array: string[]): { hasDuplicates: boolean, duplicates: string[] } => {
  const duplicates = array.filter((value: string, index: number) => array.indexOf(value) !== index);
  return { hasDuplicates: duplicates.length > 0, duplicates };
};

export const isAllowedStringValue = (value: unknown, values: unknown[]): boolean => values.includes(value);

export const isNotAllowedStringValue = (value: unknown, values: unknown[]): boolean => !isAllowedStringValue(value, values);

export const isArrayOfStrings = (values: unknown[]): boolean => values.every((value: unknown) => typeof value === 'string');

export const isNotArrayOfStrings = (values: unknown[]): boolean => !isArrayOfStrings(values);

export const isArray = (value: unknown): boolean => Array.isArray(value);

export const isNotArray = (value: unknown): boolean => !isArray(value);

export const isBoolean = (value: unknown): boolean => (typeof value === 'boolean' || (isString(value) && /(true|false)/i.test(value.toString())));

export const isNotBoolean = (value: unknown): boolean => !isBoolean(value);

export const isDefined = (value: unknown): boolean => (value !== undefined && value !== null && value !== '');

export const isNotDefined = (value: unknown): boolean => !isDefined(value);

export const isFunction = (value: unknown): boolean => (typeof value === 'function');

export const isNotFunction = (value: unknown): boolean => !isFunction(value);

export const isJson = (value: unknown): boolean => {
  try {
    const result = isString(value) ? JSON.parse(value.toString()) : JSON.parse(JSON.stringify(value));
    if (isDefined(result) && (isObject(result) || isArray(result))) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

export const isNotJson = (value: unknown): boolean => !isJson(value);

export const isNumber = (value: unknown): boolean => {
  if (isNotDefined(value)) {
    return false;
  }

  const tests = [
    (typeof value === 'number'),
    (/^0x[0-9a-f]+$/i.test(value.toString())),
    (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(value.toString()))
  ];

  return tests.some(test => test);
};

export const isNotNumber = (value: unknown): boolean => !isNumber(value);

export const isObject = (value: unknown): boolean => (typeof value === 'object' && isDefined(value) && isNotArray(value));

export const isNotObject = (value: unknown): boolean => !isObject(value);

export const isString = (value: unknown): boolean => (typeof value === 'string');

export const isNotString = (value: unknown): boolean => !isString(value);

export const stringsMatch = (firstValue: string, secondValue: string): boolean => (firstValue === secondValue);

export const stringsDoNotMatch = (firstValue: string, secondValue: string): boolean => !stringsMatch(firstValue, secondValue);

export const stringContainsSpaces = (value: string): boolean => (value.indexOf(' ') >= 0);

export const stringDoesNotContainSpaces = (value: string): boolean => !stringContainsSpaces(value);
