function build_character_nodes(input) {
  var input_data = [];

  for (var i = 0; i < input.length; i++) {
    var found = false;

    for (var j = 0; j < input_data.length && !found; j++) {
      let sname = input.charAt(i);
      if (sname === " ") sname = "spc";
      else if (sname === '\n') sname = "nl";
      
      if (input_data[j].name == sname) {
        input_data[j].frequency++;
        found = true;
      }
    }
    let sname = input.charAt(i);
    if (!found) {
      if (sname === " ") sname = "spc";
      else if (sname === '\n') sname = "nl";
      input_data[input_data.length] = {
        id: "0",
        name: sname,
        children: [],
        frequency: 1
      };
    }
  }

  return input_data;
}
