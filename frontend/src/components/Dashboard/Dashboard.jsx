import { Component } from "react";

class Dashboard extends Component {
    render() {
      return (
        <div>
          <h1>Hello Mr {this.props.name}</h1>
        </div>
      )
    }
}

export default Dashboard;