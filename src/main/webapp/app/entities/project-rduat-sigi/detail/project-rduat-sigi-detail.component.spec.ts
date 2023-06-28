import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ProjectRduatSigiDetailComponent } from './project-rduat-sigi-detail.component';

describe('ProjectRduatSigi Management Detail Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectRduatSigiDetailComponent, RouterTestingModule.withRoutes([], { bindToComponentInputs: true })],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: ProjectRduatSigiDetailComponent,
              resolve: { projectRduatSigi: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding()
        ),
      ],
    })
      .overrideTemplate(ProjectRduatSigiDetailComponent, '')
      .compileComponents();
  });

  describe('OnInit', () => {
    it('Should load projectRduatSigi on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', ProjectRduatSigiDetailComponent);

      // THEN
      expect(instance.projectRduatSigi).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
