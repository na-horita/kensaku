import { Button } from "react-bootstrap";
import { Frequent } from "../../ts/frequent";

type FrequentsListProps = {
  frequent: Frequent;
  handleClick: (word:string) => void;
}

function FrequentsList({ frequent, handleClick }: FrequentsListProps) {
  return (
    <Button
      variant="outline-success"
      size="lg"
      className="mb-2 mx-1"
      value={frequent.word}
      onClick={() => handleClick(frequent.word)}
    >
      {frequent.word}
    </Button>
  );
}

export default FrequentsList;
