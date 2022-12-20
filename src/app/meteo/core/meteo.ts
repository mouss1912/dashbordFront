// export interface Meteos {
//     dateDuJour: string;
//     listMeteo : Meteo[];
// }

export interface Meteo {
    id: number;
    date: Date;
    vitesseMoyVent: number;
    cumulPluie: number;
    tempatureSol: number;
    idCommune: number;
    nomCommune: string;

  }


  
//   export interface QuizzAnswer {
//     answer: string;
//     isCorrect: boolean;
//   }