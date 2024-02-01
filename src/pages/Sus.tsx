import React, { Suspense, useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const fetchProfileData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

function ProfilePage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchProfileData().then(setData);
  }, []);

  if (data === null) {
    return (
      <div>
        <SyncLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div>
      {data.map((post: any) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

const Sus = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfilePage />
    </Suspense>
  );
};

export default Sus;