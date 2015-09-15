import React from "react";

export default React.createClass({
  render: function() { 
    return (
      <div className="greeting">
        Hello, <b>{this.props.name}!</b>
      </div>
    );
  },
});
