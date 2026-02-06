import OnlineStatus from "./OnlineStatus";
let UserConncections = () =>{
    return(
        <>
            <h1>
                {OnlineStatus ? "Online" : "Offline"}
            </h1>
        </>
    );
}   
export default UserConncections;