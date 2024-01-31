import { Button, Form, Stack, Alert } from "react-bootstrap";
import useFrequentAddForm from "../../hooks/useFrequentAddForm";

const FrequentCreate = () => {
  const { showAlert, setShowAlert, handleSubmit, onSubmit, register, errors } = useFrequentAddForm();

  return (
    <>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          POSTを完了しました
        </Alert>
      )}

      <Form onSubmit={handleSubmit(onSubmit)} className="text-center">
        <Form.Group className="mb-3">
          <Form.Label>
            <span className="pe-2">Name</span>
          </Form.Label>
          <Form.Text className="text-muted text-center">
            入力者のお名前をご記入ください
          </Form.Text>
          <div className="d-flex justify-content-center">
            <Form.Control
              type="text"
              style={{ maxWidth: "300px", width: "100%", borderColor: "#999" }}
              {...register("name", {
                required: true,
                minLength: 1,
                pattern: /^[a-zA-Zぁ-んァ-ン一-龥々]+$/,
              })}
            />
          </div>
          {errors.name?.type === "required" && (
            <span className="text-danger">お名前は必須です。</span>
          )}
          {errors.name?.type === "minLength" && (
            <span className="text-danger">お名前は1文字以上で入力してください。</span>
          )}
          {errors.name?.type === "pattern" && (
            <span className="text-danger">
              お名前は英語または日本語で入力してください。
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="mx-auto">
            <span className="pe-2">Word</span>
          </Form.Label>
          <Form.Text className="text-muted">登録したいワードをご入力ください。</Form.Text>
          <div className="d-flex justify-content-center">
            <Form.Control
              type="text"
              style={{ maxWidth: "300px", width: "100%", borderColor: "#999" }}
              {...register("word", {
                required: true,
                minLength: 2,
                pattern: /^[a-zA-Z]+$/,
              })}
            />
          </div>
          {errors.word?.type === "required" && (
            <span className="text-danger">ワードは必須です。</span>
          )}
          {errors.word?.type === "minLength" && (
            <span className="text-danger">ワードは2文字以上で入力してください。</span>
          )}
          {errors.word?.type === "pattern" && (
            <span className="text-danger">ワードは英語で入力してください。</span>
          )}
        </Form.Group>

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="secondary" type="submit">
            追加する
          </Button>
        </Stack>
      </Form>
    </>
  );
};

export default FrequentCreate
