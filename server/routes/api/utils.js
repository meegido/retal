export function showError(res, message) {
    return e => res.status(500).json({
        message: message,
        error: e.message
    });
}

export function showSucces(res, message) {
    return e => res.status(200).json({
        message: message,
        error: e.message
    });
}
