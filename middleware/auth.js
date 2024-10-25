import jwt from "jsonwebtoken";

// Middleware to authenticate token
export const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ message: "Access Denied" });

    jwt.verify(token, "mysecretkey", (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid Token" });
        req.user = user;
        next();
    });
};

// Middleware to authorize roles
export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Permission Denied" });
        }
        next();
    };
};
