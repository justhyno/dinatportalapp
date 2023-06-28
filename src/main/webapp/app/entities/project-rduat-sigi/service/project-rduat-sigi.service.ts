import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IProjectRduatSigi, NewProjectRduatSigi } from '../project-rduat-sigi.model';

export type PartialUpdateProjectRduatSigi = Partial<IProjectRduatSigi> & Pick<IProjectRduatSigi, 'id'>;

type RestOf<T extends IProjectRduatSigi | NewProjectRduatSigi> = Omit<
  T,
  'dataInicio' | 'dataFimPrevisao' | 'dataFim' | 'dataPrevisaoInicio'
> & {
  dataInicio?: string | null;
  dataFimPrevisao?: string | null;
  dataFim?: string | null;
  dataPrevisaoInicio?: string | null;
};

export type RestProjectRduatSigi = RestOf<IProjectRduatSigi>;

export type NewRestProjectRduatSigi = RestOf<NewProjectRduatSigi>;

export type PartialUpdateRestProjectRduatSigi = RestOf<PartialUpdateProjectRduatSigi>;

export type EntityResponseType = HttpResponse<IProjectRduatSigi>;
export type EntityArrayResponseType = HttpResponse<IProjectRduatSigi[]>;

@Injectable({ providedIn: 'root' })
export class ProjectRduatSigiService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/project-rduat-sigis');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestProjectRduatSigi>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestProjectRduatSigi[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  getProjectRduatSigiIdentifier(projectRduatSigi: Pick<IProjectRduatSigi, 'id'>): number {
    return projectRduatSigi.id;
  }

  compareProjectRduatSigi(o1: Pick<IProjectRduatSigi, 'id'> | null, o2: Pick<IProjectRduatSigi, 'id'> | null): boolean {
    return o1 && o2 ? this.getProjectRduatSigiIdentifier(o1) === this.getProjectRduatSigiIdentifier(o2) : o1 === o2;
  }

  addProjectRduatSigiToCollectionIfMissing<Type extends Pick<IProjectRduatSigi, 'id'>>(
    projectRduatSigiCollection: Type[],
    ...projectRduatSigisToCheck: (Type | null | undefined)[]
  ): Type[] {
    const projectRduatSigis: Type[] = projectRduatSigisToCheck.filter(isPresent);
    if (projectRduatSigis.length > 0) {
      const projectRduatSigiCollectionIdentifiers = projectRduatSigiCollection.map(
        projectRduatSigiItem => this.getProjectRduatSigiIdentifier(projectRduatSigiItem)!
      );
      const projectRduatSigisToAdd = projectRduatSigis.filter(projectRduatSigiItem => {
        const projectRduatSigiIdentifier = this.getProjectRduatSigiIdentifier(projectRduatSigiItem);
        if (projectRduatSigiCollectionIdentifiers.includes(projectRduatSigiIdentifier)) {
          return false;
        }
        projectRduatSigiCollectionIdentifiers.push(projectRduatSigiIdentifier);
        return true;
      });
      return [...projectRduatSigisToAdd, ...projectRduatSigiCollection];
    }
    return projectRduatSigiCollection;
  }

  protected convertDateFromClient<T extends IProjectRduatSigi | NewProjectRduatSigi | PartialUpdateProjectRduatSigi>(
    projectRduatSigi: T
  ): RestOf<T> {
    return {
      ...projectRduatSigi,
      dataInicio: projectRduatSigi.dataInicio?.format(DATE_FORMAT) ?? null,
      dataFimPrevisao: projectRduatSigi.dataFimPrevisao?.format(DATE_FORMAT) ?? null,
      dataFim: projectRduatSigi.dataFim?.format(DATE_FORMAT) ?? null,
      dataPrevisaoInicio: projectRduatSigi.dataPrevisaoInicio?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restProjectRduatSigi: RestProjectRduatSigi): IProjectRduatSigi {
    return {
      ...restProjectRduatSigi,
      dataInicio: restProjectRduatSigi.dataInicio ? dayjs(restProjectRduatSigi.dataInicio) : undefined,
      dataFimPrevisao: restProjectRduatSigi.dataFimPrevisao ? dayjs(restProjectRduatSigi.dataFimPrevisao) : undefined,
      dataFim: restProjectRduatSigi.dataFim ? dayjs(restProjectRduatSigi.dataFim) : undefined,
      dataPrevisaoInicio: restProjectRduatSigi.dataPrevisaoInicio ? dayjs(restProjectRduatSigi.dataPrevisaoInicio) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestProjectRduatSigi>): HttpResponse<IProjectRduatSigi> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestProjectRduatSigi[]>): HttpResponse<IProjectRduatSigi[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
