import React,{ Component } from 'react';

function getNumbers() { // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 횟수

}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = () => {

  };

  onChangeInput = () => {

  };

  fruites = [
    { fruite : '사과', taste: '맛있다'},
    { fruite : '감', taste: '시다'},
    { fruite : '귤', taste: '달다'},
    { fruite : '밤', taste: '떫다'},
    { fruite : '배', taste: '맛있다'},
    { fruite : '무', taste: '맛있다'},
    { fruite : '사과', taste: '맛없다'},
  ]

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.fruites.map( (v, i) => {
            return (
              <li key={v.fruite + v.taste}>
                <b>{v.fruite}</b> - {i}
                </li>
            );
          })}
        </ul>
      </>
    )
  };
};

export default NumberBaseball; // import NumberBaseball;