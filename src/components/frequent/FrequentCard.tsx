import { Button } from "react-bootstrap";

const FrequentCard = ({ frequents, getFrequentData }: any) => {
  return (
    <div>
      <h3>良く検索される一覧</h3>
      <form>
        {frequents.map((frequent: any, index: any) => (
          <Button
            variant="outline-success"
            size="lg"
            key={index}
            type="submit"
            value={frequent.word}
            onClick={getFrequentData}
            className="mb-2 mx-1"
          >
            {frequent.word}
          </Button>
        ))}
      </form>
    </div>
  );
};

export default FrequentCard;
