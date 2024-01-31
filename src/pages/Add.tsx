
import FrequentsLists from "../components/add/FrequentsLists";
import FrequentCreate from "../components/add/FrequentCreate";

const Contact = () => {
  return (
    <>
      <div className="haedtitle">
        <h1 className="text-center">良く検索されるワード追加</h1>
      </div>
      <FrequentCreate />
      <hr />
      <div>
        <FrequentsLists />
      </div>
    </>
  );
};

export default Contact;
