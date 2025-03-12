import { Input } from "./utils";

export default function Skills({ data, setData, list, setList }) {

  function handleChange(e) {
    setData(e.target.value);
  }

  function handleList(e){
    e.preventDefault();
    const newList = {skill: data, id: crypto.randomUUID()}
    setList(...list, newList)
  }

  function handleDelSkill(itemId){
    setList(list.filter(item => item.id !== itemId))
  }
  return (
    <div className="">
      <form onSubmit={handleList}>
        <Input
          label={"Skill"}
          name={"skill"}
          data={data}
          handleChange={handleChange}
        />
        <button type="submit" >Add skill</button>
      </form>
      <div className="">
        {list.map((item) => (
            <div>
                <div>{item.skill}</div>
                <button onClick={() => handleDelSkill(item.id)}>X</button>
            </div>
        ))}
      </div>
    </div>
  );
}
