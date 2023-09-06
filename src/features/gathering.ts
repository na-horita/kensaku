// 作成日の新しい順にソートする
export const sortByNewestCreationDate = function(photos:any) {
  return photos.sort(
    (a:any, b:any) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
};

