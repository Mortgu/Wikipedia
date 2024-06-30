import jsonwebtoken from 'jsonwebtoken';

export const authenticateToken = (token) => {
    if (!token) return null;

    return jsonwebtoken.verify(token, process.env.SECRET, (error, decoded) => {
        if (error) return null;
        return decoded;
    });
}

export const login = (request, response) => {

}

export const register = (request, response) => {
    
}