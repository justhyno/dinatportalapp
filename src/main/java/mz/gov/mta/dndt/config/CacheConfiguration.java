package mz.gov.mta.dndt.config;

import java.time.Duration;
import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.boot.info.BuildProperties;
import org.springframework.boot.info.GitProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.serviceregistry.Registration;
import org.springframework.context.annotation.*;
import tech.jhipster.config.JHipsterProperties;
import tech.jhipster.config.cache.PrefixedKeyGenerator;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private GitProperties gitProperties;
    private BuildProperties buildProperties;
    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache = jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration =
            Eh107Configuration.fromEhcacheCacheConfiguration(
                CacheConfigurationBuilder
                    .newCacheConfigurationBuilder(Object.class, Object.class, ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                    .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                    .build()
            );
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            createCache(cm, mz.gov.mta.dndt.repository.UserRepository.USERS_BY_LOGIN_CACHE);
            createCache(cm, mz.gov.mta.dndt.repository.UserRepository.USERS_BY_EMAIL_CACHE);
            createCache(cm, mz.gov.mta.dndt.domain.ProjectRduatSigi.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.ProjectRduatSigi.class.getName() + ".userGroups");
            createCache(cm, mz.gov.mta.dndt.domain.ProjectRduat.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Parcelas.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Submission.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Attachments.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Agent.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.BugReport.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Bloco.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Partition.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Parcela.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Genero.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.TipoAcessoTerreno.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.TipoAnexo.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.EstadoCivil.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.TipoFinalidade.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.TipoFormaAquisicao.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.TipoFormaUso.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.TipoFuncao.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.TipoRelacao.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.TipoZonaExclusao.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.SpatialUnit.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.SpatialUnitGroup.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.TipoNormas.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.TipoDocumentoIdentificacao.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Titular.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.TokenProvider.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.UserGroup.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.UserGroup.class.getName() + ".projectRduats");
            createCache(cm, mz.gov.mta.dndt.domain.Uploads.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Coordenadas.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.ProjectRduatSigit.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.KoboProject.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.DatabaseSyncLogger.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Validation.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.ServiceProviderSigit.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.UserExtra.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.UserGroupType.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.CoTitular.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.SigitSubmission.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Status.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.LoginSigit.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.SubmissionMonitor.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.MonitorSubmissao.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.ValidationStats.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.GeoData.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.GeometryData.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.SpatialReferenceSystem.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.ServiceProviderGroup.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.ProgressMonitor.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.DataError.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.BlocoRduat.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.TituloDuat.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.ReportSubmission.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.Connections.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.FileInfo.class.getName());
            createCache(cm, mz.gov.mta.dndt.domain.DuatReport.class.getName());
            // jhipster-needle-ehcache-add-entry
        };
    }

    private void createCache(javax.cache.CacheManager cm, String cacheName) {
        javax.cache.Cache<Object, Object> cache = cm.getCache(cacheName);
        if (cache != null) {
            cache.clear();
        } else {
            cm.createCache(cacheName, jcacheConfiguration);
        }
    }

    @Autowired(required = false)
    public void setGitProperties(GitProperties gitProperties) {
        this.gitProperties = gitProperties;
    }

    @Autowired(required = false)
    public void setBuildProperties(BuildProperties buildProperties) {
        this.buildProperties = buildProperties;
    }

    @Bean
    public KeyGenerator keyGenerator() {
        return new PrefixedKeyGenerator(this.gitProperties, this.buildProperties);
    }
}
