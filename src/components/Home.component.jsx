import { Button, Card, CardTitle } from 'react-bootstrap';
import { useFetchAPI } from "../hooks/useFechtAPI";
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export const HomeComponent = () => {

    const [pageNumber, setPageNumber] = useState('');
    const [currentPage, setCurrentPage] = useState('')

    const { data, isLoading, hasError } = useFetchAPI(pageNumber);

    const onButtonClick = () => {
        setCurrentPage(pageNumber)
    }
    const handleInputChange = (event) => {
        setPageNumber(event.target.value)
    }

    if (isLoading) {
        return (
            <>
                <h2>Is loading</h2>
            </>
        )
    }

    if (hasError) {
        return (
            <>
                <h2>Hay un error</h2>
            </>
        )
    }
    return (
        <>
            <div style={{ margin: "20px" }}>
                <h1 style={{ margin: "20px", display: 'flex', justifyContent: 'center' }}> Personajes de Rick y Morty </h1>

                <InputGroup size="sm" className="mb-3" />
                    <InputGroup.Text id="inputGroup-sizing-sm">Ingresa la pagina del 1 al 20</InputGroup.Text>
                    <Form.Control  value= {pageNumber} onChange={handleInputChange} type="text"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px'
                    }}>
                        {data?.results?.map((c) => (
                            <Card key={c.id} style={{ width: "250px" }}>
                                <Card.Img variant="top" src={c.image} />
                                <Card.Body>
                                    <Card.Title>{c.name}</Card.Title>
                                    <Card.Text>{c.status}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
            </div>
        </>
    );
}
