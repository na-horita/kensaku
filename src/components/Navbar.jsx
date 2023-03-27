import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navb() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <h1 className="h3">画像検索アプリ</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              ホーム
            </Link>
            <Link className="nav-link" to="/favorite">
              お気に入り
            </Link>
            <Link className="nav-link" to="/sus">
              suspense練習
            </Link>
            <Link className="nav-link" to="/contact">
              ワード追加
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
