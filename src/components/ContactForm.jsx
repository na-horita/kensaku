import { useForm } from "react-hook-form";

function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" {...register("name")} />

      <label>Email</label>
      <input type="email" {...register("email")} />

      <label>Message</label>
      <textarea {...register("message")} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
