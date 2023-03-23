import React, { useState, useEffect } from 'react';

const Frequent = (props) => {

  const [frequents, setFrequents] = useState([]);

  const ccccc = async (e) => {
    e.preventDefault();
    let word = e.target.value;
    props.setLoading(true);
    props.setWord(word);
    await props.searchImages(word);
    props.setLoading(false);
  };

  useEffect(() => {
    fetch('http://localhost:3001/frequents')
      .then((response) => response.json())
      .then((data) => setFrequents(data));
  }, []);

  return (
    <div>
      <h3>良く検索される一覧</h3>
        <form>
        {frequents.map((frequent) => (
            <button key={frequent.id} type="submit" value={frequent.word} onClick={ccccc} style={{margin: "0 5px"}}>{frequent.word}</button>
        ))}
        </form>
    </div>
  );
};

export default Frequent;