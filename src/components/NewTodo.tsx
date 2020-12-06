import React, { useRef } from 'react'

export const NewTodo: React.FC = () => {
    //useRefはジェネリック型だから、型を設定しないとダメ。
    const textInputRef = useRef<HTMLInputElement>(null);
    //新しいイベントが追加された時の処理
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        //ユーザーが入力した時のテキストの取得
        const enteredText = textInputRef.current!.value
        console.log(enteredText)
    }
    return (
        <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">Todo内容</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">TODOの追加</button>
        </form>
    )
}


/** 
 * textInputRef.current!.value・・・Refオブジェクトの.currentというプロパティを使ってDOM要素にアクセスする
 */