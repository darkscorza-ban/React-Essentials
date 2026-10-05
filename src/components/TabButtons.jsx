import { useState } from "react";
import { EXAMPLES } from "../data";
import Button from "./Button";
import TabContent from "./TabContent";
import Section from "./Section";
function TabButtons() {
  const [activeTab, setActiveTab] = useState("");
  const examplesTitle = Object.keys(EXAMPLES);

  const activeItem = EXAMPLES[activeTab];
  function handleClick(item) {
    setActiveTab(item);
  }
  return (
    <Section id="examples" title="Examples">
      <menu>
        {examplesTitle.map((item, i) => (
          <Button
            item={item}
            key={i}
            onClick={() => handleClick(item)}
            title={activeItem?.title}
          />
        ))}
      </menu>
      {activeTab ? (
        <TabContent item={activeItem} />
      ) : (
        <h2>Please Select a Topic.</h2>
      )}
    </Section>
  );
}

export default TabButtons;
