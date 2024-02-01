import React, { Suspense, useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";

type User = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

//カスタムhooks jsonデータを取得
const useProfileData = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsondata = await response.json();
      setUsers(jsondata);
    };

    fetchData();
  }, []);

  return users;
};

//子コンポーネント 非同期処理なのでfechが完了するまでと完了後の動作を記述
function ProfilePage() {
  const users: User[] | null = useProfileData();

  if (users === null) {
    return (
      <div>
        <SyncLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div>
      {users.map((user: User) => (
        <div key={user.id}>
          <h3>{user.title}</h3>
          <p>{user.body}</p>
        </div>
      ))}
    </div>
  );
}

//親コンポーネント
function Sus() {
  return (
    <Suspense fallback="">
      <ProfilePage />
    </Suspense>
  );
}

export default Sus;