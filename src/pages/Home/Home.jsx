import React from 'react';
import styles from './Home.module.css';
import stylesButton from '../../components/Button/Button.module.css';
import CustomNavbar from '../../components/Navbar/CustomNavbar';
import CustomButton from '../../components/Button/CustomButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <>
            <CustomNavbar />
            <Container fluid className={styles.home}>
                <Row className={styles.homeWrapper}>
                    <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                        <div className={`${styles.introWrapper} ${styles.name}`}>Hi, I'm Ali Calanda</div>
                        <div className={`${styles.introWrapper} mb-2`}>Programmer, Developer</div>
                        <div className={styles.introWrapper}>
                            <CustomButton className={stylesButton.buttonHire}>Hire Me</CustomButton>
                            <CustomButton className={stylesButton.buttonDownload}>Download CV</CustomButton>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={6} className={`d-none d-md-block ${styles.name}`}></Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
