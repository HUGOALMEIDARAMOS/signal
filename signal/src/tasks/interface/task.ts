export interface taskImp{
  task: string,
  tipo: ResidenceTypeImp
}

export enum ResidenceTypeImp {
  Pessoal = 'pessoal',
  Trabalho = 'trabalho',
}
