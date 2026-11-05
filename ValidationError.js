class ValidationError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.name = "ValidationError";
        this.statusCode = statusCode || 500;
    }
}

export default ValidationError;