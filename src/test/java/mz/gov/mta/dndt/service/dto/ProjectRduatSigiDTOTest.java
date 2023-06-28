package mz.gov.mta.dndt.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import mz.gov.mta.dndt.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ProjectRduatSigiDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(ProjectRduatSigiDTO.class);
        ProjectRduatSigiDTO projectRduatSigiDTO1 = new ProjectRduatSigiDTO();
        projectRduatSigiDTO1.setId(1L);
        ProjectRduatSigiDTO projectRduatSigiDTO2 = new ProjectRduatSigiDTO();
        assertThat(projectRduatSigiDTO1).isNotEqualTo(projectRduatSigiDTO2);
        projectRduatSigiDTO2.setId(projectRduatSigiDTO1.getId());
        assertThat(projectRduatSigiDTO1).isEqualTo(projectRduatSigiDTO2);
        projectRduatSigiDTO2.setId(2L);
        assertThat(projectRduatSigiDTO1).isNotEqualTo(projectRduatSigiDTO2);
        projectRduatSigiDTO1.setId(null);
        assertThat(projectRduatSigiDTO1).isNotEqualTo(projectRduatSigiDTO2);
    }
}
