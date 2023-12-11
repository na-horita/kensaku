import React from "react";
import Button from "react-bootstrap/Button";
import { useIndexedDB } from "../../features/useIndexedDB";

const FavoriteAllDelete = () => {
  const [, setHopes] = useIndexedDB();
  return (
    <div className="my-4">
      <Button variant="danger" onClick={() => setHopes(null)}>
        お気に入り全削除
      </Button>
    </div>
  );
};

export default FavoriteAllDelete;
