import { NavLink } from "react-router-dom";

const TddNav = () => {
    const styles = `
    #root .active {
      background-color: #ccc;
    }
  `;
  return (
    <div className="my-8 text-center">
      <style>{styles}</style>
      <h2 className="mb-8">テスト駆動開発</h2>
      <div className="[&>a]:text-white [&>a]:font-bold [&>a]:py-2 [&>a]:px-4 [&>a]:rounded-full [&>a]:mx-2 [&>a]:no-underline [&>a]:bg-[var(--color)]">
        <NavLink className="[--color:#3B82F6] hover:bg-blue-300" to="/tdd/pexels">
          ピクセルデータ
        </NavLink>
        <NavLink className="[--color:#EC4899] hover:bg-pink-300" to="/tdd/unsplash">
          アンスプラッシュデータ
        </NavLink>
      </div>
    </div>
  );
};

export default TddNav;
