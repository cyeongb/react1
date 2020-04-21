import React, { Component } from "react";

class UpdateContent extends Component {

// props.data 를 state화 시켜주는 작업
constructor(props){
  super(props);
  this.state = {
    title : this.props.data.title,
    desc : this.props.data.desc,
    id : this.props.data.id
  }
  this.inputFormHandler = this.inputFormHandler.bind(this);   //bind(this)를 공통적으로 사용하기 위해 밖으로 뺌
}

// 공통 부분인 setState()함수를 밖으로 뺏다.
inputFormHandler(e){
  this.setState({[e.target.name]:e.target.value})
}


    render() {
      console.log("-----UpdateContent render()");
      console.log('data 들고오는지 >>',this.props.data);
      return (
        <article>
        
          <h2>Update Your Menu</h2>
          <form action ="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
           // debugger  //debugger 로 target이 form 임을 알수있음 그리고 title,desc의 value값
           this.props.onSubmit(
             this.state.id,
             this.state.title,
             this.state.desc
           ); //여기에 title,desc 값을 가져와야 함

          }.bind(this)}
         
          // 어디를 update할지 지정하는 식별자
          > <input type="hidden" name="id" value={this.state.id}></input>

            <p>     
              <
              input type="text" 
              name="title" 
              placeholder="title"
              value={this.state.title}
              onChange={
              // console.log('target value 1 >>',e.target.value)  //찍어보면 한글자씩 찍힌다는걸 알 수 있따.
                // 이렇게 하나씩 찍히는걸 setState로 동기화 시켜준다.
                this.inputFormHandler}
              ></input>
            </p>
            <p>
              <textarea name="desc" 
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}
              ></textarea>
            </p>
            <p>
              <input type="submit" value="SUBMIT"></input> 
            </p>
          </form>
        </article>
      );
    }
  }

  export default UpdateContent;