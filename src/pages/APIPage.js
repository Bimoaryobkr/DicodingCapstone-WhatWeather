import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import openweather from '../assets/icons/OpenWeather.jpg';

function APIPage() {
    return (
        <section className="container pt-3">
            <div>
                <h1 className="text-center">API</h1>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Img className='mb-3' variant="top" src={openweather} />
                                <Card.Title className='text-center'>Open Weather API</Card.Title>
                                <Card.Text>
                                    OpenWeatherMap adalah sebuah API yang berisi data-data cuaca dari berbagai kota di
                                    seluruh penjuru dunia. API ini dapat mengecek cuaca saat ini, hingga melakukan prakiraan
                                    cuaca.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'>IP Geolocation API</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default APIPage;