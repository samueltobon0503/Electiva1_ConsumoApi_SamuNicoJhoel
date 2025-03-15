import { Button, Card, CardBody, CardTitle } from 'react-bootstrap'

export const HomeComponent = () => {

    return (
        <>
            <div style={{ margin: "20px" }}>
                <h1> Personajes de Rick y Morty </h1>
                <div style={{display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' />
                        <CardBody>
                            <CardTitle> Morty </CardTitle>
                            <Card.Text>
                                Aqui va la definicion del personaje
                            </Card.Text>
                            <Button variant='primary' > boton </Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
}
