import { useState } from "react";

import PersonalDetails from "./components/PersonalDetails";

import { initPersonalDetails } from "./components/initData";

export default function App() {
  const [personalDetails, setPersonalDetails] = useState(initPersonalDetails);
  const [activeInputArea, setIActiveInputArea] = useState(0);
  return (
    <section>
      <InputArea
        sectionName={"Personal Details"}
        isActive={activeInputArea == 0}
        onShow={() => setIActiveInputArea(0)}
      >
        <PersonalDetails 
            data={personalDetails}
            setData={setPersonalDetails}
        />
      </InputArea>
    </section>
  );
}

function InputArea({ className, sectionName, children, isActive, onShow }) {
  return (
    <section className={className}>
      <fieldset>
        <h2>{sectionName}</h2>
        {isActive ? { children } : <button onClick={onShow}>+</button>}
      </fieldset>
    </section>
  );
}
