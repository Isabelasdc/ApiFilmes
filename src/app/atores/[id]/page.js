'use client'

import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import apiMovie from "@/app/services/apiMovies";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";


export default function Page({params}) {

    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])
=======
import { Col, Row, Button } from "react-bootstrap";
import { useRouter } from 'next/navigation'; // Importar useRouter
import Link from "next/link";
>>>>>>> 159cea7344e9921ea6aef0eae48eef90688c82bf


    useEffect(() => {
        apiMovie.get(`person/${params.id}`).then(resultado => {
            setAtor(resultado.data)
        })
    }, [])

    useEffect(() => {
        apiMovie.get(`person/${params.id}/movie_credits`).then(resultado => {
            setFilmes(resultado.data.cast)

        })
    }, [])


    return (
        <Pagina titulo={ator.name}>
<<<<<<< HEAD
        {
            ator.id &&
            <Row className="mt-3">
                <Col sm={4}>
                    <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                </Col>
                <Col sm={8}>
=======
            <Row className="mt-4">
                <Col md={4}>
                    <img src={`https://image.tmdb.org/t/p/w500/${ator.profile_path}`} alt={ator.name} className="img-fluid" />
                </Col>
                <Col>
>>>>>>> 159cea7344e9921ea6aef0eae48eef90688c82bf
                    <p><b>Data de Nascimento: </b>{ator.birthday}</p>
                    <p><b>Popularidade: </b>{ator.popularity}</p>
                    <p><b>Local de Nascimento:</b> {ator.place_of_birth}</p>
                    <p><b>Biografia: </b>{ator.biography}</p>
                </Col>
                <Col sm={12}>
                    <h1>Filmes</h1>
                    <Row>
                        {filmes.map(item => (
                            <Col
                                key={item.id}
                                title={item.name}
                                className="mb-3"
                                sm={2}
                            >
                                <Link href={`/filmes/${item.id}`}>
                                    <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                                </Link>
                                <p>{filmes.name}</p>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
<<<<<<< HEAD
        }
    </Pagina>
    )
=======

            <h2>Filmes</h2>
            <Row>
                {filmes.map(filme => (
                    <Col md={2} key={filme.id} className="my-2">
                        <Link href={`/filmes/${filme.id}`}>
                        <img
                            src={"https://image.tmdb.org/t/p/w200/" + filme.poster_path}
                            alt={filme.title}
                            className="img-fluid"
                        />
                        </Link>
                        <p>{filme.title}</p>
                    </Col>
                ))}
            </Row>
        </Pagina>
    );
>>>>>>> 159cea7344e9921ea6aef0eae48eef90688c82bf
}
