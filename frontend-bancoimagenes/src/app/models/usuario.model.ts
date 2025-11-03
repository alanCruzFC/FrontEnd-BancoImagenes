export interface Usuario {
  id: number;
  username: string;
  email: string;
  rol: string;
  activo: boolean;
  fechaCreacion: string;
  equipo?: {
    id: number;
    nombre: string;
    jefe?: {
      id: number;
      username: string;
    };
  };
}