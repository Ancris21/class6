import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e0cdbce7-0ef0-4635-814f-1c57c1a649d3',
};

export const sampleWithPartialData: IAuthority = {
  name: '8080323a-27cb-4ff9-88df-c39e09b2cf40',
};

export const sampleWithFullData: IAuthority = {
  name: 'b422e57b-0936-4943-903c-90e2eba0f7b4',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
