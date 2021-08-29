import * as userC from '../controllers/auth.controller';
import * as testC from '../controllers/test.controller';
// import middleware from "./middleware"

/**
 * setup for /api
 * @param {*} app
 * @param {*} url
 * @param {*} rBase
 */
const base = (app, url, rBase) => {
  app.use(url, rBase);

  app.get(url, (req, res) => {
    const data = {
      message: 'Hello /api!',
    };
    res.status(200).send(data);
  });

  // test route /api
  rBase.route('/tests').get(testC.getTests);
  rBase
    .route('/tests/:testId')
    .get(testC.getTest)
    .post(testC.postTest)
    .put(testC.putTest)
    .delete(testC.deleteTest);

  // User route /api
  rBase.route('/login').post(userC.postLogin);
  rBase.route('/signup').post(userC.postSignup);
  rBase.route('/logout').get(userC.getLogout);

  // rBase
  //   .route("/private", middleware.ensureAuthenticated,)
  //   .get((req, res) => res.status(200).send({ message: "private route" }));
};

export default base;
