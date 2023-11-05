import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data.js";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core-concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConcept key={coreConcept.title} {...coreConcept}></CoreConcept>
        ))}
        {/* <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
            <CoreConcept
              image={CORE_CONCEPTS[1].image}
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
            ></CoreConcept>
            <CoreConcept
              image={CORE_CONCEPTS[2].image}
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
            ></CoreConcept> */}
      </ul>
    </section>
  );
}
