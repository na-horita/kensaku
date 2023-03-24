const Form = (props) => {
  return (
    <form>
      <input
        type="text"
        name="keyword"
        placeholder="e.g. cat"
        onChange={(e) => props.setWord(e.target.value)}
        value={props.word}
      />
      <button type="submit" onClick={props.getPhotoData}>
        Search
      </button>
    </form>
  );
};

export default Form;
