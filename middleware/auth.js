import jwt from 'jsonwebtoken';


/*this for API authaurization verified to log in with fronend*/
export const verifyToken = async (req, res, next) => {
    try {
      {
        let token = req.header("Authorization");

        if(!token) {
            return res.status(403).send("Access DENIED");
        }

        if (token.startsWith("Beare ")) {
            token = token.slice(7, token.lenght).trimLeft();
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
      }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}