export const trimObjectString = <T = Record<string, string>>(input: T): T =>
  Object.entries(input).reduce<T>(
    (acc, [k, v]) => {
      acc[k as keyof T] = v.trim();
      return acc;
    },
    { ...input },
  );
