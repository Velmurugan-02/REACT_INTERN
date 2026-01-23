let Child_Props = ({onincrement}) => {
    return(
        <>
            <p>This is the Child Component</p>
            <button onClick={onincrement}>Increment</button>
        </>
    );
}

export default Child_Props;