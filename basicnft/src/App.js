import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Mcp from "./mcp.js";
import abi from "./contracts/TimeCapsule.json"
import { addListener } from 'process';


class App extends Component {
  mint = async () => {
    const mcp = new Mcp();
    mcp.Contract.setProvider("https://huygens.computecoin.network");

    const core = "0x8e1e8dEEB2e9299D2ae4E8996E0DD0f972EDD6E6";  // contract address

    const Contract = new mcp.Contract(abi, core);

    Contract.methods.writeTo(0, "abc.com").call()
      .then(res => {
        window.alert(res.toString())
      })
  }

  connect = async () => {
    if (window.aleereum !== "undefined") {
      const provider = window["aleereum"];
      if (provider.isAle) {
        provider.connect()
        provider.on("on_isConnected_change", (isConnected) => console.log(isConnected))

      }
    }
  }
  render() {
    return (
      <html>  
      <div>
        <button onClick={this.connect}>Connect</button>
        <button onClick={this.mint}>Mint</button>
      </div>
      </html>
      )
    
  }
}
export default App;
