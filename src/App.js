import React, {useState} from 'react';
import './App.css';
import FruitComponent from "./FruitComponent";
import FormInput from "./FormInput";

function App() {

    const [fruitQuantityStrawBerry, setFruitQuantityStrawBerry] = useState(0)
    const [fruitQuantityApple, setFruitQuantityApple] = useState(0)
    const [fruitQuantityBanana, setFruitQuantityBanana] = useState(0)
    const [fruitQuantityKiwi, setFruitQuantityKiwi] = useState(0)

    function resetFunction () {
        setFruitQuantityKiwi(0)
        setFruitQuantityBanana(0)
        setFruitQuantityApple(0)
        setFruitQuantityStrawBerry(0)
    }

    const [messageValueFName, setMessageValueFName] = useState('')
    const [messageValueLName, setMessageValueLName] = useState('')
    const [messageValueHomeAdress, setMessageValueHomeAdress] = useState('')
    const [messageValueRemark, setMessageValueRemark] = useState('')
    const [Age, setAge] = useState('')
    const [Terms, setTerms] = useState('')
    const [delivery, setDelivery] = useState('')
    const [choice, setChoice] = useState('')

    function SEND (e) {
        e.preventDefault()
        console.log(`voornaam: ${messageValueFName} achternaam: ${messageValueLName} Leeftijd: ${Age} \n Postcode: ${messageValueHomeAdress} Opmerkingen:  ${messageValueRemark} \naantal aarbeien: ${fruitQuantityStrawBerry} \naantal appelen: ${fruitQuantityApple} \naantal bananen: ${fruitQuantityBanana} \naantal kiwi's: ${fruitQuantityKiwi}\nbezorgfrequentie: ${delivery}\ntijdvak: ${choice}\nTerms:${Terms}`);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitComponent
                title="fruitsoort: aarbeien "
                Emoji="🍓"
                Type="button"
                fruitQuantity={fruitQuantityStrawBerry}
                setFruitQuantity={setFruitQuantityStrawBerry}
            />
            <FruitComponent
                title="fruitsoort: appel "
                Emoji="🍏"
                Type="button"
                fruitQuantity={fruitQuantityApple}
                setFruitQuantity={setFruitQuantityApple}
            />
            <FruitComponent
                title="fruitsoort: banaan "
                Emoji="🍌"
                Type="button"
                fruitQuantity={fruitQuantityBanana}
                setFruitQuantity={setFruitQuantityBanana}
            />
            <FruitComponent
                title="fruitsoort: kiwi "
                Emoji="🥝"
                Type="button"
                fruitQuantity={fruitQuantityKiwi}
                setFruitQuantity={setFruitQuantityKiwi}
            />
            <button onClick={() => resetFunction()}>RESET</button>

            <form>
                <FormInput
                    Title="Voornaam"
                    Type="text"
                    Name="firstName"
                    messageValue={messageValueFName}
                    setMessageValue={setMessageValueFName}
                />
                <FormInput
                    Title="Achternaam"
                    Type="text"
                    Name="lastName"
                    messageValue={messageValueLName}
                    setMessageValue={setMessageValueLName}
                />
                <FormInput
                    Title="Leeftijd"
                    Type="number"
                    Name="Age"
                    messageValue={Age}
                    setMessageValue={setAge}
                />
                <FormInput
                    Title="Postcode"
                    Type="text"
                    Name="homeAdress"
                    messageValue={messageValueHomeAdress}
                    setMessageValue={setMessageValueHomeAdress}
                />
                <form>
                    <p>Bezorg frequentie:</p>
                    <select id="delivery" value={delivery} onChange={(e) => setDelivery(e.target.value)}>
                        <option value="every week">iedere week </option>
                        <option value="every other week">om de week </option>
                        <option value="every month">iedere maand </option>
                    </select>

                </form>
                <form>
                    <input type="radio" name="choice" value="morning" id="choice-morning" checked={choice === "morning"} onChange={(e) => setChoice(e.target.value)}/>
                    <label htmlFor="choice-morning">Overdag</label>
                    <input type="radio" name="choice" value="evening" id="choice-evening" checked={choice === "evening"} onChange={(e) => setChoice(e.target.value)}/>
                    <label htmlFor="choice-evening">'s Avonds</label>

                </form>
                <p>Opmerkingen:</p>
                <textarea
                    rows={7}
                    cols={28}
                    name="MessageFromCostumer"
                    value={messageValueRemark}
                    onChange={(e) => setMessageValueRemark(e.target.value)}
                />
                <p>Ik ga akkoord met de algemene voorwaarden</p>
                <input
                    type="checkbox"
                    name="Terms-and-Conditions"
                    id="Terms-and-Conditions"
                    value={Terms}
                    onChange={(e) => setTerms(e.target.checked)}
                />
                <button onClick={SEND}>VERZEND</button>
            </form>
        </>
    );
}

export default App;
