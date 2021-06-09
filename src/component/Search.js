import React, { PureComponent } from "react";

class Search extends PureComponent {
  render() {
    const image = `https://source.unsplash.com/400x300?${this.props.name}`;

    return (
      <div className="text-center">
        <p>{this.props.name}</p>
        <div>
          
        </div>

        <div>
          <img
            className="text-center"
            style={{ width: "400px", margin: "auto", height: "400px" }}
            src={image}
            alt="not found"
          />
        </div>
      </div>
    );
  }
}

export default Search;
