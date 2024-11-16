import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 6953,
  login: '~nA@Okl\\SZql',
};

export const sampleWithPartialData: IUser = {
  id: 29405,
  login: 'ZgX@J8bA6Q',
};

export const sampleWithFullData: IUser = {
  id: 18089,
  login: 'Kr',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
