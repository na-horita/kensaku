import { Button } from "react-bootstrap";

function FrequentsList({ frequent,handleClick}) {
  return (
    <Button
      variant="outline-dark"
      className="mx-1 mb-1"
      style={{ cursor: "pointer" }}
      onClick={() => handleClick(frequent.word)}
    >
      {frequent.word}
    </Button>
  );
}

export default FrequentsList;
