import { authenticateToken } from "../controllers/authentication.controller";

export const requireAuthentication = (request, response, next) => {
    const { authentication } = request.cookies;

    if (!authentication) {
        return response.status(404).json({
            title: '', message: ''
        });
    }

    const result = authenticateToken(authentication);

    if (!result) {
        return response.status(406).json({
            title: '', message: ''
        });
    }

    request.user = result;

    next();
}

export const requirePermission = (permission) => {
    return (request, response, next) => {
        next();
    }
}