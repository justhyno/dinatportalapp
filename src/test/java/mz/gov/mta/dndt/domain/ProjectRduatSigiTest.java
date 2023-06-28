package mz.gov.mta.dndt.domain;

import static org.assertj.core.api.Assertions.assertThat;

import mz.gov.mta.dndt.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ProjectRduatSigiTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ProjectRduatSigi.class);
        ProjectRduatSigi projectRduatSigi1 = new ProjectRduatSigi();
        projectRduatSigi1.setId(1L);
        ProjectRduatSigi projectRduatSigi2 = new ProjectRduatSigi();
        projectRduatSigi2.setId(projectRduatSigi1.getId());
        assertThat(projectRduatSigi1).isEqualTo(projectRduatSigi2);
        projectRduatSigi2.setId(2L);
        assertThat(projectRduatSigi1).isNotEqualTo(projectRduatSigi2);
        projectRduatSigi1.setId(null);
        assertThat(projectRduatSigi1).isNotEqualTo(projectRduatSigi2);
    }
}
