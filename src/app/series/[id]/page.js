'use client'

import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiMovie from "@/app/services/apiMovies";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";


export default function Page({params}) {

    const [series, setSeries] = useState({})
    const [temporadas, setTemporadas] = useState([])
    const [atores, setAtores] = useState([])


    useEffect(() => {
        apiMovie.get(`tv/${params.id}`).then(resultado => {
            setSeries(resultado.data)
        })
    }, [])

    useEffect(() => {
        apiMovie.get(`tv/${params.id}`).then(resultado => {
            setTemporadas(resultado.data.seasons)
        })
    }, [])

    useEffect(() => {
        apiMovie.get(`tv/${params.id}/credits`).then(resultado => {
            setAtores(resultado.data.cast)
        })
    }, [])


    return (
        <Pagina titulo={series.name}>
        {
            series.id &&
            <Row className="mt-3">
                <Col sm={4}>
                    <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + series.poster_path} />
                </Col>
                <Col sm={8}>
                    <p><b>Título original: </b>{series.original_name}</p>
                    <p><b>Popularidade: </b>{series.popularity}</p>
                    <p><b>Primeiro episódio ao AR : </b>{series.first_air_date}</p>
                    <p><b>Nota: </b>{series.vote_average}</p>
                    <p><b>Gêneros: </b>
                        {series.genres.map(item => item.name).join(', ')}
                    </p>
                    <p><b>Sinopse: </b>{series.overview}</p>
                </Col>
                <Col sm={12} className="mt-3">
                    <h1>Temporadas</h1>
                    <Row className="mt-3">
                        {temporadas.map(item => (
                            <Col
                                key={item.id}
                                title={item.name}
                                className="mb-3"
                                sm={2}
                            >
                                <Link href={`/tv/${item.id}/season`}>
                                    <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                                </Link>
                                <p>{item.name}</p>
                            </Col>
                        ))}
                    </Row>
                </Col>

                <Col sm={12}>
                    <h1>Atores</h1>
                    <Row>
                        {atores.map(item => (
                            <Col
                                key={item.id}
                                title={item.name}
                                className="mb-3"
                                sm={2}
                            >
                                <Link href={`/atores/${item.id}`}>
                                    <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                                </Link>
                                <p>{item.name}</p>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        }
    </Pagina>
    )
}
