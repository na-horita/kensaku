import AddFrequent from "../components/AddFrequent";
import FrequentsList from "../components/FrequentsList";

const Contact = () => {
  return (
    <>
      <div className="haedtitle">
        <h1>良く検索されるワード追加</h1>
      </div>
      <AddFrequent />
        <hr />
      <FrequentsList />
    </>
  );
};

export default Contact;
