import * as Utils from '../src/index';

describe('isArray', () => {
  const testCases = [
    {
      name: 'is not a null',
      value: null,
      expected: false
    },
    {
      name: 'is not an undefined',
      value: undefined,
      expected: false
    },
    {
      name: 'is not a boolean',
      value: true,
      expected: false
    },
    {
      name: 'is not a number',
      value: 9,
      expected: false
    },
    {
      name: 'is not a string',
      value: 'Woody Pride',
      expected: false
    },
    {
      name: 'is not an object',
      value: {
        name: 'Buzz Lightyear',
        job: 'Space Ranger',
        isToy: true
      },
      expected: false
    },
    {
      name: 'is array (nulls)',
      value: [null, null, null, null],
      expected: true
    },
    {
      name: 'is array (undefineds)',
      value: [undefined, undefined, undefined],
      expected: true
    },
    {
      name: 'is array (booleans)',
      value: [true, false, false, true],
      expected: true
    },
    {
      name: 'is array (numbers)',
      value: [1, 2, 3, 89, 5434, 213, 45, 23],
      expected: true
    },
    {
      name: 'is array (strings)',
      value: ['Buzz Lightyear', 'Woody Pride'],
      expected: true
    },
    {
      name: 'is array (objects)',
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
      name: 'is array (arrays)',
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
      name: 'is array (all)',
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
