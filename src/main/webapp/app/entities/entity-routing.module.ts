import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'project-rduat-sigi',
        data: { pageTitle: 'dinatportalApp.projectRduatSigi.home.title' },
        loadChildren: () => import('./project-rduat-sigi/project-rduat-sigi.routes'),
      },
      {
        path: 'project-rduat',
        data: { pageTitle: 'dinatportalApp.projectRduat.home.title' },
        loadChildren: () => import('./project-rduat/project-rduat.routes'),
      },
      {
        path: 'parcelas',
        data: { pageTitle: 'dinatportalApp.parcelas.home.title' },
        loadChildren: () => import('./parcelas/parcelas.routes'),
      },
      {
        path: 'submission',
        data: { pageTitle: 'dinatportalApp.submission.home.title' },
        loadChildren: () => import('./submission/submission.routes'),
      },
      {
        path: 'attachments',
        data: { pageTitle: 'dinatportalApp.attachments.home.title' },
        loadChildren: () => import('./attachments/attachments.routes'),
      },
      {
        path: 'agent',
        data: { pageTitle: 'dinatportalApp.agent.home.title' },
        loadChildren: () => import('./agent/agent.routes'),
      },
      {
        path: 'bug-report',
        data: { pageTitle: 'dinatportalApp.bugReport.home.title' },
        loadChildren: () => import('./bug-report/bug-report.routes'),
      },
      {
        path: 'bloco',
        data: { pageTitle: 'dinatportalApp.bloco.home.title' },
        loadChildren: () => import('./bloco/bloco.routes'),
      },
      {
        path: 'partition',
        data: { pageTitle: 'dinatportalApp.partition.home.title' },
        loadChildren: () => import('./partition/partition.routes'),
      },
      {
        path: 'parcela',
        data: { pageTitle: 'dinatportalApp.parcela.home.title' },
        loadChildren: () => import('./parcela/parcela.routes'),
      },
      {
        path: 'genero',
        data: { pageTitle: 'dinatportalApp.genero.home.title' },
        loadChildren: () => import('./genero/genero.routes'),
      },
      {
        path: 'tipo-acesso-terreno',
        data: { pageTitle: 'dinatportalApp.tipoAcessoTerreno.home.title' },
        loadChildren: () => import('./tipo-acesso-terreno/tipo-acesso-terreno.routes'),
      },
      {
        path: 'tipo-anexo',
        data: { pageTitle: 'dinatportalApp.tipoAnexo.home.title' },
        loadChildren: () => import('./tipo-anexo/tipo-anexo.routes'),
      },
      {
        path: 'estado-civil',
        data: { pageTitle: 'dinatportalApp.estadoCivil.home.title' },
        loadChildren: () => import('./estado-civil/estado-civil.routes'),
      },
      {
        path: 'tipo-finalidade',
        data: { pageTitle: 'dinatportalApp.tipoFinalidade.home.title' },
        loadChildren: () => import('./tipo-finalidade/tipo-finalidade.routes'),
      },
      {
        path: 'tipo-forma-aquisicao',
        data: { pageTitle: 'dinatportalApp.tipoFormaAquisicao.home.title' },
        loadChildren: () => import('./tipo-forma-aquisicao/tipo-forma-aquisicao.routes'),
      },
      {
        path: 'tipo-forma-uso',
        data: { pageTitle: 'dinatportalApp.tipoFormaUso.home.title' },
        loadChildren: () => import('./tipo-forma-uso/tipo-forma-uso.routes'),
      },
      {
        path: 'tipo-funcao',
        data: { pageTitle: 'dinatportalApp.tipoFuncao.home.title' },
        loadChildren: () => import('./tipo-funcao/tipo-funcao.routes'),
      },
      {
        path: 'tipo-relacao',
        data: { pageTitle: 'dinatportalApp.tipoRelacao.home.title' },
        loadChildren: () => import('./tipo-relacao/tipo-relacao.routes'),
      },
      {
        path: 'tipo-zona-exclusao',
        data: { pageTitle: 'dinatportalApp.tipoZonaExclusao.home.title' },
        loadChildren: () => import('./tipo-zona-exclusao/tipo-zona-exclusao.routes'),
      },
      {
        path: 'spatial-unit',
        data: { pageTitle: 'dinatportalApp.spatialUnit.home.title' },
        loadChildren: () => import('./spatial-unit/spatial-unit.routes'),
      },
      {
        path: 'spatial-unit-group',
        data: { pageTitle: 'dinatportalApp.spatialUnitGroup.home.title' },
        loadChildren: () => import('./spatial-unit-group/spatial-unit-group.routes'),
      },
      {
        path: 'tipo-normas',
        data: { pageTitle: 'dinatportalApp.tipoNormas.home.title' },
        loadChildren: () => import('./tipo-normas/tipo-normas.routes'),
      },
      {
        path: 'tipo-documento-identificacao',
        data: { pageTitle: 'dinatportalApp.tipoDocumentoIdentificacao.home.title' },
        loadChildren: () => import('./tipo-documento-identificacao/tipo-documento-identificacao.routes'),
      },
      {
        path: 'titular',
        data: { pageTitle: 'dinatportalApp.titular.home.title' },
        loadChildren: () => import('./titular/titular.routes'),
      },
      {
        path: 'token-provider',
        data: { pageTitle: 'dinatportalApp.tokenProvider.home.title' },
        loadChildren: () => import('./token-provider/token-provider.routes'),
      },
      {
        path: 'user-group',
        data: { pageTitle: 'dinatportalApp.userGroup.home.title' },
        loadChildren: () => import('./user-group/user-group.routes'),
      },
      {
        path: 'uploads',
        data: { pageTitle: 'dinatportalApp.uploads.home.title' },
        loadChildren: () => import('./uploads/uploads.routes'),
      },
      {
        path: 'coordenadas',
        data: { pageTitle: 'dinatportalApp.coordenadas.home.title' },
        loadChildren: () => import('./coordenadas/coordenadas.routes'),
      },
      {
        path: 'project-rduat-sigit',
        data: { pageTitle: 'dinatportalApp.projectRduatSigit.home.title' },
        loadChildren: () => import('./project-rduat-sigit/project-rduat-sigit.routes'),
      },
      {
        path: 'kobo-project',
        data: { pageTitle: 'dinatportalApp.koboProject.home.title' },
        loadChildren: () => import('./kobo-project/kobo-project.routes'),
      },
      {
        path: 'database-sync-logger',
        data: { pageTitle: 'dinatportalApp.databaseSyncLogger.home.title' },
        loadChildren: () => import('./database-sync-logger/database-sync-logger.routes'),
      },
      {
        path: 'validation',
        data: { pageTitle: 'dinatportalApp.validation.home.title' },
        loadChildren: () => import('./validation/validation.routes'),
      },
      {
        path: 'service-provider-sigit',
        data: { pageTitle: 'dinatportalApp.serviceProviderSigit.home.title' },
        loadChildren: () => import('./service-provider-sigit/service-provider-sigit.routes'),
      },
      {
        path: 'user-extra',
        data: { pageTitle: 'dinatportalApp.userExtra.home.title' },
        loadChildren: () => import('./user-extra/user-extra.routes'),
      },
      {
        path: 'user-group-type',
        data: { pageTitle: 'dinatportalApp.userGroupType.home.title' },
        loadChildren: () => import('./user-group-type/user-group-type.routes'),
      },
      {
        path: 'co-titular',
        data: { pageTitle: 'dinatportalApp.coTitular.home.title' },
        loadChildren: () => import('./co-titular/co-titular.routes'),
      },
      {
        path: 'sigit-submission',
        data: { pageTitle: 'dinatportalApp.sigitSubmission.home.title' },
        loadChildren: () => import('./sigit-submission/sigit-submission.routes'),
      },
      {
        path: 'status',
        data: { pageTitle: 'dinatportalApp.status.home.title' },
        loadChildren: () => import('./status/status.routes'),
      },
      {
        path: 'login-sigit',
        data: { pageTitle: 'dinatportalApp.loginSigit.home.title' },
        loadChildren: () => import('./login-sigit/login-sigit.routes'),
      },
      {
        path: 'submission-monitor',
        data: { pageTitle: 'dinatportalApp.submissionMonitor.home.title' },
        loadChildren: () => import('./submission-monitor/submission-monitor.routes'),
      },
      {
        path: 'monitor-submissao',
        data: { pageTitle: 'dinatportalApp.monitorSubmissao.home.title' },
        loadChildren: () => import('./monitor-submissao/monitor-submissao.routes'),
      },
      {
        path: 'validation-stats',
        data: { pageTitle: 'dinatportalApp.validationStats.home.title' },
        loadChildren: () => import('./validation-stats/validation-stats.routes'),
      },
      {
        path: 'geo-data',
        data: { pageTitle: 'dinatportalApp.geoData.home.title' },
        loadChildren: () => import('./geo-data/geo-data.routes'),
      },
      {
        path: 'geometry-data',
        data: { pageTitle: 'dinatportalApp.geometryData.home.title' },
        loadChildren: () => import('./geometry-data/geometry-data.routes'),
      },
      {
        path: 'spatial-reference-system',
        data: { pageTitle: 'dinatportalApp.spatialReferenceSystem.home.title' },
        loadChildren: () => import('./spatial-reference-system/spatial-reference-system.routes'),
      },
      {
        path: 'service-provider-group',
        data: { pageTitle: 'dinatportalApp.serviceProviderGroup.home.title' },
        loadChildren: () => import('./service-provider-group/service-provider-group.routes'),
      },
      {
        path: 'progress-monitor',
        data: { pageTitle: 'dinatportalApp.progressMonitor.home.title' },
        loadChildren: () => import('./progress-monitor/progress-monitor.routes'),
      },
      {
        path: 'data-error',
        data: { pageTitle: 'dinatportalApp.dataError.home.title' },
        loadChildren: () => import('./data-error/data-error.routes'),
      },
      {
        path: 'bloco-rduat',
        data: { pageTitle: 'dinatportalApp.blocoRduat.home.title' },
        loadChildren: () => import('./bloco-rduat/bloco-rduat.routes'),
      },
      {
        path: 'titulo-duat',
        data: { pageTitle: 'dinatportalApp.tituloDuat.home.title' },
        loadChildren: () => import('./titulo-duat/titulo-duat.routes'),
      },
      {
        path: 'report-submission',
        data: { pageTitle: 'dinatportalApp.reportSubmission.home.title' },
        loadChildren: () => import('./report-submission/report-submission.routes'),
      },
      {
        path: 'connections',
        data: { pageTitle: 'dinatportalApp.connections.home.title' },
        loadChildren: () => import('./connections/connections.routes'),
      },
      {
        path: 'file-info',
        data: { pageTitle: 'dinatportalApp.fileInfo.home.title' },
        loadChildren: () => import('./file-info/file-info.routes'),
      },
      {
        path: 'duat-report',
        data: { pageTitle: 'dinatportalApp.duatReport.home.title' },
        loadChildren: () => import('./duat-report/duat-report.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
