const Results = ({photos}) => {
    return (
        <div className="photo-list">
            {photos.map((singleData) =>
                <a href={singleData.link} target="_blank">
                    <img src={singleData.url} alt={singleData.photographer} />
                    <p>{singleData.source}:{singleData.created_at}</p>
                </a>
            )}
        </div>
    );
}

export default Results