import { Component } from "react";

class Artwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: "Connect Wallet",
    };
  }
  render() {
    return (
      <article className="col-3">
        <h3>
          <a>Shitty Monkey Art</a>
        </h3>
      </article>
    );
  }
}
export default Artwork;
