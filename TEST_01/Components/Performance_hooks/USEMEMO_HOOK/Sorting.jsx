import { useState, useMemo } from "react";

let Sorting = () => {
  const [count, setCount] = useState(0);
  const [ascending, setAscending] = useState(true);

  const numbers = [1,2,3,4,5,6,7,8,9,10];

  const sortedNumbers = useMemo(() => {
    console.log("Sorting happens");
    return [...numbers].sort((a, b) =>
      ascending ? a - b : b - a
    );
  }, [ascending]);

  return (
    <>
      <h3>Sorted Numbers</h3>
      <p>{sortedNumbers.join(", ")}</p>

      <button onClick={() => setAscending(prev => !prev)}>
        {ascending ? "Descending" : "Ascending"}
      </button>

      <br /><br />

      <button onClick={() => setCount(c => c + 1)}>
        Increment Count
      </button>

      <p>Count: {count}</p>
    </>
  );
};

export default Sorting;
