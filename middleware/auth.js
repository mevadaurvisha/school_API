// const authorizeRoles = (roles) => {
//     return (req, res, next) => {
//         if (!roles.includes(req.user)) {
//           return res.status(403).json({"error" :'Access denied'});
//         }
//         next();
//       };
// }

// export default authorizeRoles;