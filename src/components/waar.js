import React, {useState} from "react";

function Waar() {

    const [locatie, setLocatie] = useState('')

    return (
        <div>
            <div>waar</div>
            <div>
                <label>Locatie</label>
                <input value={locatie} onChange={(event => setLocatie(event.target.value))}/>
            </div>
        </div>
    )
}

export default Waar;