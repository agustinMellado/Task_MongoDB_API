import { z } from 'zod'


export const createTaskSchema= z.object({
    title: z.string({
        required_error:'El titulo es requerido'
    }),
    description: z.string({required_error:'La descripcion debe ser una cadena de texto'}).optional(),
    date: z.string().datetime().optional()
})