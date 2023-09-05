import { Button } from "react-bootstrap";
const Form = (props:any) => {
  return (
    <div className="mt-3">
      <form>
        <input
          type="text"
          name="keyword"
          placeholder="e.g. cat"
          onChange={(e) => props.setWord(e.target.value)}
          value={props.word}
          className="border-3 text-2xl px-2 py-1"
        />
        <Button
          variant="primary"
          size="lg"
          type="submit"
          onClick={props.getPhotoData}
          className="-mt-2 ml-1"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Form;
