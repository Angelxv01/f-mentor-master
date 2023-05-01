const str = ["White", "Pale blue", "Light lavender", "Dark gray blue"];

console.log(
  str.reduce((acc, str) => {
    acc[str.toLowerCase().split(" ").join("-")] = "";
    return acc;
  }, {})
);
