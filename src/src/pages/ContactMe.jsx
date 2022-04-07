import './ContactMe.less';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
function ContactMe(props) {
    return (
        <section id="contact">
            <Container>
                <div className="heading">
                    <h2 className="text-center">Contact Me</h2>
                </div>
                <Row className="justify-content-center ms-auto me-auto p-auto">
                    <Col sm={6} lg={4}>
                        <Card className="jsutify-content-center p-5 contact-card">
                            <Image
                                src="/img/self.png"
                                roundedCircle={true}
                                className="ms-auto me-auto"
                            ></Image>
                            <h3 className="text-center">Eli Richardson</h3>
                            <p className="title text-center">ME</p>
                            <p className="text-start desc">
                                Email:{' '}
                                <a href="mailto:eli@werichardson.com">eli@werichardson.com</a>
                                <br />
                                <br />
                                Otherwise, contact me through my instagram linked below.
                                <br />
                                <br />
                                <a href="https://www.instagram.com/eli.richardson/" target="_blank">
                                    @eli.richardson
                                </a>
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContactMe;
