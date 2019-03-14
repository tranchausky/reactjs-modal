//import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import Modal from "./Modal.js";

import "./styles.css";

//function App() {
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  alertme = () => {
    alert("123");
  };

  render() {
    return (
      <div className="App">
        <h1>Hello chau@</h1>
        <h2>Start editing to see some magic happen!</h2>

        <button onClick={this.toggleModal}>Open the modal</button>
        <Modal
          show={this.state.isOpen}
          onClose={this.toggleModal}
          acTionModal={this.alertme}
        >
          <p>Here's some content for the modal 1</p>
        </Modal>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
