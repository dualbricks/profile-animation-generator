import { SVG } from "@svgdotjs/svg.js";
import { VT323 } from "./fonts";

const svgGenerator = (text, otherStuff) => {
  const { width, height, color, speed, size, fontStyle } = otherStuff;
  let default_style = "<style></style>";
  let font = fontStyle ? fontStyle : default_font;
  if (font == "VT323") {
    default_style = VT323;
  }

  return `
  <svg width="${width}" 
      height="${height}"
      viewBox="0 -50 ${width} ${height}"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
    ${default_style}
    <path id="path">
        <animate
          attributeName="d"
          from="m0, 110 h0"
          to="m0,110 h1100"
          dur="${speed}"
          begin="0s"
          repeatCount="indefinite"
        />
      </path>
      <text
        font-size="${size}"
        font-family="${fontStyle}"
        fill="${color}"
      >
        <textPath xlink:href="#path">${text}</textPath>
      </text>
    </svg>`;
};

export { svgGenerator };
