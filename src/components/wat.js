import React, {useState} from "react";

function Wat() {
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [discription, setDiscription] = useState('')


    return (
        <div>
            <div>wat</div>
            <div>
                <label>Titel</label>
                <input value={title}
                       onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div>
                <label>Omschrijving</label>
                <input value={discription}
                       onChange={(event) => setDiscription(event.target.value)}/>
            </div>

            <div>
                <label>Soort datumprikker</label>
                <select value={type} onChange={(event) => setType(event.target.value)}>
                    <option>Datum prikken</option>
                    <option>Aanwezigheid</option>
                    <option>Anders</option>
                </select>
            </div>
        </div>
    )
}

export default Wat;