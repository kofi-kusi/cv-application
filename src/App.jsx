import { useState } from "react";

import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";

import { initPersonalDetails } from "./components/initData";
import { initEducation } from "./components/initData";

export default function App() {
  const [personalDetails, setPersonalDetails] = useState(initPersonalDetails);
  const [education, setEducation] = useState(initEducation)
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
      <InputArea
        sectionName={"Education"}
        isActive={activeInputArea == 1}
        onShow={() => setIActiveInputArea(1)}
      >
        <Education
            data={education}
            setData={setEducation}
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
        {isActive ? children : <button onClick={onShow}>+</button>}
      </fieldset>
    </section>
  );
}
