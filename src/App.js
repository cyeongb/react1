/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent ";

class App extends Component {
  // ** render() 라는 함수보다 먼저 실행을 하면서 컴포넌트를 초기화 해주고 싶으면
  // constructor() 안에 코드를 짜고 실행시키면 된다.
  // 고로 젤 먼저 실행되고 초기화를 해 준다
  constructor(props) {
    super(props);
    this.max_content_id = 3; //state바깥에 선언한 이유는 이 값이 데이터에 영향을 주지 않기떄문에 불합리한 렌더링을 피하기 위해서다.
    this.state = {
      mode: "welcome", //welcome 페이지라는 표시
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

  // this.state.mode === "read" 일때
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }

  // _article 변수를 리턴한다.
  getContent() {
    var _desc,
      _title,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;

            var _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });

            // var _contents = this.state.contents.concat({ //이걸 Array 로 위에 바꿈
            //   id: this.max_content_id,
            //   title: _title,
            //   desc: _desc,
            // });
            this.setState({
              contents: _contents,
              mode :'read',
              selected_content_id : this.max_content_id
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      _content = this.getReadContent(); //현재 내용을 가져옴
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            var _contents = Array.from(this.state.contents); //this.state.contents를 복사한 새로운 객체를 생성해줌
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                //해당 컨텐트의 id값이 입력받은 id값과 동일하다면
                _contents[i] = {
                  id: _id,
                  title: _title,
                  desc: _desc,
                };
                break;
              }
              i = i + 1;
            }
            this.setState({
              contents: _contents,
              mode :'read'
            });
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        ></Subject>

        <Nav
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></Nav>
        <Control
          onChangeMode={function (_mode) {
            if(_mode ==='delete'){
             if( window.confirm('정말 삭제하시겠습니까?')){
               var _contents = Array.from(this.state.contents)
               var i =0;
               while(i<_contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);   //splice 함수로 해당 id값부터 1개를 지우겠다는 뜻.
                break;
                }
                i = i+1;
               }
               this.setState({
                 mode :'welcome',
                 contents : _contents
               });
               alert('deleted!')
             }
              
            }else{
              
              this.setState({
                mode: _mode,
              });
            }
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
