var welcome = function (a, b) {
  console.log(
    "Welcome :>> " + this.name + ". Are you interested in " + a + " and " + b
  );
};

var obi = { name: "Obi" };
var ice = { name: "Ice" };

welcome.call(obi, "Node.js", 'React');
welcome.call(ice, "Django", 'React');

welcome.apply(obi, ["Node.js", 'React']);
welcome.apply(ice, ["Django", 'React']);

welcomeObi = welcome.bind(obi);
welcomeObi('node.js', 'React');

welcomeIce = welcome.bind(ice);
welcomeIce('django', 'react');
