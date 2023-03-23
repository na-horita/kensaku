import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import RiseLoader from "react-spinners/RiseLoader";

const Results = ({photos,loading}) => {

    return (

        <>
            {loading && <RiseLoader color={"#26d146"} size={25} margin={40} />}

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