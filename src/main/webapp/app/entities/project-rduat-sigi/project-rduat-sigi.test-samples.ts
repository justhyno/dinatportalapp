import dayjs from 'dayjs/esm';

import { IProjectRduatSigi, NewProjectRduatSigi } from './project-rduat-sigi.model';

export const sampleWithRequiredData: IProjectRduatSigi = {
  id: 31078,
  projectCode: 10,
  localizacaoCodigo: 10,
};

export const sampleWithPartialData: IProjectRduatSigi = {
  id: 51583,
  projectCode: 13,
  dataInicio: dayjs('2020-08-02'),
  dataFim: dayjs('2020-08-02'),
  spgcNome: 'scapegoat base North',
  provedorServicoCodigo: 7,
  localizacaoCodigo: 7,
};

export const sampleWithFullData: IProjectRduatSigi = {
  id: 34023,
  descricaoProjecto: 'Ergonomic Investment',
  projectCode: 11,
  dataInicio: dayjs('2020-08-02'),
  dataFimPrevisao: dayjs('2020-08-02'),
  dataFim: dayjs('2020-08-02'),
  dataPrevisaoInicio: dayjs('2020-08-02'),
  spgcNome: 'Bike meter Account',
  provedorServicoRduat: 'Hafnium Bedfordshire Chevrolet',
  reparticaoID: 97406,
  provedorServicoCodigo: 8,
  localizacaoCodigo: 11,
};

export const sampleWithNewData: NewProjectRduatSigi = {
  projectCode: 9,
  localizacaoCodigo: 9,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
