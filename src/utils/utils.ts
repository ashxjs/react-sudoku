export const isNil = <T>(value: T): value is T => value === (null || undefined);
export const isOdd = (value: number): boolean => value % 2 === 0;
