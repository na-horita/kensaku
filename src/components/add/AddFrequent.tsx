import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Frequent } from "../../ts/frequent";
import { createFrequent } from "../../api/frequent/createFrequent";
import FrequentCreate from "../frequent/FrequentCreate";
import { useRecoilState } from "recoil";
import { frequentsAtom } from "../../recoil/atoms/frequentsAtom";

function AddFrequent() {
    const [frequents, setFrequents] = useRecoilState(frequentsAtom);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<Frequent, "id">>();
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    // 3秒後にアラートを非表示にする
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    // アンマウント時にクリア
    return () => clearTimeout(timeout);
  }, [showAlert]);

  const onSubmit: SubmitHandler<Omit<Frequent, "id">> = async(data) => {
    const newFrequent = { name: data.name, word: data.word };

    const newTodo = await createFrequent(newFrequent);
    if (newTodo) {
      reset();
      setShowAlert(true);
      setFrequents([...frequents, newTodo]);
    }
  };

  return (
    <>
      <FrequentCreate
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
      />
    </>
  );
}

export default AddFrequent;
