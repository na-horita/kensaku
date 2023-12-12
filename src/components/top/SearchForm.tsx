import { Button } from "react-bootstrap";
const SearchForm = (props:any) => {
  return (
    <div className="mt-3 mb-4 text-center">
      <form>
        <input
          type="text"
          name="keyword"
          placeholder="cat"
          onChange={(e) => props.setWord(e.target.value)}
          value={props.word}
          className="border-3 text-2xl px-2 py-1 w-8/12 md:w-auto"
        />
        <Button
          variant="primary"
          size="lg"
          type="submit"
          onClick={props.getPhotoData}
          className="-mt-2 md:-mt-3 ml-1"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
