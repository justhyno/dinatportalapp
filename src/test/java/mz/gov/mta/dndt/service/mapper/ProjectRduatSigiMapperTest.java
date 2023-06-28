package mz.gov.mta.dndt.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ProjectRduatSigiMapperTest {

    private ProjectRduatSigiMapper projectRduatSigiMapper;

    @BeforeEach
    public void setUp() {
        projectRduatSigiMapper = new ProjectRduatSigiMapperImpl();
    }
}
