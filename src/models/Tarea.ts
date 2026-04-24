import mongoose, { Document, Schema, Types } from 'mongoose';

export type EstadoTarea = 'To do' | 'In progress' | 'Done';

export interface ITarea {
  titulo: string;
  fechaInicio: Date;
  fechaFin: Date;
  organizacionId: Types.ObjectId | string;
  usuarios: Types.ObjectId[] | string[];
  estado: EstadoTarea;
}

export interface ITareaModel extends ITarea, Document {}

const TareaSchema: Schema = new Schema(
    {
        titulo: { type: String, required: true },
        fechaInicio: { type: Date, required: true },
        fechaFin: { type: Date, required: true },
        organizacionId: { type: Schema.Types.ObjectId, required: true, ref: 'Organizacion' },
        usuarios: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }],
        estado: {
            type: String,
            enum: ['To do', 'In progress', 'Done'],
            default: 'To do',
            required: true
        }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<ITareaModel>('Tarea', TareaSchema);