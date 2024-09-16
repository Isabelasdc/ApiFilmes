'use client'

import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiMovie from "@/app/services/apiMovies";
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";


export default function Page() {

    const [atores, setAtores] = useState([])

    useEffect(() => {
        apiMovie.get('person/popular').then(resultado => {
            setAtores(resultado.data.results)
        })
    }, [])

    return (
        <Pagina titulo="Atores Populares">

            <Row md={4}>
                {atores.map(item => (
                    <Col key={item.id} className="mt-3">
                        <Card>
                            <Card.Img height={280} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.original_name}</Card.Text>
                                <Card.Text>Popularidade: {item.popularity}</Card.Text>
                                <Link className="btn btn-danger" href={`/atores/${item.id}`}>
                                    Detalhes
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
           
        </Pagina>
    )
}
