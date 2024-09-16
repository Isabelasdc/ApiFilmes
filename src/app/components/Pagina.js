import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Pagina(props) {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Fundamentos</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Filmes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/filmes/popular">
                                Populares
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/filmes">
                                Em cartaz
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/filmes/toprated">
                                Melhor Avaliado
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/filmes/upcoming">
                                Em Breve
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Séries" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/series">
                                Populares
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/series/toprated">
                                Melhor Avaliada
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/series/ontheair">
                                No Ar
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/series/airingtoday">
                                No Ar Hoje 
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Atores" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/atores">Lista</NavDropdown.Item> 
                            <NavDropdown.Item href="/atores">
                                Populares
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>


            <Container>
                {props.children}
            </Container>
        </>

    )
}

