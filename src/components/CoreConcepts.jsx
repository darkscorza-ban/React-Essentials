import { CORE_CONCEPTS } from "../data.js";
import CoreElement from "./CoreElement.jsx";
function CoreConcepts() {
  return (
    <div id="core-concepts">
      <h2>CoreConcepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item, i) => (
          <CoreElement key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default CoreConcepts;
