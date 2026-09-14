import { useState } from "react";
import { EXAMPLES } from "../data";
import Button from "./Button";
import TabContent from "./TabContent";
function TabButtons() {
  const [activeTab, setActiveTab] = useState("components");
  const examplesTitle = Object.keys(EXAMPLES);

  const activeItem = EXAMPLES[activeTab];
  function handleClick(item) {
    setActiveTab(item);
  }
  return (
    <div id="examples">
      <h2>Examples</h2>
      <menu>
        {examplesTitle.map((item, i) => (
          <Button
            item={item}
            key={i}
            onClick={() => handleClick(item)}
            title={activeItem.title}
          />
        ))}
      </menu>
      <TabContent item={activeItem} />
    </div>
  );
}

export default TabButtons;
