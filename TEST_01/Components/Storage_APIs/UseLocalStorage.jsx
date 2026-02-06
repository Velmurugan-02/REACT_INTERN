import React, {
    useState,
    useEffect
} from 'react';

function UseLocalStorage() {
    const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem('count');
        return storedCount ? parseInt(storedCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem('count', count.toString());
        console.log("Count updated:", count);
    }, [count]);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default UseLocalStorage;