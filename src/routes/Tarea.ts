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

/**
 * @openapi
 * /tareas/{organizacionId}/tareas/{tareaId}/estado:
 *   patch:
 *     summary: Modifica el estado de una tarea
 *     tags: [Organizaciones]
 *     parameters:
 *       - in: path
 *         name: organizacionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ObjectId de la organización
 *       - in: path
 *         name: tareaId
 *         required: true
 *         schema:
 *           type: string
 *         description: ObjectId de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - estado
 *             properties:
 *               estado:
 *                 type: string
 *                 enum: [To do, In progress, Done]
 *                 example: In progress
 *     responses:
 *       200:
 *         description: Estado de la tarea actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarea'
 *       404:
 *         description: Tarea no encontrada
 *       422:
 *         description: Validación fallida (Joi)
 */
router.patch(
  '/:organizacionId/tareas/:tareaId/estado',
  ValidateJoi(Schemas.tarea.updateEstado),
  controller.updateEstado
);

export default router;