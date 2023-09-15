import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navb() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <h1 className="text-base md:text-3xl">画像検索アプリ</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              ホーム
            </Link>
            <Link className="nav-link" to="/explain">
              使い方
            </Link>
            <Link className="nav-link" to="/favorite">
              お気に入り
            </Link>
            {/* <Link className="nav-link" to="/sus">
              suspense練習
            </Link> */}
            <Link className="nav-link" to="/add">
              ワード追加
            </Link>
            {/* <Link className="nav-link" to="/scrape">
              楽天検索
            </Link> */}
            <Link className="nav-link" to="/tdd">
              テスト開発
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
