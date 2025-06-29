import { Route, Router } from "react-router-dom"
import '../../styles/components/Blog.css'
import { useState } from "react"

const SideBar = () => {
    return(
        <div>
            <div className="editor-blocks" id="editor-blocks">
                Hi!
                <button id="collapse" onClick={function Hide(){const hat = document.getElementById('editor-blocks'); const hit = document.getElementById('bring'); hat.style.visibility = 'collapse'; hit.style.visibility = 'visible'}}></button>
            </div>
        </div>
    )
}

const TextBar = ({mynumber, myprops}) => {
    return(
        <div>
            <div className="textbox">
                {myprops}
                {mynumber + 12}
            </div>
        </div>
    )
}

const Editor = () => {
    let name = 'Tanks the great';
    var number = 23;
    return(
        <div>
            <button className="btn btn-primary" id="bring" onClick={function Show(){const hat = document.getElementById('editor-blocks'); const hit = document.getElementById('bring'); hat.style.visibility = 'visible'; hit.style.visibility = 'collapse'}}></button>
            <SideBar />
            <TextBar myprops={name} mynumber={number} />
        </div>
    )
}

export default Editor