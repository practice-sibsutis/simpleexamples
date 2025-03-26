import React, {Suspense, use} from 'react';

const ExampleSuspense = () => {
    const getData = async () => {
        return [1,2,3,4];
    }

    const pTodo = getData();

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <__TodoDetail pTodo={pTodo}/>
            </Suspense>
        </div>
    );
};

function __TodoDetail({pTodo}) {
    const todo = use(pTodo);
    return (
        <p>{todo}</p>
    )
}

export default ExampleSuspense;