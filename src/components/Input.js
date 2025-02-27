import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {onAdd} ) {
  const handleChange = e => setText(e.target.value);
  const [text, setText] = React.useState('');
  const handleEnter = e => {
    if (e.keyCode === 13) {
      onAdd(text);//add to list
      setText('');//reset
    }
  };
  return (
    <div className="panel-block">
      <input
        class="input"
        type="text"
        placeholder="Todoを入力してください"
        value={text}
        onChange={handleChange}
        onEnter={handleEnter}
      />
    </div>
  );
}

export default Input;
