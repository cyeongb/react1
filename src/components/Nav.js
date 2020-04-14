import React, { Component } from "react";

class Nav extends Component {
  render() {
    var lists=[];
    var data= this.props.data;   //이 값으로 글 목록을 생성한다
    var i=0;
    while(i<data.length){
      lists.push(
        <li key={data[i].id}>
         <a 
            href={"/content/"+data[i].id}
            onClick={function(e){
              e.preventDefault();
            }}
            >{data[i].title}

         </a>
        </li>);
      i++;
    }


      return (
        <nav>
          <ul>
            <h2>머먹고싶니</h2>
            {lists}
          </ul>
        </nav>
      );
    }
  }

// Nav 클래스를 가져다 쓰는 쪽에서 이 코드를 사용할 수 있게끔 설정함 
  export default Nav;