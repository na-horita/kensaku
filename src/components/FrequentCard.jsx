const Frequent = (props) => {
  return (
    <div>
      <h3>良く検索される一覧</h3>
      <form>
        {props.frequents.map((frequent) => (
          <button
            key={frequent.id}
            type="submit"
            value={frequent.word}
            onClick={props.getFrequentData}
            style={{ margin: "0 5px" }}
          >
            {frequent.word}
          </button>
        ))}
      </form>
    </div>
  );
};

export default Frequent;
