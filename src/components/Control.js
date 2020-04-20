import React, { Component } from "react";

class Control extends Component {
  render() {
    console.log("-----Control render()")
    //render는 func인데 class안에 소속된 func는 func을 생략한다.
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("create");
            }.bind(this)}
          >
            C R E A T E
          </a>
        </li>
        <li>
          <a href="/update" onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("update");
          }.bind(this)}>U P D A T E</a>
        </li>
        <li>
          <input  onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("delete");
          }.bind(this)} type="button" value="D E L E T E"></input>
        </li>
      </ul>
    );
  }
}

export default Control;
