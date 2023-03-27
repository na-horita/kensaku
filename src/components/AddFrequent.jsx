import React, { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";

function AddFrequent() {
  const [name, setName] = useState("");
  const [word, setWord] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newFrequent = { name, word };

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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>
            <span className="pe-2">Name</span>
          </Form.Label>
          <Form.Text className="text-muted">お名前をご記入ください。</Form.Text>
          <Form.Control
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            id="word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
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
