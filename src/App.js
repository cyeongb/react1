/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";

class App extends Component {
  // ** render() 라는 함수보다 먼저 실행을 하면서 컴포넌트를 초기화 해주고 싶으면
  // constructor() 안에 코드를 짜고 실행시키면 된다.
  // 고로 젤 먼저 실행되고 초기화를 해 준다
  constructor(props) {
    super(props);
    this.max_content_id=3;  //state바깥에 선언한 이유는 이 값이 데이터에 영향을 주지 않기떄문에 불합리한 렌더링을 피하기 위해서다.
    this.state = {
      mode: 'create', //welcome 페이지라는 표시
      //selected_content_id:2,
      welcome: { title: "Welcome page", desc: "이건 웰컴 페이지" },

      subject: { title: "Your Choice", sub: "---------------------------" },

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
    var _desc,_title ,_article= null;
    if (this.state.mode === 'welcome') {
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent> ;
    } else if (this.state.mode === "read") {
      var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title= data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>  // welcome, read 일때 사용한다.
    }else if(this.state.mode === 'create'){
      _article=<CreateContent onSubmit={function(_title,_desc){
      this.max_content_id = this.max_content_id +1;
     var _contents= this.state.contents.concat(
      {id:this.max_content_id , title:_title , desc: _desc})
      this.setState({
        contents:_contents
      });
      alert('submit 성공!')
      }.bind(this)}></CreateContent>
    };

    return (
      <div className="App">
        
        <Subject title={this.state.subject.title}
           sub={this.state.subject.sub} onChangePage={function(){
          this.setState({
            mode:'welcome'
          }) ;
          }.bind(this)}></Subject>

        <Nav 
        onChangePage={function(id){  /* Nav에서 가져온 id라는 매개변수*/

          this.setState({
            mode : 'read',
            selected_content_id:Number(id)  /*id가 문자로 넘어오기 떄문에 숫자로 변환해 준다. */
          })
        }.bind(this)} data={this.state.contents}></Nav>
        <Control onChangeMode={function(_mode){  /* mode라는 인자에 현재 상태(mode)가 전달이 된다.*/
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control> 
        {_article}  
        {/* readContent 영역이 가변적으로 변할 수 있게끔 위의 변수 article로 선언해서 사용함.*/}
      </div>
    );
  }
}

export default App;
