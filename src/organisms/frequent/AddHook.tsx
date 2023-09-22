import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Frequent } from "../../ts/frequent";
import { createFrequent } from "../../api/frequent/createFrequent";
import FrequentCreate from "../../components/frequent/FrequentCreate";

function AddFrequent() {
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

  const onSubmit: SubmitHandler<Omit<Frequent, "id">> = (data) => {
    const newFrequent = { name: data.name, word: data.word };

    createFrequent(newFrequent)
      .then(() => {
        reset();
        setShowAlert(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
