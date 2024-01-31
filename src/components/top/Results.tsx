import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import RiseLoader from "react-spinners/RiseLoader";
import { Button } from "react-bootstrap";
import { dateUntilDayJap } from "../../lib/dateFns";
import { Photo } from "../../ts/photo";
import { useIndexedDB } from "../../lib/idbkeyval/useIndexedDB";
import { isFavorite, AddToFavorites } from "../../utils/favoriteToggle";

const Results = ({ photos, loading }: { photos:Photo[], loading:boolean }) => {
  const [hopes, setHopes] = useIndexedDB();

  return (
    <>
      {loading && (
        <RiseLoader color={"#26d146"} size={25} margin={40} className="text-center" />
      )}

      {!loading && (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 580: 3, 800: 5, 1080: 6 }}>
          <Masonry columnsCount={3} gutter="10px">
            {photos.map((singleData: Photo, index: number) => (
              <div key={index}>
                <a href={singleData.link} target="_blank" key={index} rel="noreferrer">
                  <img src={singleData.url} alt={singleData.photographer} />
                </a>
                <p>
                  {index}:【{singleData.source}】
                  {singleData.created_at && dateUntilDayJap(singleData.created_at)}
                  <Button
                    variant={
                      isFavorite(hopes as Photo[], singleData)
                        ? "outline-secondary"
                        : "info"
                    }
                    size="sm"
                    className="mt-1"
                    onClick={(event) =>
                      setHopes(AddToFavorites(hopes as Photo[], event, singleData))
                    }
                  >
                    {isFavorite(hopes as Photo[], singleData) ? "解除" : "お気に入り"}
                  </Button>
                </p>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </>
  );
};

export default Results;
