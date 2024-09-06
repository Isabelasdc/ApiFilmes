import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Pagina(props) {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Fundamentos</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/fundamentos">Filmes</Nav.Link>
                        <Nav.Link href="/clientes">Séries</Nav.Link>
                        <Nav.Link href="/array">Atores</Nav.Link>
                        <Nav.Link href="/disney">Disney</Nav.Link>
                        <NavDropdown title="Disney" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/disney">Lista</NavDropdown.Item> 
                            <NavDropdown.Item href="/disney/cards">
                                Populares
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/disney/carrossel">
                                Em cartaz
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/disney/tabela">
                                Tabela
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

