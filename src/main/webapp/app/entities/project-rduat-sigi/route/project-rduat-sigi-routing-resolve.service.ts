import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IProjectRduatSigi } from '../project-rduat-sigi.model';
import { ProjectRduatSigiService } from '../service/project-rduat-sigi.service';

export const projectRduatSigiResolve = (route: ActivatedRouteSnapshot): Observable<null | IProjectRduatSigi> => {
  const id = route.params['id'];
  if (id) {
    return inject(ProjectRduatSigiService)
      .find(id)
      .pipe(
        mergeMap((projectRduatSigi: HttpResponse<IProjectRduatSigi>) => {
          if (projectRduatSigi.body) {
            return of(projectRduatSigi.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        })
      );
  }
  return of(null);
};

export default projectRduatSigiResolve;
