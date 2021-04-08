import React, { useEffect, useState } from 'react';

function NewTransfer({createTransfer}){
    const [transfer, settransfer] = useState(undefined);
    const submit = e => {
        e.preventDefault()
        createTransfer(transfer)
    }

    const updateTransfer = (e, field) => {
        const value = e.target.value;
        setTransfer({...transfer, [field]: value})
    } 
    return(
        <div>
            <h2>Create transfer</h2>
            <from onSubmit={(e) => submit(e)}>
               <label htmlFor="amount">Amount</label> 
               <input
               id="amount"
               type="text"
               onChange={e => updateTransfer(e, 'amount')}
               />
               <label htmlFor="to">Amount</label> 
               <input
               id="to"
               type="text"
               onChange={e => updateTransfer(e, 'to')}
               />
               <button>Submit</button>
               
            </from>
        </div>
    );
}

export default NewTransfer;