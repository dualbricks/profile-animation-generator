import { SVG } from "@svgdotjs/svg.js";
import { VT323 } from "./fonts.js";
import { template } from "./template.js";

const svgGenerator = (text, otherStuff) => {
  const { width, height, color, speed, size, fontStyle } = otherStuff;
  let default_style = "<style></style>";

  if (fontStyle == "VT323") {
    default_style = VT323;
  }

  let text_list = text.split("-");
  let text_animations = "";
  otherStuff.length = text_list.length - 1;
  text_list.map((text) => {
    text_animations += template(text_list.indexOf(text), text, otherStuff);
  });

  return `
  <svg width="${width}" 
      height="${height}"
      viewBox="0 0 400 50"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
    ${default_style}
    ${text_animations}
    </svg>`;
};

export { svgGenerator };
