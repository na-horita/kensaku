import FrequentAdd from "../organisms/frequent/AddHook";
import FrequentsListHook from "../organisms/frequent/FrequentsListHook";

const Contact = () => {
  return (
    <>
      <div className="haedtitle">
        <h1 className="text-center">良く検索されるワード追加</h1>
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
