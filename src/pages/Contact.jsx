import FrequentAdd from "../components/FrequentAdd";
import FrequentsListHook from "../organisms/FrequentsListHook";

const Contact = () => {
  return (
    <>
      <div className="haedtitle">
        <h1>良く検索されるワード追加</h1>
      </div>
      <FrequentAdd />
      <hr />
      <div>
        <FrequentsListHook />
      </div>
    </>
  );
};

export default Contact;
