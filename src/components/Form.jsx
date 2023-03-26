import { Button } from "react-bootstrap";
const Form = (props) => {
  return (
    <div className="mt-3">
      <form>
        <input
          type="text"
          name="keyword"
          placeholder="e.g. cat"
          onChange={(e) => props.setWord(e.target.value)}
          value={props.word}
        />
        <Button
          variant="primary"
          size="md"
          type="submit"
          onClick={props.getPhotoData}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Form;
