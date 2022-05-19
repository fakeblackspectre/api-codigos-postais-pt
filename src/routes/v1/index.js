const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const distritoRoute = require('./distrito.route');
const concelhoRoute = require('./concelho.route');
const codigoPostalRoute = require('./codigoPostal.route');
const ruaRoute = require('./rua.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/distritos',
    route: distritoRoute,
  },
  {
    path: '/concelhos',
    route: concelhoRoute,
  },
  {
    path: '/docs',
    route: docsRoute,
  },
  {
    path: '/codigos_postais',
    route: codigoPostalRoute,
  },
  {
    path: '/ruas',
    route: ruaRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  // {
  //   path: '/docs',
  //   route: docsRoute,
  // },
  // {
  //   path: '/codigos_postais',
  //   route: codigoPostalRoute,
  // },
  // {
  //   path: '/ruas',
  //   route: ruaRoute,
  // },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
