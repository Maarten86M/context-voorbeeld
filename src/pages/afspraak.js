import React, {useState} from "react";
import Wat from "../components/wat";
import Waar from "../components/waar";


function Afspraak() {

    const [step, setStep] = useState(1)

    return (
        <div>
            <div>afspraak
                {step === 1 && (
                    <div>
                        <Wat/>
                    </div>
                )}
                {step == 2 && (
                    <div>
                        <Waar/>
                    </div>
                )}
                <button onClick={() => setStep(step -1)} disabled={step === 1}>Volgende Stap</button>
                <button onClick={() => setStep(step + 1)} disabled={step === 2}>Volgende Stap</button>
            </div>
        </div>
    )
}

export default Afspraak;