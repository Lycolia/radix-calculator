import { decode, decToRadix } from './radix';

describe('decode', () => {
  it('10-35 が、対応した A-Z のアルファベットに変換されること', () => {
    const testItems = [
      {
        value: 10,
        beResult: 'A',
      },
      {
        value: 11,
        beResult: 'B',
      },
      {
        value: 12,
        beResult: 'C',
      },
      {
        value: 13,
        beResult: 'D',
      },
      {
        value: 14,
        beResult: 'E',
      },
      {
        value: 15,
        beResult: 'F',
      },
      {
        value: 16,
        beResult: 'G',
      },
      {
        value: 17,
        beResult: 'H',
      },
      {
        value: 18,
        beResult: 'I',
      },
      {
        value: 19,
        beResult: 'J',
      },
      {
        value: 20,
        beResult: 'K',
      },
      {
        value: 21,
        beResult: 'L',
      },
      {
        value: 22,
        beResult: 'M',
      },
      {
        value: 23,
        beResult: 'N',
      },
      {
        value: 24,
        beResult: 'O',
      },
      {
        value: 25,
        beResult: 'P',
      },
      {
        value: 26,
        beResult: 'Q',
      },
      {
        value: 27,
        beResult: 'R',
      },
      {
        value: 28,
        beResult: 'S',
      },
      {
        value: 29,
        beResult: 'T',
      },
      {
        value: 30,
        beResult: 'U',
      },
      {
        value: 31,
        beResult: 'V',
      },
      {
        value: 32,
        beResult: 'W',
      },
      {
        value: 33,
        beResult: 'X',
      },
      {
        value: 34,
        beResult: 'Y',
      },
      {
        value: 35,
        beResult: 'Z',
      },
    ];

    testItems.forEach((item) => {
      const result = decode(item.value, 35);
      expect(result).toBe(item.beResult);
    });
  });

  it('基数が 10 以下の場合、数値がそのまま文字列化されて返ってくること', () => {
    const testItems = [
      {
        value: 10,
        baseValue: 1,
      },
      {
        value: 10,
        baseValue: 2,
      },
      {
        value: 10,
        baseValue: 3,
      },
      {
        value: 10,
        baseValue: 4,
      },
      {
        value: 10,
        baseValue: 5,
      },
      {
        value: 10,
        baseValue: 6,
      },
      {
        value: 10,
        baseValue: 7,
      },
      {
        value: 10,
        baseValue: 8,
      },
      {
        value: 10,
        baseValue: 9,
      },
      {
        value: 10,
        baseValue: 10,
      },
    ];

    testItems.forEach((item) => {
      const result = decode(item.value, item.baseValue);
      expect(result).toBe(item.value.toString());
    });
  });

  it('基数が 11-35 以下の場合、数値がアルファベット化されて返ってくること', () => {
    const testItems = [
      {
        value: 10,
        baseValue: 11,
      },
      {
        value: 10,
        baseValue: 12,
      },
      {
        value: 10,
        baseValue: 13,
      },
      {
        value: 10,
        baseValue: 14,
      },
      {
        value: 10,
        baseValue: 15,
      },
      {
        value: 10,
        baseValue: 16,
      },
      {
        value: 10,
        baseValue: 17,
      },
      {
        value: 10,
        baseValue: 18,
      },
      {
        value: 10,
        baseValue: 19,
      },
      {
        value: 10,
        baseValue: 20,
      },
      {
        value: 10,
        baseValue: 21,
      },
      {
        value: 10,
        baseValue: 22,
      },
      {
        value: 10,
        baseValue: 23,
      },
      {
        value: 10,
        baseValue: 24,
      },
      {
        value: 10,
        baseValue: 25,
      },
      {
        value: 10,
        baseValue: 26,
      },
      {
        value: 10,
        baseValue: 27,
      },
      {
        value: 10,
        baseValue: 28,
      },
      {
        value: 10,
        baseValue: 29,
      },
      {
        value: 10,
        baseValue: 30,
      },
      {
        value: 10,
        baseValue: 31,
      },
      {
        value: 10,
        baseValue: 32,
      },
      {
        value: 10,
        baseValue: 33,
      },
      {
        value: 10,
        baseValue: 34,
      },
      {
        value: 10,
        baseValue: 35,
      },
    ];

    testItems.forEach((item) => {
      const result = decode(item.value, item.baseValue);
      expect(result).toBe('A');
    });
  });
});

describe('decToRadix', () => {
  const testItems = [
    {
      name: '10 進数が 2 進数に変換できること',
      value: 35,
      baseValue: 2,
      beResult: '100011',
    },
    {
      name: '10 進数が 3 進数に変換できること',
      value: 35,
      baseValue: 3,
      beResult: '1022',
    },
    {
      name: '10 進数が 4 進数に変換できること',
      value: 35,
      baseValue: 4,
      beResult: '203',
    },
    {
      name: '10 進数が 8 進数に変換できること',
      value: 35,
      baseValue: 8,
      beResult: '43',
    },
    {
      name: '10 進数が 16 進数に変換できること',
      value: 35,
      baseValue: 16,
      beResult: '23',
    },
    {
      name: '10 進数が 35 進数に変換できること',
      value: 35,
      baseValue: 35,
      beResult: '10',
    },
    {
      name: '10 進数が 36 進数に変換できること',
      value: 35,
      baseValue: 36,
      beResult: 'Z',
    },
  ];

  testItems.forEach((item) => {
    // eslint-disable-next-line jest/valid-title
    it(item.name, () => {
      const result = decToRadix(item.value, item.baseValue);
      expect(result).toBe(item.beResult);
    });
  });
});
