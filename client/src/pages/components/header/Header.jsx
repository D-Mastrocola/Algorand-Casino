import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: "Connect Wallet",
    };
  }
  render() {
    return (
      <header className="bg-dark text-light col-12 d-flex justify-content-between align-items-center px-4 border border-2 border-secondary border-top-0 border-start-0 border-end-0 ">
        <h1>Mastrocola.io</h1>
        <button className="btn btn-warning">Connect</button>
      </header>
    );
  }
}
export default Header;
