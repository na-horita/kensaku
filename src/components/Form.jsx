const Form = ({setWord,word,getPhotoData}) => {
    return(
        <form>
            <input
            type="text"
            name="keyword"
            placeholder="e.g. cat"
            onChange={e => setWord(e.target.value)}
            value={word}
            />
            <button type="submit" onClick={getPhotoData}>Search</button>
        </form>
    );
}

export default Form;