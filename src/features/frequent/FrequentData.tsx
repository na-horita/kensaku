import { useState, useEffect } from "react";
import FrequentCard from "../../components/frequent/FrequentCard";
import { Frequent } from "../../ts/frequent";

const FrequentData = (props: any) => {
  const [frequents, setFrequents] = useState<Frequent[]>([]);

  const getFrequentData = async (e: any) => {
    e.preventDefault();
    const word = e.target.value;
    props.setLoading(true);
    props.setWord(word);
    await props.searchImages(word);
    props.setLoading(false);
  };

  const fetchFrequentsData = async () => {
    const response = await fetch("https://kensaku-express.vercel.app/api/frequent");
    if (!response.ok) throw new Error();
    return response.json();
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const allFrequents = await fetchFrequentsData();
        setFrequents(allFrequents);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <FrequentCard frequents={frequents} getFrequentData={getFrequentData} />
    </>
  );
};

export default FrequentData;
