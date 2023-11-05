import React, { useState } from "react";
import TabButton from "../TabButton.jsx";
import Section from "../Section.jsx";
import { EXAMPLES } from "../../data.js";
import Tabs from "../Tabs.jsx";
export default function Examples() {
  const [SelectedTopic, changeTopic] = useState("");
  function ClickHandler(text) {
    changeTopic(text);
    console.log(SelectedTopic);
  }
  return (
    <Section id="examples" title="Examples">
      {/* <h2>Examples</h2> */}
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            {" "}
            <TabButton
              isSelected={SelectedTopic === "components"}
              onClick={() => ClickHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={SelectedTopic === "jsx"}
              onClick={() => ClickHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={SelectedTopic === "props"}
              onClick={() => ClickHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={SelectedTopic === "state"}
              onClick={() => ClickHandler("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {!SelectedTopic && <p>Please select a topic.</p>}
        {SelectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[SelectedTopic].title}</h3>
            <p>{EXAMPLES[SelectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[SelectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
      {/* <h2>Time to get started!</h2> */}
    </Section>
  );
}
