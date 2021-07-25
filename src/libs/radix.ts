/**
 * 11 - 35進数の数値をアルファベットに変換
 * @param value 数値
 * @param baseValue 基数
 * @returns
 */
export const decode = (value: number, baseValue: number) => {
  const signMap: { [key: number]: string } = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
    16: 'G',
    17: 'H',
    18: 'I',
    19: 'J',
    20: 'K',
    21: 'L',
    22: 'M',
    23: 'N',
    24: 'O',
    25: 'P',
    26: 'Q',
    27: 'R',
    28: 'S',
    29: 'T',
    30: 'U',
    31: 'V',
    32: 'W',
    33: 'X',
    34: 'Y',
    35: 'Z',
  };

  return baseValue > 10 && baseValue < 37 && value > 9 && value < 36
    ? signMap[value]
    : value.toString();
};

/**
 * 10進数からbaseValue進数に変換
 * @param value 数値
 * @param baseValue 基数
 * @returns
 */
export const decToRadix = (value: number, baseValue: number): string => {
  /** 商 */
  const qua = Math.floor(value / baseValue);
  /** 余剰 */
  const rem = value % baseValue;
  /** 符号化した余剰 */
  const remSign = decode(rem, baseValue);

  if (qua > 0) {
    // 商に対し除算できるケース
    const acc = decToRadix(qua, baseValue);
    return `${acc}${remSign}`;
  } else {
    // 基数 > 数値のケース、或いは最後の除算の結果（商と余剰を合体させるところ
    return decode(value, baseValue);
  }
};
