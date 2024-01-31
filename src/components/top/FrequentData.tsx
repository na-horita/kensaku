import { useEffect } from "react";
import FrequentButton from "../common/FrequentButton";
import { Frequent } from "../../ts/frequent";
import { getFrequents } from "../../api/frequent/getFrequents";
import { useRecoilState } from "recoil";
import { frequentsAtom } from "../../recoil/atoms/frequentsAtom";

const FrequentData = (props: any) => {
  const [frequents,setFrequents] = useRecoilState(frequentsAtom);
  const getFrequentData = async (word:string) => {
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
  }, [setFrequents]);

  return (
    <>
      {frequents.map((frequent: Frequent) => (
        <FrequentButton
          key={frequent.id}
          word={frequent.word}
          getPhotosbyFrequent={getFrequentData}
        />
      ))}
    </>
  );
};

export default FrequentData;
