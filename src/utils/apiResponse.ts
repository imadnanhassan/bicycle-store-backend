export const apiResponse = {
  success: (data: unknown, message = 'Success') => ({
    success: true,
    message,
    data,
  }),

  error: (error: unknown, message = 'Error occurred') => {
    if (error instanceof Error && error.name === 'ValidationError') {
      return {
        success: false,
        message: 'Validation failed',
        error: error,
      };
    }
    return {
      success: false,
      message,
      error,
    };
  },
};
