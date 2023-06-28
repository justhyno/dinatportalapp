import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DATE_FORMAT } from 'app/config/input.constants';
import { IProjectRduatSigi } from '../project-rduat-sigi.model';
import { sampleWithRequiredData, sampleWithNewData, sampleWithPartialData, sampleWithFullData } from '../project-rduat-sigi.test-samples';

import { ProjectRduatSigiService, RestProjectRduatSigi } from './project-rduat-sigi.service';

const requireRestSample: RestProjectRduatSigi = {
  ...sampleWithRequiredData,
  dataInicio: sampleWithRequiredData.dataInicio?.format(DATE_FORMAT),
  dataFimPrevisao: sampleWithRequiredData.dataFimPrevisao?.format(DATE_FORMAT),
  dataFim: sampleWithRequiredData.dataFim?.format(DATE_FORMAT),
  dataPrevisaoInicio: sampleWithRequiredData.dataPrevisaoInicio?.format(DATE_FORMAT),
};

describe('ProjectRduatSigi Service', () => {
  let service: ProjectRduatSigiService;
  let httpMock: HttpTestingController;
  let expectedResult: IProjectRduatSigi | IProjectRduatSigi[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(ProjectRduatSigiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of ProjectRduatSigi', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    describe('addProjectRduatSigiToCollectionIfMissing', () => {
      it('should add a ProjectRduatSigi to an empty array', () => {
        const projectRduatSigi: IProjectRduatSigi = sampleWithRequiredData;
        expectedResult = service.addProjectRduatSigiToCollectionIfMissing([], projectRduatSigi);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(projectRduatSigi);
      });

      it('should not add a ProjectRduatSigi to an array that contains it', () => {
        const projectRduatSigi: IProjectRduatSigi = sampleWithRequiredData;
        const projectRduatSigiCollection: IProjectRduatSigi[] = [
          {
            ...projectRduatSigi,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addProjectRduatSigiToCollectionIfMissing(projectRduatSigiCollection, projectRduatSigi);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a ProjectRduatSigi to an array that doesn't contain it", () => {
        const projectRduatSigi: IProjectRduatSigi = sampleWithRequiredData;
        const projectRduatSigiCollection: IProjectRduatSigi[] = [sampleWithPartialData];
        expectedResult = service.addProjectRduatSigiToCollectionIfMissing(projectRduatSigiCollection, projectRduatSigi);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(projectRduatSigi);
      });

      it('should add only unique ProjectRduatSigi to an array', () => {
        const projectRduatSigiArray: IProjectRduatSigi[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const projectRduatSigiCollection: IProjectRduatSigi[] = [sampleWithRequiredData];
        expectedResult = service.addProjectRduatSigiToCollectionIfMissing(projectRduatSigiCollection, ...projectRduatSigiArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const projectRduatSigi: IProjectRduatSigi = sampleWithRequiredData;
        const projectRduatSigi2: IProjectRduatSigi = sampleWithPartialData;
        expectedResult = service.addProjectRduatSigiToCollectionIfMissing([], projectRduatSigi, projectRduatSigi2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(projectRduatSigi);
        expect(expectedResult).toContain(projectRduatSigi2);
      });

      it('should accept null and undefined values', () => {
        const projectRduatSigi: IProjectRduatSigi = sampleWithRequiredData;
        expectedResult = service.addProjectRduatSigiToCollectionIfMissing([], null, projectRduatSigi, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(projectRduatSigi);
      });

      it('should return initial array if no ProjectRduatSigi is added', () => {
        const projectRduatSigiCollection: IProjectRduatSigi[] = [sampleWithRequiredData];
        expectedResult = service.addProjectRduatSigiToCollectionIfMissing(projectRduatSigiCollection, undefined, null);
        expect(expectedResult).toEqual(projectRduatSigiCollection);
      });
    });

    describe('compareProjectRduatSigi', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareProjectRduatSigi(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareProjectRduatSigi(entity1, entity2);
        const compareResult2 = service.compareProjectRduatSigi(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareProjectRduatSigi(entity1, entity2);
        const compareResult2 = service.compareProjectRduatSigi(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareProjectRduatSigi(entity1, entity2);
        const compareResult2 = service.compareProjectRduatSigi(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
