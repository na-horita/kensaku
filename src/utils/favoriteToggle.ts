import { Photo } from "../ts/photo";

// お気に入りor解除のボタンtoggle
export const isFavorite = (hopes:Photo[],singleData: Photo): boolean => {
  return (
    hopes !== null && hopes.findIndex((hope: any) => hope.id === singleData.id) !== -1
  );
};


// 押下でindexedDBに登録or解除
export const AddToFavorites = (hopes: Photo[], event: any, image: Photo) => {
  event.preventDefault();

  // 「お気に入り」の配列の中と一致するかのフラグ -1は不一致を表す。
  let existingIndex = -1;

  // 「お気に入り」一覧を格納するための配列
  let newHopes: Photo[];

  // 「お気に入り」一覧に既に値があるのかの条件分岐 あれば「お気に入り」とこのイメージが一致するかを計算
  if (hopes && hopes.length) {
    existingIndex = hopes.findIndex((hope: Photo) => hope.id === image.id);
    newHopes = [...hopes];
  } else {
    // 「お気に入り」一覧が空の配列ならば、newHopesに空の配列を設定
    newHopes = [];
  }

  if (existingIndex !== -1) {
    newHopes.splice(existingIndex, 1);
  } else {
    newHopes.push(image);
  }
  return newHopes;
};