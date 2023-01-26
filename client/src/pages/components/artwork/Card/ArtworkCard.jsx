import { Component } from "react";

class ArtworkCard extends Component {
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
      <article className="col card p-0 m-4">
        <a
          href={"/posts/" + this.state.id}
          className={"text-dark"}
          style={{ textDecoration: "none" }}
        >
          <img
            src="/images/test_nft.jfif"
            style={{ maxWidth: "100%" }}
            className="card-img-top"
          />
          <div class="card-body">
            <h3 class="card-title" style={{textDecoration: 'underline'}}>Test NFT</h3>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </a>
      </article>
    );
  }
}
export default ArtworkCard;
