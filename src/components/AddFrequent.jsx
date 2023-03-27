import { useState, useEffect } from "react";
import { Button, Form, Stack, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";

function AddFrequent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [name, setName] = useState("");
  const [word, setWord] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // 3秒後にアラートを非表示にする
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    // アンマウント時にクリア
    return () => clearTimeout(timeout);
  }, [showAlert]);

  const onSubmit = (data) => {
    const newFrequent = { name: data.name, word: data.word };

    fetch("http://localhost:3000/frequents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFrequent),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setName("");
        setWord("");
        document.getElementById("inp_name").value = "";
        document.getElementById("inp_word").value = "";
        setShowAlert(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          POSTを完了しました
        </Alert>
      )}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>
            <span className="pe-2">Name</span>
          </Form.Label>
          <Form.Text className="text-muted">お名前をご記入ください。</Form.Text>
          <Form.Control
            type="text"
            id="inp_name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            {...register("name", {
              required: true,
              minLength: 1,
              pattern: /^[a-zA-Zぁ-んァ-ン一-龥々]+$/,
            })}
          />
          {errors.name?.type === "required" && (
            <span className="text-danger">お名前は必須です。</span>
          )}
          {errors.name?.type === "minLength" && (
            <span className="text-danger">
              お名前は1文字以上で入力してください。
            </span>
          )}
          {errors.name?.type === "pattern" && (
            <span className="text-danger">
              お名前は英語または日本語で入力してください。
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <span className="pe-2">Word</span>
          </Form.Label>
          <Form.Text className="text-muted">
            登録したいワードをご入力ください。
          </Form.Text>
          <Form.Control
            type="text"
            id="inp_word"
            defaultValue={word}
            onChange={(e) => setWord(e.target.value)}
            {...register("word", {
              required: true,
              minLength: 2,
              pattern: /^[a-zA-Z]+$/,
            })}
          />
          {errors.word?.type === "required" && (
            <span className="text-danger">ワードは必須です。</span>
          )}
          {errors.word?.type === "minLength" && (
            <span className="text-danger">
              ワードは2文字以上で入力してください。
            </span>
          )}
          {errors.word?.type === "pattern" && (
            <span className="text-danger">
              ワードは英語で入力してください。
            </span>
          )}
        </Form.Group>

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="secondary" type="submit">
            追加する
          </Button>
        </Stack>
      </Form>
    </div>
  );
}

export default AddFrequent;
