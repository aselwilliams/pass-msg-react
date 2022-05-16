import Input from "./components/Input";
import PassMsg from "./components/PassMsg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      alert: false,
      messages: [],
    };
  }

  handleSubmit = () => {
    const { inputValue, alert, messages } = this.state;
    if (this.state.inputValue === "") {
      this.setState({ alert: !alert });
      setTimeout(() => {
        this.setState({ alert: !alert });
      }, 3000);
    } else {
      this.setState({ messages: [...messages, inputValue] });
      this.setState({ inputValue: "" });
    }
  };

  handleDelete = (index) => {
    const { messages } = this.state;
    this.setState({ messages: messages.filter((el, ind) => ind !== index) });
  };

  render() {
    const { inputValue, output, alert, messages } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <header>
            <h4>A Message You Would Like To Pass</h4>
          </header>
          <main>
            <Input
              value={inputValue}
              handleChange={(e) => this.setState({ inputValue: e })}
            />
            <button id="submit-btn" onClick={this.handleSubmit}>
              Submit
            </button>
          </main>
          <div className="lower">
            <p className={alert ? "show red-msg" : "no-show"}>
              Please Enter A Value To Pass
            </p>
            {messages.length !== 0 && <h4>Messages List</h4>}
            <div>
              <PassMsg
                messages={messages}
                deleteMsg={(index) => this.handleDelete(index)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
