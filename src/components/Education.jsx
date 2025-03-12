import { Input } from "./utils";

export default function Education({ data, setData }) {
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
      <Input
        label={"School"}
        name={"school"}
        data={data.school}
        handleChange={handleChange}
      />
      <Input
        label={"Location"}
        name={"location"}
        data={data.location}
        handleChange={handleChange}
      />
      <div>
        <Input
          label={"Start date"}
          name={"startDate"}
          type={"date"}
          data={data.startDate}
          handleChange={handleChange}
        />
        <Input
          label={"End Date"}
          name={"endDate"}
          type={"date"}
          data={data.endDate}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}
