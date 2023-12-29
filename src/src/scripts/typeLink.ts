import { baseUrl } from "@site/docusaurus.config";

export const textToTypeLink = {
  " Boolean": `${baseUrl}docs/schema/data-types/Boolean`,
  " String": `${baseUrl}docs/schema/data-types/String`,
  " Number": `${baseUrl}docs/schema/data-types/Number`,
  " Array": `${baseUrl}docs/schema/data-types/Array`,
  " Set": `${baseUrl}docs/schema/data-types/Set`,
};

export const clickHandler = (e) => {
  const link = textToTypeLink[e.target.innerText];
  if (link) {
    location.href = link;
  }
};
