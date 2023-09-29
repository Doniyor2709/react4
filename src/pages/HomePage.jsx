import React, { Component, Fragment } from "react";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      mounting: true,
    };
  }
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  // shouldComponentUpdate() {
  //   return false;
  // }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }
  render() {
    console.log("Render");
    const toggle = () => {
      this.setState({ mounting: !this.state.mounting });
    };
    return (
      <Fragment>
        <section>
          <div className="container">
            <h1>HomePage</h1>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomePage;
