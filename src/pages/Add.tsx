import FrequentAdd from "../components/add/AddFrequent";
import FrequentsLists from "../components/add/FrequentsLists";

const Contact = () => {
  return (
    <>
      <div className="haedtitle">
        <h1 className="text-center">良く検索されるワード追加</h1>
      </div>
      <FrequentAdd />
      <hr />
      <div>
        <FrequentsLists />
      </div>
    </>
  );
};

export default Contact;
