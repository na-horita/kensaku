import { useState, useEffect } from "react";
import FrequentCard from "../../components/frequent/FrequentCard";

type Frequent = {
  id: number;
  name: string;
  word: string;
}

const Frequent = (props:any) => {
  const [frequents, setFrequents] = useState<Frequent[]>([]);

  const getFrequentData = async (e:any) => {
    e.preventDefault();
    const word = e.target.value;
    props.setLoading(true);
    props.setWord(word);
    await props.searchImages(word);
    props.setLoading(false);
  };

  useEffect(() => {
    fetch("https://kensaku-express.vercel.app/api/frequent")
      .then((response) => response.json())
      .then((data) => setFrequents(data));
  }, []);

  return (
    <>
      <FrequentCard frequents={frequents} getFrequentData={getFrequentData} />
    </>
  );
};

export default Frequent;
