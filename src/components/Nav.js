import React, { Component } from "react";

class Nav extends Component {
  shouldComponentUpdate(){  // state가 변경되거나 새로운 props를 전달받을 떄 실행된다.
      // 이 함수의 반환값(true/false)에 따라서 re-render의 여부를 결정한다.
    console.log(" >>>> Nav render 전 shouldComponentUpdate ")
    return true;   //true는 re-render , false는 re-render안함 그러니까 false하면 render가 호출안된다.
  }

  render() {
    console.log("-----Nav render()")
    var lists=[];
    var data= this.props.data;   //이 값으로 글 목록을 생성한다
    var i=0;
    while(i<data.length){
      lists.push(
        <li key={data[i].id}>
         <a 
            href={"/content/"+data[i].id}
            data-id = {data[i].id}
            onClick={function(e){
              e.preventDefault();  /* 다른 페이지로 이동하지 않도록 제어*/
              this.props.onChangePage(e.target.dataset.id);  /* e의 target은 a태그를 가리킨다.*/
            }.bind(this)}
            >{data[i].title}

         </a>
        </li>);
      i++;
    }


      return (
        <nav>
          <ul>
            <h2>M E N U</h2>
            {lists}
          </ul>
        </nav>
      );
    }
  }

// Nav 클래스를 가져다 쓰는 쪽에서 이 코드를 사용할 수 있게끔 설정함 
  export default Nav;