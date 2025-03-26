import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

export default function ExampleUseSyncExternalStore() {
    {/*
    При монтировании компонента вызывает первую и вторую функцию
    При обновлении компонента вызывает вторую функцию
    При изменении содержимого хранилища вызывает вторую функцию и инициирует обновление компонента
    При размонтировании компонента вызывает функцию очистки, которая возвращается из первой функции
    */}
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
    return (
        <>
            <button onClick={() => todosStore.addTodo()}>Add todo</button>
            <hr />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    );
}

//