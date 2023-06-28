import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { IProjectRduatSigi } from '../project-rduat-sigi.model';

@Component({
  standalone: true,
  selector: 'jhi-project-rduat-sigi-detail',
  templateUrl: './project-rduat-sigi-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class ProjectRduatSigiDetailComponent {
  @Input() projectRduatSigi: IProjectRduatSigi | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  previousState(): void {
    window.history.back();
  }
}
