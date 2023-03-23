import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import BeatLoader from "react-spinners/BeatLoader";

const Results = ({photos,loading}) => {

    return (

        <>
            {loading && <BeatLoader color={"#FFBB7A"} size={30} margin={4} />}

            {!loading &&
            <ResponsiveMasonry
             columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry columnsCount={3} gutter="10px">
                        {photos.map((singleData,index) =>
                            <a href={singleData.link} target="_blank" key={index}>
                                <img src={singleData.url} alt={singleData.photographer} />
                                <p>{index}:{singleData.source}:{singleData.created_at}</p>
                            </a>
                        )}
                </Masonry>
            </ResponsiveMasonry>
            }
        </>
    );
}

export default Results