/**
 * V overwrite U (key)
 * No intersection in U -> part A
 * Union of U and V -> part B
 * Combine part A with U value and part B with V value
 */

type Union<U, V> = Extract<keyof U, keyof V>;

type NoIntersection<U, V> = Exclude<keyof U, keyof V>;

export type overwrite<U, V> = {
  [key in Union<U, V>]: V[key];
} & {
  [key in NoIntersection<U, V>]: U[key];
};
