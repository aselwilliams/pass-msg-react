import Input from './components/Input';
import PassMsg from './components/PassMsg'
import './App.css';
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      output: "HELLO WORLD",
      alert: false,
      messages: [],
      newMessage: ""
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = () => {
    const { inputValue, alert, messages } = this.state;
    if (this.state.inputValue === "") {
      this.setState({ alert: !alert });
      setTimeout(() => {
        this.setState({ alert: !alert });
      }, 3000);
    } else {
      // let newList = [...messages, inputValue];
      this.setState({ messages: [...messages,inputValue] });
      this.setState({ inputValue: "" });
    }
  };
  render() {
    const { inputValue, output, alert,messages } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <header>
            <h4>A Message You Would Like To Pass</h4>
          </header>
          <main>
            <Input value={inputValue} handleChange={(e)=>this.setState({inputValue:e})} />
         
            <button id="submit-btn" onClick={this.handleSubmit}>
              Submit
            </button>
          </main>

          <div className="lower">
            <p className={alert ? "show red-msg" : "no-show"}>
              Please Enter A Value To Pass
            </p>
            <h4>Last Message Delivered</h4>
            <div>
              <PassMsg messages={messages} deleteMsg={(index)=>this.deleteMsg(index)}/>
            </div>
            {/* <p id="output-text">{messages}</p> */}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
