import Button from "react-bootstrap/Button";
import { useIndexedDB } from "../../lib/idbkeyval/useIndexedDB";

const FavoriteAllDelete = () => {
    const [, , handleDeleteAll] = useIndexedDB();

  return (
    <div className="my-4">
      <Button variant="danger" onClick={handleDeleteAll}>
        お気に入り全削除
      </Button>
    </div>
  );
};

export default FavoriteAllDelete;
