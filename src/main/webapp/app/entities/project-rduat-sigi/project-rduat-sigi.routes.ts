import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ProjectRduatSigiComponent } from './list/project-rduat-sigi.component';
import { ProjectRduatSigiDetailComponent } from './detail/project-rduat-sigi-detail.component';
import ProjectRduatSigiResolve from './route/project-rduat-sigi-routing-resolve.service';
import { ASC } from 'app/config/navigation.constants';

const projectRduatSigiRoute: Routes = [
  {
    path: '',
    component: ProjectRduatSigiComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ProjectRduatSigiDetailComponent,
    resolve: {
      projectRduatSigi: ProjectRduatSigiResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default projectRduatSigiRoute;
