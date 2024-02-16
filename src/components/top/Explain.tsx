const Explain = () => {
  const styles = `
    summary {
      position: relative;
      display: block;
      width:190px;
      margin:10px 0 20px 15px;
      padding: 10px 10px 10px 30px;
      cursor: pointer;
      font-weight: bold;
      text-align: left; /* ボタンを左寄せに配置 */
      background-color: #e2f0f7;
      transition: 0.2s;
    }
    summary:hover {
      background-color: #ccebfb;
    }
    summary::-webkit-details-marker {
      display: none;
    }
    summary:before,
    summary:after {
      content: "";
      margin: auto 0 auto 10px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
    }
    summary:before {
      width: 16px;
      height: 16px;
      border-radius: 4px;
      background-color: #1da1ff;
    }
    summary:after {
      left: 6px;
      width: 5px;
      height: 5px;
      border: 4px solid transparent;
      border-left: 5px solid #fff;
      box-sizing: border-box;
      transition: .1s;
    }
    details[open] summary {
      background-color: #ccebfb;
    }
    details[open] summary:after {
      transform: rotate(90deg);
      left: 4px;
      top: 5px;
    }
    details[open] .details-content {
        border:6px double #999;
        padding: 30px 10px 10px;
        margin:3px 0 30px;
        animation: fadeIn 0.5s ease;
    }
    details[open] .details-content ul{
        list-style:none;
        padding-left: 0px;
    }
    details[open] .details-content li span{
        font-weight: bold;
        color: #CE1330;
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(-10px);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
    @media (width < 640px) {
    summary {
      margin:10px 0 10px 0px;
    }
  }
  `;

  return (
    <>
      <style>{styles}</style>
      <details>
        <summary>アプリの説明文表示</summary>
        <div className="details-content">
          <ul>
            <li>
              検索窓にキーワードを入力して、searchボタンを押すと、
              <span>UnsplashとPexels</span>の両方から画像を検索してきます
            </li>
            <li>
              気に入った画像はお気に入りとして保存することが出来ます。保存した画像は、<span>【トップページのスライダー】か【お気に入りページ】</span>から確認できます
            </li>
            <li>
              良く検索されるキーワードとしても検索することが出来ます、登録は【ワード追加ページ】から登録できます
            </li>
          </ul>
        </div>
      </details>
    </>
  );
};

export default Explain;
