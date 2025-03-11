import { Input } from "./utils";

export default function Education({ data, setData, }) {
  function handleChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }
  return (
    <div className="">
      <Input
        label={"Degree"}
        name={"degree"}
        data={data.degree}
        handleChange={handleChange}
      />
    </div>
  );
}
