import { Button, Card, CardTitle } from 'react-bootstrap';
import { useFetchAPI } from "../hooks/useFechtAPI";

export const HomeComponent = () => {

    const { data, isLoading, hasError } = useFetchAPI('');

    if(isLoading){
        return (
            <>
            <h2>Is loading</h2>
            </>
        )
    }

    if(hasError){
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
                                {/* <Button variant="primary"></Button> */}
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}
