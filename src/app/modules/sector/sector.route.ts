import express from 'express';
import { sectorController } from './sector.controller';

const router = express.Router();

router.post('/sector', sectorController.createSector);
router.get('/sector', sectorController.getSector);
router.get('/sector/:id', sectorController.getASector);
router.delete('/sector/:id', sectorController.deleteSector);
router.put('/sector/:id', sectorController.updateSector);

export const sectorRoutes = router;
