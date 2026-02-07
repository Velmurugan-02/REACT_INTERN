import { useState , useEffect } from "react";

let SessionStorageNote = () =>{
    let [note,setNote] = useState("");
    let setting_note = (e) =>{
        setNote(e.target.value);
    } 
    // Load note on page load
    useEffect(() => {
        const storedNote = sessionStorage.getItem("note");
        if (storedNote) {
            setNote(storedNote);
        }
    }, []);

    // Save note whenever it changes
    useEffect(() => {
        sessionStorage.setItem("note", note);
    }, [note]);

    const remove_note = () => {
        sessionStorage.removeItem("note");
        setNote("");
    };
    return(
        <>
            <textarea type="textarea" 
            value={note} 
            onChange={setting_note} 
            placeholder="Write something for NOTES" 
            rows={3}
            style={{ width: "100%", padding: "8px" }}
            />
            {sessionStorage.getItem('note') && <p>{sessionStorage.getItem('note')}</p>}
            <button onClick={remove_note}>Remove Notes</button>
        </>
    );
}

export default SessionStorageNote;