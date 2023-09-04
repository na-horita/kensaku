import { Button } from "react-bootstrap";
import { Frequent } from "../ts/frequent";

type FrequentsListProps = {
  frequent: Frequent;
  handleClick: (word:string) => void;
}

function FrequentsList({ frequent, handleClick }: FrequentsListProps) {
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
