import { MouseEventHandler } from "react";
import { Button } from "react-bootstrap";
import { Frequent } from "../../ts/frequent";

type FrequentsListProps = {
  word: string;
  handleClick: (word: string) => MouseEventHandler<HTMLButtonElement>;
};

function FrequentsList({ word, handleClick }: FrequentsListProps) {
  return (
    <Button
      variant="outline-success"
      size="lg"
      className="mb-2 mx-1"
      value={word}
      onClick={handleClick(word)}
    >
      {word}
    </Button>
  );
}

export default FrequentsList;
