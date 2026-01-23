let ChildrenProps = ({company_name , children}) => {
    return(
        <>
            <p>This is {company_name} , We will provide you what you want.</p>
            <div>{children}</div>
        </>
    );
}

export default ChildrenProps;