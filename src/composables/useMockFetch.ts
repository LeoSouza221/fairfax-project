export function useMockFetch<Type>(data: Type): Promise<Type> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}
