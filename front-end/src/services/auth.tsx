export const fakeAuth = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve("2342f2f1d131rf12"), 250);
  });
