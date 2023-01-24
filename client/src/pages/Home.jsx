import { Component } from "react";
import Artwork from "./components/artwork/Artwork";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: "Connect Wallet",
    };
  }
  render() {
    return (
      <main>
        <h2>Home</h2>
        <div className="col-12 p-3">
          <Artwork />
        </div>
      </main>
    );
  }
}
export default Home;
