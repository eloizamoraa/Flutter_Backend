import { NextFunction, Request, Response } from 'express';
import TareaService from '../services/Tarea';

const createByOrganizacion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const savedTarea = await TareaService.createTareaByOrganizacion(req.params.organizacionId, req.body);
        return savedTarea ? res.status(201).json(savedTarea) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const readByOrganizacion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tareas = await TareaService.getTareasByOrganizacion(req.params.organizacionId);
        return res.status(200).json(tareas);
    } catch (error) {
        return res.status(500).json({ error });
    }
};
//Update estado de la tarea
const updateEstado = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tarea = await TareaService.updateEstadoTarea(req.params.tareaId,req.body.estado); 
     res.status(200).json(tarea)
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default { createByOrganizacion, readByOrganizacion, updateEstado };