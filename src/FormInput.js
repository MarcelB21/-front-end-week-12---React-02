import React from 'react'

function FormInput ({Title, Type, Name, messageValue, setMessageValue}) {
    return (
        <form>
            <p>{Title}:</p>
            <input
                type={Type}
                name={Name}
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
            />
        </form>
    )
}

export default FormInput;