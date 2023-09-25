import { Button } from "react-bootstrap";

type FrequentsButtonProps = {
  word: string;
  getFrequentData: Function;
};

const FrequentButton = ({ word, getFrequentData }: FrequentsButtonProps) => {
  return (
    <Button
      variant="outline-success"
      size="lg"
      className="mb-2 mx-1"
      value={word}
      onClick={() => getFrequentData(word)}
    >
      {word}
    </Button>
  );
};

export default FrequentButton;
