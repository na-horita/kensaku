const Form = ({setWord}) => {
    return(
        <form>
            <input 
            type="text" 
            name="keyword" 
            placeholder="e.g. cat" 
            onChange={e => setWord(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
}
 
export default Form;