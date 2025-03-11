import { Input } from "./utils";

export default function PersonalDetails({data, setData}) {
  function handleChange(e, name){
    setData({...data, [name]: e.target.value})
  }
  return (
    <div className="">
      <Input
        lable={"First Name"}
        name={"firstName"}
        data={data.firstName}
        handleChange={handleChange}
        placeholder={"Kofi"}
      />
      <Input 
        label={"Last Name"}
        name={"lastName"}
        data={data.lastName}
        handleChange={handleChange}
        placeholder={"Appau"}
      />
       <Input 
        label={"Job Title"}
        name={"jobTible"}
        data={data.jobTite}
        handleChange={handleChange}
        placeholder={"farmer"}
      />
       <Input 
        label={"Email"}
        name={"email"}
        data={data.email}
        type = {'email'}
        handleChange={handleChange}
        placeholder={"youremail@example.com"}
      />
       <Input 
        label={"Phone"}
        name={"phone"}
        data={data.phone}
        type = {'tel'}
        handleChange={handleChange}
        placeholder={"+2331233456789"}
      />
      <div className="">
      <Input 
        label={"City"}
        name={"city"}
        data={data.city}
        handleChange={handleChange}
        placeholder={"Kumasi"}
      />
       <Input 
        label={"Country"}
        name={"country"}
        data={data.country}
        handleChange={handleChange}
        placeholder={"Ghana"}
      />
      </div>
    </div>
  );
}
