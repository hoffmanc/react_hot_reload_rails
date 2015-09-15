import React from "react";

export default React.createClass({
  render: function() { 
    return (
      <div className="greeting">
        <p>
          Hello, <b>{this.props.name}!</b>
        </p>
        <p>
          <textarea name='foo' rows='5' cols='50'>Change this text, then change some other part of the jsx (e.g., the name attribute in entry.jsx) and save it.</textarea>
        </p>
      </div>
    );
  },
});
