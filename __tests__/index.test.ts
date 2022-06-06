import * as Utils from '../src/index';

describe('utils', () => {
  describe('getDuplicateStrings', () => {
    const testCases = [
      {
        name: 'does not have duplicates',
        value: ['apple', 'orange', 'grape'],
        expected: {
          hasDuplicates: false,
          duplicates: []
        }
      },
      {
        name: 'has duplicates',
        value: ['apple', 'orange', 'grape', 'orange'],
        expected: {
          hasDuplicates: true,
          duplicates: ['orange']
        }
      },
      {
        name: 'has multiple duplicates',
        value: ['apple', 'orange', 'grape', 'orange', 'apple'],
        expected: {
          hasDuplicates: true,
          duplicates: ['orange', 'apple']
        }
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.getDuplicateStrings(value);
        expect(result.hasDuplicates).toBe(expected.hasDuplicates);
        expect(result.duplicates.length).toBe(expected.duplicates.length);
        expect(result.duplicates).toEqual(expect.arrayContaining(expected.duplicates));
      });
    });
  });

  describe('isAllowedStringValue', () => {
    const testCases = [
      {
        name: 'Hamm is not in ["Buzz Lightyear", "Woody Pripe", "Rex"]',
        value: 'Hamm',
        values: [
          'Buzz Lightyear',
          'Woody Pripe',
          'Rex'
        ],
        expected: false
      },
      {
        name: 'Hamm is not in []',
        value: 'Hamm',
        values: [],
        expected: false
      },
      {
        name: 'Hamm is in ["Buzz Lightyear", "Woody Pripe", "Hamm", "Rex"]',
        value: 'Hamm',
        values: [
          'Buzz Lightyear',
          'Woody Pripe',
          'Hamm',
          'Rex'
        ],
        expected: true
      },
      {
        name: 'Hamm is in ["Buzz Lightyear", "Hamm", "Woody Pripe", "Hamm", "Rex", "Hamm"]',
        value: 'Hamm',
        values: [
          'Buzz Lightyear',
          'Hamm',
          'Woody Pripe',
          'Hamm',
          'Rex',
          'Hamm'
        ],
        expected: true
      }
    ];

    testCases.forEach(({ name, value, values, expected }) => {
      it(name, () => {
        const result = Utils.isAllowedStringValue(value, values);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isNotAllowedStringValue', () => {
    const testCases = [
      {
        name: 'Hamm is not in ["Buzz Lightyear", "Woody Pripe", "Rex"]',
        value: 'Hamm',
        values: [
          'Buzz Lightyear',
          'Woody Pripe',
          'Rex'
        ],
        expected: true
      },
      {
        name: 'Hamm is not in []',
        value: 'Hamm',
        values: [],
        expected: true
      },
      {
        name: 'Hamm is in ["Buzz Lightyear", "Woody Pripe", "Hamm", "Rex"]',
        value: 'Hamm',
        values: [
          'Buzz Lightyear',
          'Woody Pripe',
          'Hamm',
          'Rex'
        ],
        expected: false
      },
      {
        name: 'Hamm is in ["Buzz Lightyear", "Hamm", "Woody Pripe", "Hamm", "Rex", "Hamm"]',
        value: 'Hamm',
        values: [
          'Buzz Lightyear',
          'Hamm',
          'Woody Pripe',
          'Hamm',
          'Rex',
          'Hamm'
        ],
        expected: false
      }
    ];

    testCases.forEach(({ name, value, values, expected }) => {
      it(name, () => {
        const result = Utils.isNotAllowedStringValue(value, values);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isArrayOfStrings', () => {
    const testCases = [
      {
        name: 'array of nulls is not array of strings',
        value: [null, null, null, null],
        expected: false
      },
      {
        name: 'array of undefineds is not array of strings',
        value: [undefined, undefined, undefined],
        expected: false
      },
      {
        name: 'array of booleans is not array of strings',
        value: [true, false, false, true],
        expected: false
      },
      {
        name: 'array of numbers is not array of strings',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: false
      },
      {
        name: 'array of objects is not array of strings',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: false
      },
      {
        name: 'array of arrays is not array of strings',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: false
      },
      {
        name: 'array of all types is not array of strings',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: false
      },
      {
        name: 'array of strings is array of strings',
        value: ['Buzz Lightyear', 'Woody Pride', 'Emperor Zurg'],
        expected: true
      },
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isArrayOfStrings(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isNotArrayOfStrings', () => {
    const testCases = [
      {
        name: 'array of nulls is not array of strings',
        value: [null, null, null, null],
        expected: true
      },
      {
        name: 'array of undefineds is not array of strings',
        value: [undefined, undefined, undefined],
        expected: true
      },
      {
        name: 'array of booleans is not array of strings',
        value: [true, false, false, true],
        expected: true
      },
      {
        name: 'array of numbers is not array of strings',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: true
      },
      {
        name: 'array of objects is not array of strings',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: true
      },
      {
        name: 'array of arrays is not array of strings',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: true
      },
      {
        name: 'array of all types is not array of strings',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: true
      },
      {
        name: 'array of strings is array of strings',
        value: ['Buzz Lightyear', 'Woody Pride', 'Emperor Zurg'],
        expected: false
      },
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isNotArrayOfStrings(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isArray', () => {
    const testCases = [
      {
        name: 'null is not array',
        value: null,
        expected: false
      },
      {
        name: 'undefined is not array',
        value: undefined,
        expected: false
      },
      {
        name: 'boolean is not array',
        value: true,
        expected: false
      },
      {
        name: 'number is not array',
        value: 9,
        expected: false
      },
      {
        name: 'string is not array',
        value: 'Woody Pride',
        expected: false
      },
      {
        name: 'object is not array',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: false
      },
      {
        name: 'array of nulls is array',
        value: [null, null, null, null],
        expected: true
      },
      {
        name: 'array of undefineds is array',
        value: [undefined, undefined, undefined],
        expected: true
      },
      {
        name: 'array of booleans is array',
        value: [true, false, false, true],
        expected: true
      },
      {
        name: 'array of numbers is array',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: true
      },
      {
        name: 'array of strings is array',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: true
      },
      {
        name: 'array of objects is array',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: true
      },
      {
        name: 'array of arrays is array',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: true
      },
      {
        name: 'array of all types is array',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: true
      },
      {
        name: 'function is not array',
        value: (): string => 'hello-world',
        expected: false
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isArray(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isNotArray', () => {
    const testCases = [
      {
        name: 'null is not array',
        value: null,
        expected: true
      },
      {
        name: 'undefined is not array',
        value: undefined,
        expected: true
      },
      {
        name: 'boolean is not array',
        value: true,
        expected: true
      },
      {
        name: 'number is not array',
        value: 9,
        expected: true
      },
      {
        name: 'string is not array',
        value: 'Woody Pride',
        expected: true
      },
      {
        name: 'object is not array',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: true
      },
      {
        name: 'array of nulls is array',
        value: [null, null, null, null],
        expected: false
      },
      {
        name: 'array of undefineds is array',
        value: [undefined, undefined, undefined],
        expected: false
      },
      {
        name: 'array of booleans is array',
        value: [true, false, false, true],
        expected: false
      },
      {
        name: 'array of numbers is array',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: false
      },
      {
        name: 'array of strings is array',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: false
      },
      {
        name: 'array of objects is array',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: false
      },
      {
        name: 'array of arrays is array',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: false
      },
      {
        name: 'array of all types is array',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: false
      },
      {
        name: 'function is not array',
        value: (): string => 'hello-world',
        expected: true
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isNotArray(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isBoolean', () => {
    const testCases = [
      {
        name: 'null is not boolean',
        value: null,
        expected: false
      },
      {
        name: 'undefined is not boolean',
        value: undefined,
        expected: false
      },
      {
        name: 'number is not boolean',
        value: 9,
        expected: false
      },
      {
        name: 'string is not boolean',
        value: 'Woody Pride',
        expected: false
      },
      {
        name: 'string "true" is boolean',
        value: 'true',
        expected: true
      },
      {
        name: 'string "false" is boolean',
        value: 'false',
        expected: true
      },
      {
        name: 'string "TRUE" is boolean',
        value: 'TRUE',
        expected: true
      },
      {
        name: 'string "FALSE" is boolean',
        value: 'FALSE',
        expected: true
      },
      {
        name: 'object is not boolean',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: false
      },
      {
        name: 'array of nulls is not boolean',
        value: [null, null, null, null],
        expected: false
      },
      {
        name: 'array of undefineds is not boolean',
        value: [undefined, undefined, undefined],
        expected: false
      },
      {
        name: 'array of booleans is not boolean',
        value: [true, false, false, true],
        expected: false
      },
      {
        name: 'array of numbers is not boolean',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: false
      },
      {
        name: 'array of strings is not boolean',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: false
      },
      {
        name: 'array of objects is not boolean',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: false
      },
      {
        name: 'array of arrays is not boolean',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: false
      },
      {
        name: 'array of all types is not boolean',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: false
      },
      {
        name: 'function is not boolean',
        value: (): string => 'hello-world',
        expected: false
      },
      {
        name: 'true is boolean',
        value: true,
        expected: true
      },
      {
        name: 'false is boolean',
        value: false,
        expected: true
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isBoolean(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isNotBoolean', () => {
    const testCases = [
      {
        name: 'null is not boolean',
        value: null,
        expected: true
      },
      {
        name: 'undefined is not boolean',
        value: undefined,
        expected: true
      },
      {
        name: 'number is not boolean',
        value: 9,
        expected: true
      },
      {
        name: 'string is not boolean',
        value: 'Woody Pride',
        expected: true
      },
      {
        name: 'string "true" is boolean',
        value: 'true',
        expected: false
      },
      {
        name: 'string "false" is boolean',
        value: 'false',
        expected: false
      },
      {
        name: 'string "TRUE" is boolean',
        value: 'TRUE',
        expected: false
      },
      {
        name: 'string "FALSE" is boolean',
        value: 'FALSE',
        expected: false
      },
      {
        name: 'object is not boolean',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: true
      },
      {
        name: 'array of nulls is not boolean',
        value: [null, null, null, null],
        expected: true
      },
      {
        name: 'array of undefineds is not boolean',
        value: [undefined, undefined, undefined],
        expected: true
      },
      {
        name: 'array of booleans is not boolean',
        value: [true, false, false, true],
        expected: true
      },
      {
        name: 'array of numbers is not boolean',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: true
      },
      {
        name: 'array of strings is not boolean',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: true
      },
      {
        name: 'array of objects is not boolean',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: true
      },
      {
        name: 'array of arrays is not boolean',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: true
      },
      {
        name: 'array of all types is not boolean',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: true
      },
      {
        name: 'function is not boolean',
        value: (): string => 'hello-world',
        expected: true
      },
      {
        name: 'true is boolean',
        value: true,
        expected: false
      },
      {
        name: 'false is boolean',
        value: false,
        expected: false
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isNotBoolean(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isDefined', () => {
    const testCases = [
      {
        name: 'null is not defined',
        value: null,
        expected: false
      },
      {
        name: 'undefined is not defined',
        value: undefined,
        expected: false
      },
      {
        name: 'empty string is not defined',
        value: '',
        expected: false
      },
      {
        name: 'boolean true is defined',
        value: true,
        expected: true
      },
      {
        name: 'boolean false is defined',
        value: false,
        expected: true
      },
      {
        name: 'number is defined',
        value: 9,
        expected: true
      },
      {
        name: 'string is defined',
        value: 'Woody Pride',
        expected: true
      },
      {
        name: 'object is defined',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: true
      },
      {
        name: 'array of nulls is defined',
        value: [null, null, null, null],
        expected: true
      },
      {
        name: 'array of undefineds is defined',
        value: [undefined, undefined, undefined],
        expected: true
      },
      {
        name: 'array of booleans is defined',
        value: [true, false, false, true],
        expected: true
      },
      {
        name: 'array of numbers is defined',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: true
      },
      {
        name: 'array of strings is defined',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: true
      },
      {
        name: 'array of objects is defined',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: true
      },
      {
        name: 'array of arrays is defined',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: true
      },
      {
        name: 'array of all types is defined',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: true
      },
      {
        name: 'function is defined',
        value: (): string => 'hello-world',
        expected: true
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isDefined(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isNotDefined', () => {
    const testCases = [
      {
        name: 'null is not defined',
        value: null,
        expected: true
      },
      {
        name: 'undefined is not defined',
        value: undefined,
        expected: true
      },
      {
        name: 'empty string is not defined',
        value: '',
        expected: true
      },
      {
        name: 'boolean true is defined',
        value: true,
        expected: false
      },
      {
        name: 'boolean false is defined',
        value: false,
        expected: false
      },
      {
        name: 'number is defined',
        value: 9,
        expected: false
      },
      {
        name: 'string is defined',
        value: 'Woody Pride',
        expected: false
      },
      {
        name: 'object is defined',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: false
      },
      {
        name: 'array of nulls is defined',
        value: [null, null, null, null],
        expected: false
      },
      {
        name: 'array of undefineds is defined',
        value: [undefined, undefined, undefined],
        expected: false
      },
      {
        name: 'array of booleans is defined',
        value: [true, false, false, true],
        expected: false
      },
      {
        name: 'array of numbers is defined',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: false
      },
      {
        name: 'array of strings is defined',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: false
      },
      {
        name: 'array of objects is defined',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: false
      },
      {
        name: 'array of arrays is defined',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: false
      },
      {
        name: 'array of all types is defined',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: false
      },
      {
        name: 'function is defined',
        value: (): string => 'hello-world',
        expected: false
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isNotDefined(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isFunction', () => {
    const testCases = [
      {
        name: 'null is not a function',
        value: null,
        expected: false
      },
      {
        name: 'undefined is not a function',
        value: undefined,
        expected: false
      },
      {
        name: 'empty string is not a function',
        value: '',
        expected: false
      },
      {
        name: 'boolean true is not a function',
        value: true,
        expected: false
      },
      {
        name: 'boolean false is not a function',
        value: false,
        expected: false
      },
      {
        name: 'number is not a function',
        value: 9,
        expected: false
      },
      {
        name: 'string is not a function',
        value: 'Woody Pride',
        expected: false
      },
      {
        name: 'object is not a function',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: false
      },
      {
        name: 'array of nulls is not a function',
        value: [null, null, null, null],
        expected: false
      },
      {
        name: 'array of undefineds is not a function',
        value: [undefined, undefined, undefined],
        expected: false
      },
      {
        name: 'array of booleans is not a function',
        value: [true, false, false, true],
        expected: false
      },
      {
        name: 'array of numbers is not a function',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: false
      },
      {
        name: 'array of strings is not a function',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: false
      },
      {
        name: 'array of objects is not a function',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: false
      },
      {
        name: 'array of arrays is not a function',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: false
      },
      {
        name: 'array of all types is not a function',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: false
      },
      {
        name: 'function is function',
        value: (): string => 'hello-world',
        expected: true
      },
      {
        name: 'async function is function',
        value: async (): Promise<string> => 'hello-world',
        expected: true
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isFunction(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isNotFunction', () => {
    const testCases = [
      {
        name: 'null is not a function',
        value: null,
        expected: true
      },
      {
        name: 'undefined is not a function',
        value: undefined,
        expected: true
      },
      {
        name: 'empty string is not a function',
        value: '',
        expected: true
      },
      {
        name: 'boolean true is not a function',
        value: true,
        expected: true
      },
      {
        name: 'boolean false is not a function',
        value: false,
        expected: true
      },
      {
        name: 'number is not a function',
        value: 9,
        expected: true
      },
      {
        name: 'string is not a function',
        value: 'Woody Pride',
        expected: true
      },
      {
        name: 'object is not a function',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: true
      },
      {
        name: 'array of nulls is not a function',
        value: [null, null, null, null],
        expected: true
      },
      {
        name: 'array of undefineds is not a function',
        value: [undefined, undefined, undefined],
        expected: true
      },
      {
        name: 'array of booleans is not a function',
        value: [true, false, false, true],
        expected: true
      },
      {
        name: 'array of numbers is not a function',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: true
      },
      {
        name: 'array of strings is not a function',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: true
      },
      {
        name: 'array of objects is not a function',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: true
      },
      {
        name: 'array of arrays is not a function',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: true
      },
      {
        name: 'array of all types is not a function',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: true
      },
      {
        name: 'function is function',
        value: (): string => 'hello-world',
        expected: false
      },
      {
        name: 'async function is function',
        value: async (): Promise<string> => 'hello-world',
        expected: false
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isNotFunction(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isJson', () => {
    const testCases = [
      {
        name: 'null is not JSON',
        value: null,
        expected: false
      },
      {
        name: 'undefined is not JSON',
        value: undefined,
        expected: false
      },
      {
        name: 'empty string is not JSON',
        value: '',
        expected: false
      },
      {
        name: 'boolean true is not JSON',
        value: true,
        expected: false
      },
      {
        name: 'boolean false is not JSON',
        value: false,
        expected: false
      },
      {
        name: 'number is not JSON',
        value: 9,
        expected: false
      },
      {
        name: 'string is not JSON',
        value: 'Woody Pride',
        expected: false
      },
      {
        name: 'object is JSON',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: true
      },
      {
        name: 'array of nulls is JSON',
        value: [null, null, null, null],
        expected: true
      },
      {
        name: 'array of undefineds is JSON',
        value: [undefined, undefined, undefined],
        expected: true
      },
      {
        name: 'array of booleans is JSON',
        value: [true, false, false, true],
        expected: true
      },
      {
        name: 'array of numbers is JSON',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: true
      },
      {
        name: 'array of strings is JSON',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: true
      },
      {
        name: 'array of objects is JSON',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: true
      },
      {
        name: 'array of arrays is JSON',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: true
      },
      {
        name: 'array of all types is JSON',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: true
      },
      {
        name: 'function is not JSON',
        value: (): string => 'hello-world',
        expected: false
      },
      {
        name: 'async function is not JSON',
        value: async (): Promise<string> => 'hello-world',
        expected: false
      },
      {
        name: 'stringified JSON is JSON',
        value: '{"name":"Buzz Lightyear","job":"Space Ranger","isToy":true}',
        expected: true
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isJson(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isNotJson', () => {
    const testCases = [
      {
        name: 'null is not JSON',
        value: null,
        expected: true
      },
      {
        name: 'undefined is not JSON',
        value: undefined,
        expected: true
      },
      {
        name: 'empty string is not JSON',
        value: '',
        expected: true
      },
      {
        name: 'boolean true is not JSON',
        value: true,
        expected: true
      },
      {
        name: 'boolean false is not JSON',
        value: false,
        expected: true
      },
      {
        name: 'number is not JSON',
        value: 9,
        expected: true
      },
      {
        name: 'string is not JSON',
        value: 'Woody Pride',
        expected: true
      },
      {
        name: 'object is JSON',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: false
      },
      {
        name: 'array of nulls is JSON',
        value: [null, null, null, null],
        expected: false
      },
      {
        name: 'array of undefineds is JSON',
        value: [undefined, undefined, undefined],
        expected: false
      },
      {
        name: 'array of booleans is JSON',
        value: [true, false, false, true],
        expected: false
      },
      {
        name: 'array of numbers is JSON',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: false
      },
      {
        name: 'array of strings is JSON',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: false
      },
      {
        name: 'array of objects is JSON',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: false
      },
      {
        name: 'array of arrays is JSON',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: false
      },
      {
        name: 'array of all types is JSON',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: false
      },
      {
        name: 'function is not JSON',
        value: (): string => 'hello-world',
        expected: true
      },
      {
        name: 'async function is not JSON',
        value: async (): Promise<string> => 'hello-world',
        expected: true
      },
      {
        name: 'stringified JSON is JSON',
        value: '{"name":"Buzz Lightyear","job":"Space Ranger","isToy":true}',
        expected: false
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isNotJson(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isNumber', () => {
    const testCases = [
      {
        name: '"234" is number',
        value: '234',
        expected: true
      },
      {
        name: '"9" is number',
        value: '9',
        expected: true
      },
      {
        name: '"654567" is number',
        value: '654567',
        expected: true
      },
      {
        name: 'null is not number',
        value: null,
        expected: false
      },
      {
        name: 'undefined is not number',
        value: undefined,
        expected: false
      },
      {
        name: 'number is number',
        value: 345,
        expected: true
      },
      {
        name: 'empty string is not number',
        value: '',
        expected: false
      },
      {
        name: 'string is not number',
        value: 'Buzz Lightyear',
        expected: false
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isNumber(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isNotNumber', () => {
    const testCases = [
      {
        name: '"234" is number',
        value: '234',
        expected: false
      },
      {
        name: '"9" is number',
        value: '9',
        expected: false
      },
      {
        name: '"654567" is number',
        value: '654567',
        expected: false
      },
      {
        name: 'null is not number',
        value: null,
        expected: true
      },
      {
        name: 'undefined is not number',
        value: undefined,
        expected: true
      },
      {
        name: 'number is number',
        value: 345,
        expected: false
      },
      {
        name: 'empty string is not number',
        value: '',
        expected: true
      },
      {
        name: 'string is not number',
        value: 'Buzz Lightyear',
        expected: true
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isNotNumber(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isObject', () => {
    const testCases = [
      {
        name: 'null is not object',
        value: null,
        expected: false
      },
      {
        name: 'undefined is not object',
        value: undefined,
        expected: false
      },
      {
        name: 'empty string is not object',
        value: '',
        expected: false
      },
      {
        name: 'boolean true is not object',
        value: true,
        expected: false
      },
      {
        name: 'boolean false is not object',
        value: false,
        expected: false
      },
      {
        name: 'number is not object',
        value: 9,
        expected: false
      },
      {
        name: 'string is not object',
        value: 'Woody Pride',
        expected: false
      },
      {
        name: 'object is object',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: true
      },
      {
        name: 'array of nulls is object',
        value: [null, null, null, null],
        expected: false
      },
      {
        name: 'array of undefineds is object',
        value: [undefined, undefined, undefined],
        expected: false
      },
      {
        name: 'array of booleans is object',
        value: [true, false, false, true],
        expected: false
      },
      {
        name: 'array of numbers is object',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: false
      },
      {
        name: 'array of strings is object',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: false
      },
      {
        name: 'array of objects is object',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: false
      },
      {
        name: 'array of arrays is object',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: false
      },
      {
        name: 'array of all types is object',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: false
      },
      {
        name: 'function is not object',
        value: (): string => 'hello-world',
        expected: false
      },
      {
        name: 'async function is not object',
        value: async (): Promise<string> => 'hello-world',
        expected: false
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isObject(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isNotObject', () => {
    const testCases = [
      {
        name: 'null is not object',
        value: null,
        expected: true
      },
      {
        name: 'undefined is not object',
        value: undefined,
        expected: true
      },
      {
        name: 'empty string is not object',
        value: '',
        expected: true
      },
      {
        name: 'boolean true is not object',
        value: true,
        expected: true
      },
      {
        name: 'boolean false is not object',
        value: false,
        expected: true
      },
      {
        name: 'number is not object',
        value: 9,
        expected: true
      },
      {
        name: 'string is not object',
        value: 'Woody Pride',
        expected: true
      },
      {
        name: 'object is object',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: false
      },
      {
        name: 'array of nulls is object',
        value: [null, null, null, null],
        expected: true
      },
      {
        name: 'array of undefineds is object',
        value: [undefined, undefined, undefined],
        expected: true
      },
      {
        name: 'array of booleans is object',
        value: [true, false, false, true],
        expected: true
      },
      {
        name: 'array of numbers is object',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: true
      },
      {
        name: 'array of strings is object',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: true
      },
      {
        name: 'array of objects is object',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: true
      },
      {
        name: 'array of arrays is object',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: true
      },
      {
        name: 'array of all types is object',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: true
      },
      {
        name: 'function is not object',
        value: (): string => 'hello-world',
        expected: true
      },
      {
        name: 'async function is not object',
        value: async (): Promise<string> => 'hello-world',
        expected: true
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isNotObject(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isString', () => {
    const testCases = [
      {
        name: 'null is not string',
        value: null,
        expected: false
      },
      {
        name: 'undefined is not string',
        value: undefined,
        expected: false
      },
      {
        name: 'empty string is string',
        value: '',
        expected: true
      },
      {
        name: 'boolean true is not string',
        value: true,
        expected: false
      },
      {
        name: 'boolean false is not string',
        value: false,
        expected: false
      },
      {
        name: 'number is not string',
        value: 9,
        expected: false
      },
      {
        name: 'string is string',
        value: 'Woody Pride',
        expected: true
      },
      {
        name: 'object is not string',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: false
      },
      {
        name: 'array of nulls is not string',
        value: [null, null, null, null],
        expected: false
      },
      {
        name: 'array of undefineds is not string',
        value: [undefined, undefined, undefined],
        expected: false
      },
      {
        name: 'array of booleans is not string',
        value: [true, false, false, true],
        expected: false
      },
      {
        name: 'array of numbers is not string',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: false
      },
      {
        name: 'array of strings is not string',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: false
      },
      {
        name: 'array of objects is not string',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: false
      },
      {
        name: 'array of arrays is not string',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: false
      },
      {
        name: 'array of all types is not string',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: false
      },
      {
        name: 'function is not string',
        value: (): string => 'hello-world',
        expected: false
      },
      {
        name: 'async function is not string',
        value: async (): Promise<string> => 'hello-world',
        expected: false
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isString(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isNotString', () => {
    const testCases = [
      {
        name: 'null is not string',
        value: null,
        expected: true
      },
      {
        name: 'undefined is not string',
        value: undefined,
        expected: true
      },
      {
        name: 'empty string is string',
        value: '',
        expected: false
      },
      {
        name: 'boolean true is not string',
        value: true,
        expected: true
      },
      {
        name: 'boolean false is not string',
        value: false,
        expected: true
      },
      {
        name: 'number is not string',
        value: 9,
        expected: true
      },
      {
        name: 'string is string',
        value: 'Woody Pride',
        expected: false
      },
      {
        name: 'object is not string',
        value: {
          name: 'Buzz Lightyear',
          job: 'Space Ranger',
          isToy: true
        },
        expected: true
      },
      {
        name: 'array of nulls is not string',
        value: [null, null, null, null],
        expected: true
      },
      {
        name: 'array of undefineds is not string',
        value: [undefined, undefined, undefined],
        expected: true
      },
      {
        name: 'array of booleans is not string',
        value: [true, false, false, true],
        expected: true
      },
      {
        name: 'array of numbers is not string',
        value: [1, 2, 3, 89, 5434, 213, 45, 23],
        expected: true
      },
      {
        name: 'array of strings is not string',
        value: ['Buzz Lightyear', 'Woody Pride'],
        expected: true
      },
      {
        name: 'array of objects is not string',
        value: [
          {
            name: 'Buzz Lightyear',
            job: 'Space Ranger',
            isToy: true
          },
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          }
        ],
        expected: true
      },
      {
        name: 'array of arrays is not string',
        value: [
          ['Buzz Lightyear', 'Woody Pride'],
          [1, 2, 3, 89, 5434, 213, 45, 23],
          [
            {
              name: 'Buzz Lightyear',
              job: 'Space Ranger',
              isToy: true
            },
            {
              name: 'Woody Pride',
              job: 'Sheriff',
              isToy: true
            }
          ]
        ],
        expected: true
      },
      {
        name: 'array of all types is not string',
        value: [
          null,
          undefined,
          true,
          false,
          'Buzz Lightyear',
          9,
          {
            name: 'Woody Pride',
            job: 'Sheriff',
            isToy: true
          },
          [
            ['Buzz Lightyear', 'Woody Pride'],
            [1, 2, 3, 89, 5434, 213, 45, 23],
            [
              {
                name: 'Buzz Lightyear',
                job: 'Space Ranger',
                isToy: true
              },
              {
                name: 'Woody Pride',
                job: 'Sheriff',
                isToy: true
              }
            ]
          ],
        ],
        expected: true
      },
      {
        name: 'function is not string',
        value: (): string => 'hello-world',
        expected: true
      },
      {
        name: 'async function is not string',
        value: async (): Promise<string> => 'hello-world',
        expected: true
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isNotString(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('stringsMatch', () => {
    const testCases = [
      {
        name: '"true" and "false" do not match',
        firstValue: 'true',
        secondValue: 'false',
        expected: false
      },
      {
        name: '"Buzz Lightyear" and "Woody Pride" do not match',
        firstValue: 'Buzz Lightyear',
        secondValue: 'Woody Pride',
        expected: false
      },
      {
        name: '"Buzz Lightyear" and "Buzz Lightyear" match',
        firstValue: 'Buzz Lightyear',
        secondValue: 'Buzz Lightyear',
        expected: true
      }
    ];

    testCases.forEach(({ name, firstValue, secondValue, expected }) => {
      it(name, () => {
        const result = Utils.stringsMatch(firstValue, secondValue);
        expect(result).toBe(expected);
      });
    });
  });

  describe('stringsDoNotMatch', () => {
    const testCases = [
      {
        name: '"true" and "false" do not match',
        firstValue: 'true',
        secondValue: 'false',
        expected: true
      },
      {
        name: '"Buzz Lightyear" and "Woody Pride" do not match',
        firstValue: 'Buzz Lightyear',
        secondValue: 'Woody Pride',
        expected: true
      },
      {
        name: '"Buzz Lightyear" and "Buzz Lightyear" match',
        firstValue: 'Buzz Lightyear',
        secondValue: 'Buzz Lightyear',
        expected: false
      }
    ];

    testCases.forEach(({ name, firstValue, secondValue, expected }) => {
      it(name, () => {
        const result = Utils.stringsDoNotMatch(firstValue, secondValue);
        expect(result).toBe(expected);
      });
    });
  });

  describe('stringContainsSpaces', () => {
    const testCases = [
      {
        name: '"nospaces" does not contain spaces',
        value: 'nospaces',
        expected: false
      },
      {
        name: '"nospaceshereeither" does not contain spaces',
        value: 'nospaceshereeither',
        expected: false
      },
      {
        name: '"this has three spaces" contains spaces',
        value: 'this has three spaces',
        expected: true
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.stringContainsSpaces(value);
        expect(result).toBe(expected);
      });
    });
  });

  describe('stringDoesNotContainSpaces', () => {
    const testCases = [
      {
        name: '"nospaces" does not contain spaces',
        value: 'nospaces',
        expected: true
      },
      {
        name: '"nospaceshereeither" does not contain spaces',
        value: 'nospaceshereeither',
        expected: true
      },
      {
        name: '"this has three spaces" contains spaces',
        value: 'this has three spaces',
        expected: false
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.stringDoesNotContainSpaces(value);
        expect(result).toBe(expected);
      });
    });
  });
});
