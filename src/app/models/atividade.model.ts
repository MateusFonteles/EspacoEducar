import { Serie } from '../models/serie.model';
import { Categoria } from '../models/categoria.model';
export interface Atividade {
    id?: number
    titulo:string
    serie: Serie
    materia: Categoria
    imagem: string
    descricao: string
    autor: string
    data: string
}