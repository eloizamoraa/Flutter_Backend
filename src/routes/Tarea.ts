import express from 'express';
import controller from '../controllers/Tarea';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();
//Crear tarea por organizacion
router.post(
  '/:organizacionId/tareas',
  ValidateJoi(Schemas.tarea.create),
  controller.createByOrganizacion
);

router.get(
  '/:organizacionId/tareas',
  controller.readByOrganizacion
);

router.patch(
  '/:organizacionId/tareas/:tareaId/estado',
  ValidateJoi(Schemas.tarea.updateEstado),
  controller.updateEstado
);

export default router;