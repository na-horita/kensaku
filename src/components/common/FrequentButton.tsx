import { Button } from "react-bootstrap";

type FrequentsButtonProps = {
  word: string;
  getPhotosbyFrequent: any;
};

const FrequentButton = ({ word, getPhotosbyFrequent }: FrequentsButtonProps) => {
  return (
    <Button
      variant="outline-success"
      size="lg"
      className="mb-2 mx-1"
      value={word}
      onClick={() => getPhotosbyFrequent(word)}
    >
      {word}
    </Button>
  );
};

export default FrequentButton;
