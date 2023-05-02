import React from 'react';
import styles from './../../../styles/Style.module.css';
import { Container , Row} from 'react-bootstrap';


const SalesSwipper = () => {
    return (
        <div>
            {/* <!-- sales swipper --> */}
            <Container fluid>
                <Row className="d-flex justify-content-center align-items-center ">
                    <div className={styles.salesSwipper}></div>
                </Row>
            </Container>
            {/* <!-- sales swipper --> */}
        </div>
    );
};

export default SalesSwipper;