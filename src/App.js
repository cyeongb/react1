import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Subject from "./components/Subject";
import Content from "./components/Content";

class App extends Component {
  // ** render() 라는 함수보다 먼저 실행을 하면서 컴포넌트를 초기화 해주고 싶으면
  // constructor() 안에 코드를 짜고 실행시키면 된다.
  // 고로 젤 먼저 실행되고 초기화를 해 준다
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome', //welcome 페이지라는 표시
      welcome: { title: "Welcome page", desc: "이건 웰컴 페이지" },

      subject: { title: "Your Choice", sub: "이건 state 거친 subject" },

      contents: [
        {
          id: 1,
          title: "해송돌판닭찜",
          desc: "좀 비싸긴한데 양념을 밥이랑 볶으면 아주 굿...",
        },

        {
          id: 2,
          title: "참소라흑돼지찜",
          desc: "사리 추가하면 치즈 스파게티가 된다는 사실 !",
        },

        {
          id: 3,
          title: "산청약초한정식",
          desc: "시즌별 나물이 달라져 나물골라먹는 재미가 쏠쏠",
        },
      ],
    };
  }

  render() {
    var _desc,_title = null;
    if (this.state.mode === 'welcome') {
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    } else if (this.state.mode === "haesong") {
      _title=this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }else if(this.state.mode === "sora"){
      _title=this.state.contents[1].title;
      _desc = this.state.contents[1].desc;
    }

    return (
      <div className="App">
        
        <Subject title={this.state.subject.title}
           sub={this.state.subject.sub}></Subject>
           // onChangePage는 클릭했을 때 페이지가 바뀌도록 설정한것 
           onChangePage={function(){
            alert('온 체인지 페이지')

           }.bind(this)}
        {/*<header>   
          <h1><a href="#" onClick={function(e){
            console.log(e);
            e.preventDefault();            
          //  this.state.mode='welcome';
          this.setState({  
            mode:'haesong'
          })
          }.bind(this)}>{this.state.subject.title}</a></h1> 
          {this.state.subject.sub}
        </header>*/}
        <Nav data={this.state.contents}></Nav>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
