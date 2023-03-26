
import { useState,useEffect } from "react";
import { get, set } from 'idb-keyval';

function Favorite() {
    const [hopes, setHopes] = useState([]);

  useEffect(() => {
    get('hopes').then((result) => {
      if (result !== undefined) {
        setHopes(result);
      }
    });
  }, []);

  return (
    <div>
      <h1>My Favorite Images</h1>
      <ul>
        {hopes.map((hope) => (
          <li key={hope.id}>
            <img src={hope.url} alt={hope.title} />
            <p>{hope.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorite;
