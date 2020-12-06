import React from 'react'

//インターフェース型
interface TodoListProps {
    //itemsというプロパティがあり、itemsは配列で、その配列のオブジェクトはidとtextのkeyがある。
    items: { id: string; text: string }[];
}

//FCのジェネリック型に指定する
export const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <ul>
            {props.items.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    )
}


/*
React.FC・・・単にfunctinal componentという指定だけではなく、PropsについてもTSが理解しやすいように表現しなければいけない。
　　　　　　　　そうする事で型の安全性が高まる。
*/


