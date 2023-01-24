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
      <article className="col">
        <img src="/images/test_nft.jfif" style={{ maxWidth: "100%" }} />
        <h3>
          <a>Test NFT</a>
        </h3>
      </article>
    );
  }
}
export default Artwork;
