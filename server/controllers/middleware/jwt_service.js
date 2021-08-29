import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    // Epoch time for 1 hour 3600
    // Validation to denied acces to expired tokens
    // Maybe it would more secure if I create a blacklist of tokens in the db
    const decoded = jwt.decode(token);
    const expiration = decoded.iat + 3600;
    const currentDate = Math.round(new Date().getTime() / 1000);
    if (expiration < currentDate) {
      throw Error;
    }

    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Token is not valid' });
  }
};

export default verifyToken;
