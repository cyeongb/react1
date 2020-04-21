import React, { Component } from "react";

class CreateContent extends Component {
    render() {
      console.log("-----CreateContent render()")
      console.log('현재 받아온 데이터:',this.props.data)
      return (
        <article>
        
          <h2>Create Your Menu</h2>
          <form action ="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
           // debugger  //debugger 로 target이 form 임을 알수있음 그리고 title,desc의 value값
           this.props.onSubmit(
             e.target.title.value,
             e.target.desc.value
           ); //여기에 title,desc 값을 가져와야 함

          }.bind(this)}
          > 
            <p>     
              <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit" value="SUBMIT"></input> 
            </p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent;