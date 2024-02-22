import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./layout/header";
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <Header />
    )
  }
}

export default App

const container = document.getElementById("app");
render(<App />, container);

 /* class App extends Component {
  render() {
   return console.log('Hello')
    }
  }
ReactDOM.render(<App />, document.getElementById('app')) */

// React component for fetching and displaying data
 /* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/account")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name} - {contact.email}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container); */