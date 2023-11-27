import express from 'express';
import { sectorRoutes } from '../modules/sector/sector.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: sectorRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
