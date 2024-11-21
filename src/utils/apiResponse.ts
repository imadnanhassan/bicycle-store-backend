export const apiResponse = {
  success: (data: unknown, message = 'Success') => ({
    status: 'success',
    message,
    data,
  }),

  error: (error: unknown, message = 'Error occurred') => ({
    status: 'error',
    message,
    error,
  }),
};
