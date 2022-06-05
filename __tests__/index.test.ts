import * as Utils from '../src/index';

describe('utils', () => {
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
      }
    ];

    testCases.forEach(({ name, value, expected }) => {
      it(name, () => {
        const result = Utils.isNotArray(value);
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
});
