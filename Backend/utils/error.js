const customError = (message, statusCode) => {
    const error = new Error(message);
    error.status = statusCode;
    error.message = message;
    return error;
}