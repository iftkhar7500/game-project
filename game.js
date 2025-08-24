


import { useState } from "react";
function Game() {
    const [set, setinput] = useState("")
    const [name, setinput1] = useState("")
    const [input1, set1] = useState("")
    const [input2, set3] = useState("")

    const [correctStatus, set4] = useState('')
    const [incorrcet, set5] = useState("")

    const fun1 = (set) => {
        setinput(set)
    }
    const fun2 = (name) => {
        setinput1(name)
    }
    function reset() {
        setinput('')
        setinput1('')
        set1('')
        set3('')
        set4('')
        set5('')
    }
    function sumit() {

        if (set == "+" && input1 == "2" && name == "+" && input2 == "2") {
            set4(true)
            set5(false)

        }
        else {
            set4(false)
            set5(true)

        }


    }



    return (
        <div>
        
            <div className="div1">
                <p>X+Y=?</p>
            </div>
            <div className="main">
                <div className="div2" >
                    {set}
                    {input1}
                    <button onClick={() => fun1("+")} disabled={set.length > 0 ? true : false}>+</button>
                    <button onClick={() => fun1("-")} disabled={set.length > 0 ? true : false}>-</button>
                    <button onClick={() => fun1("*")} disabled={set.length > 0 ? true : false}>*</button>
                    <button onClick={() => fun1("/")} disabled={set.length > 0 ? true : false}>/</button>



                </div>
                <input type="text" placeholder="Enter the first number" onChange={(e) => set1(e.target.value)}
                    value={input1} maxLength={1} disabled={set.length > 0 ? true : false}></input>
                <div className="div3">

                    {name}
                    {input2}

                    <button onClick={() => fun2("+")} disabled={name.length > 0 ? true : false}>+</button>
                    <button onClick={() => fun2("-")} disabled={name.length > 0 ? true : false}>-</button>
                    <button onClick={() => fun2("*")} disabled={name.length > 0 ? true : false}>*</button>
                    <button onClick={() => fun2("/")} disabled={name.length > 0 ? true : false}>/</button>

                </div>
                <input type="text" placeholder="Enter the first number" onChange={(e) => set3(e.target.value)}
                    value={input2} maxLength={1} disabled={name.length > 10 ? true : false}></input>
            </div>

            <button className="bu1" onClick={reset}>restet</button>
            <button className="bu2" onClick={sumit}>sumit</button>

            {correctStatus &&

                <div className="conitner">

                    <h2>Correct Answer</h2>

                </div>
            }
            {incorrcet &&
                <div className="coniter1">

                    <h2>Incorrcet Answer</h2>
                </div>
            }
        </div>
    )
}
export default Game;