import React, { useState, useEffect } from 'react';

const Frequent = ({setWord,searchImages}) => {

  const [frequents, setFrequents] = useState([]);

  const ccccc = async (e) => {
    e.preventDefault();
    let word = e.target.value;
    setWord(word);
    searchImages(word);
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
            <button key={frequent.id} type="submit" value={frequent.word} onClick={ccccc}>{frequent.word}</button>
        ))}
        </form>
    </div>
  );
};

export default Frequent;