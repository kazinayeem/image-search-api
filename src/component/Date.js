import React, { PureComponent } from "react";
import Search from "./Search";

class Date extends PureComponent {
  state = {
    image: "",
  };

  inputevent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="container">
        <header className="bg-dark text-light font-bold">
          <h1 className="text-center">Find your Image</h1>
        </header>

        <div>
          <input
            value={this.state.image}
            onChange={this.inputevent}
            type="text"
            name="image"
            className="form-control form-control-sm m-auto py-3"
            placeholder="search..."
            style={{ width: "400px" }}
          />
        </div>
        <br />
        <hr />

        {this.state.image === "" ? (
          <div className="text-center">
            <h3>search your image......</h3>
          </div>
        ) : (
          <Search
            className="text-center border-2 border-danger"
            name={this.state.image}
          ></Search>
        )}
      </div>
    );
  }
}

export default Date;
