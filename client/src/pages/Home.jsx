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
        <div className="col-12 p-3 container align-items-center justify-content-between m-0">
          <div className="row container align-items-center justify-content-between w-100">
            {(function () {
              let rows = [];

              for (let i = 0; i < 4; i++) {
                rows.push(<Artwork />);
              }
              return rows;
            })()}
          </div>
          <div className="row">
            {(function () {
              let rows = [];

              for (let i = 0; i < 4; i++) {
                rows.push(<Artwork />);
              }
              return rows;
            })()}
          </div>
        </div>
      </main>
    );
  }
}
export default Home;
