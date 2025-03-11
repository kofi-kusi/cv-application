import { Input } from "./utils";

export default function PersonalDetails({data, setData}) {
  function handleChange(e, name){
    setData({...data, [name]: e.target.value})
  }
  return (
    <>
      <Input
        lable={"First Name"}
        name={"firstName"}
        data={data.firstName}
        handleChange={handleChange}
        placeholder={"Kofi"}
      />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </>
  );
}
