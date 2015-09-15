import React from "react";
import Greeting from "./greeting";

$(document).on("ready", function() { 
  React.render(
    <Greeting name="Chris"/>,
    document.body
  );
});
