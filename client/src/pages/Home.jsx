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
        <div className="p-3 flex align-items-center justify-content-center m-0">
          <div className="row flex align-items-center justify-content-between">
            {(function () {
              let rows = [];

              for (let i = 0; i < 4; i++) {
                rows.push(<Artwork />);
              }
              return rows;
            })()}
          </div>
          <div className="row flex align-items-center justify-content-between">
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
