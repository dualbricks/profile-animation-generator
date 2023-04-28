import { SVG } from "@svgdotjs/svg.js";

const svgGenerator = (text, otherStuff) => {
  const { width, height, color, speed, size } = otherStuff;
  return `
  <svg width="${width}" 
      height="${height}"
      viewBox="-100 -50 600 500"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
    <path id="path">
        <animate
          attributeName="d"
          from="m10, 110 h10"
          to="m10,110 h1100"
          dur="${speed}"
          begin="0s"
          repeatCount="indefinite"
        />
      </path>
      <text
        font-size="${size}"
        font-family="Montserrat"
        fill="${color}"
      >
        <textPath xlink:href="#path">${text}</textPath>
      </text>
    </svg>`;
};

export { svgGenerator };
