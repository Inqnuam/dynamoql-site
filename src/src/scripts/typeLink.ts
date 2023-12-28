export const textToTypeLink = {
  " Boolean": "/docs/schema/data-types/Boolean",
  " String": "/docs/schema/data-types/String",
  " Number": "/docs/schema/data-types/Number",
  " Array": "/docs/schema/data-types/Array",
  " Set": "/docs/schema/data-types/Set",
};

export const clickHandler = (e) => {
  const link = textToTypeLink[e.target.innerText];
  if (link) {
    location.href = link;
  }
};
