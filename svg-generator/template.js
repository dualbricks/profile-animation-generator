// function to generate template for textPath animation
const template = (id, text, otherStuff) => {
  const { color, speed, size, fontStyle, length } = otherStuff;
  let begin = id == 0 ? `0s;d${length}.end` : `d${id - 1}.end`;
  let temp = `<path id="p${id}">
    <animate
      id="d${id}"
      attributeName="d"
      values="m0,25 h0 ; m0,25 h400 ; m0,25 h400 ; m0,25 h0"
      dur="${speed}"
      fill="remove"
      begin="${begin}"
      keyTimes="0;0.8;0.8;1"
    />
  </path>
  <text
    font-size="${size}"
    font-family="${fontStyle}"
    fill="${color}"
  >
    <textPath xlink:href="#p${id}">${text}</textPath>
  </text>`;

  return temp;
};

export { template };
