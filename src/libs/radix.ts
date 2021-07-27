/**
 * 11 - 35進数の数値をアルファベットに変換
 * @param value 数値
 * @param baseValue 基数
 * @returns
 */
export const decode = (value: number, baseValue: number) => {
  return baseValue > 10 && baseValue < 37 && value > 9 && value < 36
    ? String.fromCharCode(value + 55)
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
