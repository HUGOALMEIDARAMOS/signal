
export interface Task{
  id: number,
  title: string,
  tipo: ResidenceTypeImp
  isCompleted: boolean;
}

export enum ResidenceTypeImp {
  Pessoal = 'Pessoal',
  Profissional = 'Profissional',
}
