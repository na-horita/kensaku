import { useState, useEffect } from "react";
import FrequentButton from "../../components/frequent/FrequentButton";
import { Frequent } from "../../ts/frequent";
import { getFrequents } from "../../api/frequent/getFrequents";

const FrequentData = (props: any) => {
  const [frequents, setFrequents] = useState<Frequent[]>([]);

  const getFrequentData = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const word = e.currentTarget.value;
    props.setLoading(true);
    props.setWord(word);
    await props.searchImages(word);
    props.setLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const allFrequents = await getFrequents();
        setFrequents(allFrequents);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {frequents.map((frequent: any) => (
        <FrequentButton
          key={frequent.id}
          frequent={frequent}
          getFrequentData={getFrequentData}
        />
      ))}
    </>
  );
};

export default FrequentData;
