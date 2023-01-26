import { Component } from "react";

class Artwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: "Connect Wallet",
      id: this.props.id,
    };
  }
  render() {
    console.log(this.state.id);
    return (
      <main className="col">
        <div className="content">
          <img
            src="/images/test_nft.jfif"
            style={{ maxWidth: "30%" }}
            className="card-img-top"
          />
          <div class="">
            <h3 class="" style={{ textDecoration: "underline" }}>
              Test NFT
            </h3>
            <p class="">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="comments">
            <h6>Dingle</h6>
            <p>1/26/2023</p>
            <p>Shitty art</p>
        </div>
      </main>
    );
  }
}
export default Artwork;
