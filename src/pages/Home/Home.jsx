import React from 'react';
import styles from './Home.module.css';
import CustomNavbar from '../../components/Navbar/CustomNavbar';
import CustomButton from '../../components/Button/CustomButton';

const Home = () => {
    return (
        <>
            <CustomNavbar />
            <div className={styles.home}>
                <div className={styles.name}>Hi, I'm Ali Calanda</div>
                <div>
                    <CustomButton className={styles.buttonHire}>Hire Me</CustomButton>
                    <CustomButton className={styles.buttonDownload}>Download CV</CustomButton>
                </div>
            </div>
        </>
    );
};

export default Home;
