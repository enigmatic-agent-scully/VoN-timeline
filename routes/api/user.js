const router = require('express').Router();
var userController = require('./../../controllers/usercontroller');

//API call for signup
// router.route('/signup').post(
//   userController.signup,
//   function(err, req, res, next) {
//     if (err) {
//       return next(err);
//     }
//     next();
//   },
//   // Success responses
//   function(req, res) {
//     console.log(`returned to the router.route('/login) after a successful login,
//                         req.user = ${req.session.user}`);
//     res.json({
//       success: true,
//       redirect: '/'
//     });
//   }
// );

// //API call for login
// router.route('/login').post(
//   userController.beforeLogin,
//   userController.login,
//   // This will handle errors
//   function(err, req, res, next) {
//     if (err) {
//       return next(err);
//     }
//     next();
//   },
//   // Success responses
//   function(req, res) {
//     console.log(`returned to the router.route('/login) after a successful login,
//                         req.user = ${req.session.user}`);
//     res.json({
//       success: true,
//       redirect: '/'
//     });
//   }
// );

// //API call will return session info to the front end
// router.route('/session').get(userController.getSession);

// //API call for logout
// router.route('/logout').get(userController.logout);

router.route('/:id').get(userController.findById);

// router.route('/update').put(userController.update);

module.exports = router;
