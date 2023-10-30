export const rejectCatch = <T>(promise: Promise<T>) =>
  promise
    .then((value) => ({ value, err: undefined }))
    .catch((err) => ({ err, value: undefined }));
