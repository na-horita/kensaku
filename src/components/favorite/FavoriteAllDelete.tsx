import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useIndexedDB } from "../../lib/idbkeyval/useIndexedDB";

const FavoriteAllDelete = () => {
    const [, setHopes] = useIndexedDB();
    const navigate = useNavigate();

  const handleDeleteAllFavorites = () => {
    setHopes(null);
    navigate("/");
  };

  return (
    <div className="my-4">
      <Button variant="danger" onClick={handleDeleteAllFavorites}>
        お気に入り全削除
      </Button>
    </div>
  );
};

export default FavoriteAllDelete;
