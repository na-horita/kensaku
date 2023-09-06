import { Button } from "react-bootstrap";

const FrequentButton = ({ frequent, getFrequentData }: any) => {
  return (
    <Button
      variant="outline-success"
      size="lg"
      className="mb-2 mx-1"
      value={frequent.word}
      onClick={getFrequentData}
    >
      {frequent.word}
    </Button>
  );
};

export default FrequentButton;
