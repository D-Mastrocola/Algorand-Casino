import { Component } from "react";

class Artwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: "Connect Wallet",
      id: this.props.id
    };
  }
  render() {
    console.log(this.state.id)
    return (
      <article className="col m-3">
        <a href={"/posts/" + this.state.id}>
        <img src="/images/test_nft.jfif" style={{ maxWidth: "100%" }} />
        <h3>
          <a>Test NFT</a>
        </h3>
        </a>
      </article>
    );
  }
}
export default Artwork;
