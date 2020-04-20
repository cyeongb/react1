import React, { Component } from "react";

class Subject extends Component {
    render() {
      console.log("-----Subject render()")
      //render는 func인데 class안에 소속된 func는 func을 생략한다.
      return (
        <header>        
          <h1><a href="/" onClick={function(e){
            console.log('e::',e)
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;