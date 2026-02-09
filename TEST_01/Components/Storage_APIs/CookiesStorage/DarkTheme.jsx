import { useEffect, useState } from "react";

function getCookie(name) {
  return document.cookie
    .split("; ")
    .map(v => v.split("="))
    .find(([k]) => k === name)?.[1] ?? null;
}
let DarkTheme = () =>{
    let [theme,setTheme] = useState("light");
    useEffect(()=>{
        let theme_cookie = getCookie("theme");
        if (theme_cookie) setTheme(decodeURIComponent(theme_cookie));
    },[]);
    let darkTheme = () =>{
        document.cookie = "theme=dark; Path=/; Max-Age=31536000; SameSite=Lax;";
        setTheme("dark");
    }
    return(
        <>
            <div>
                <p>Theme : {theme}</p>
                <button onClick={darkTheme}>Dark</button>
            </div>
        </>
    );
}

export default DarkTheme;