// import jwt from 'jsonwebtoken';

// const verifyToken = (req, res, next) => {

//     const token = req.headers['authorization'];

//     if(!token) {
//         res.status(400).json({'error' : "token required"});
//     }

//     jwt.verify(token.split(' '[1],mysecretkey, (err, decoded) => {
//         if(err) {
//             res.status(499).json({'error' : "token authenticate error"});
//         }

//         req.user = decoded;

//         next();
//     }));
// };

// export default verifyToken;