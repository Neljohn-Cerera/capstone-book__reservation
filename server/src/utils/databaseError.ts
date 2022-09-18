export const databaseError = (error: any) => {
  return {
    errors: [
      { field: 'database error', message: `error code : ${error.code}` },
    ],
  };
};
