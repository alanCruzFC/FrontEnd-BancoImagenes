export interface Equipo{
    id: number;
    nombre: string;
    jefe?: {
      id: number;
      username: string;
    };
}