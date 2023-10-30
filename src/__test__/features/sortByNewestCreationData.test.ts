import { sortByNewestCreationDate } from "../../features/gathering";

test("基本の日付並び替え", () => {
  const photos = [
    { created_at: "2023-10-30T12:00:00Z" },
    { created_at: "2023-10-29T12:00:00Z" },
    { created_at: "2023-10-28T12:00:00Z" },
  ];

  const sortedPhotos = sortByNewestCreationDate(photos);

  expect(sortedPhotos).toEqual([
    { created_at: "2023-10-30T12:00:00Z" },
    { created_at: "2023-10-29T12:00:00Z" },
    { created_at: "2023-10-28T12:00:00Z" },
  ]);
});

test("基本の日付並び替えの順番待ち替え", () => {
  const photos = [
    { created_at: "2023-10-30T12:00:00Z" },
    { created_at: "2023-10-29T12:00:00Z" },
    { created_at: "2023-10-28T12:00:00Z" },
  ];

  const sortedPhotos = sortByNewestCreationDate(photos);

  expect(sortedPhotos).not.toEqual([
    { created_at: "2023-10-29T12:00:00Z" },
    { created_at: "2023-10-30T12:00:00Z" },
    { created_at: "2023-10-28T12:00:00Z" },
  ]);
});

test("created_atの他にも要素があるとき", () => {
  const photos = [
    { name: "アリス", created_at: "2023-10-30T12:00:00Z" },
    { name: "鳥山", created_at: "2023-10-29T12:00:00Z" },
    { name: "マイケルジャク", created_at: "2023-10-28T12:00:00Z" },
  ];

  const sortedPhotos = sortByNewestCreationDate(photos);

  expect(sortedPhotos).toEqual([
    { name: "アリス", created_at: "2023-10-30T12:00:00Z" },
    { name: "鳥山", created_at: "2023-10-29T12:00:00Z" },
    { name: "マイケルジャク", created_at: "2023-10-28T12:00:00Z" },
  ]);
});