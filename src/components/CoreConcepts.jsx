import { CORE_CONCEPTS } from "../data.js";
import CoreElement from "./CoreElement.jsx";
import Section from "./Section.jsx";
function CoreConcepts() {
  return (
    <Section id="core-concepts" title="CoreConcepts">
      <ul>
        {CORE_CONCEPTS.map((item, i) => (
          <CoreElement key={i} item={item} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
