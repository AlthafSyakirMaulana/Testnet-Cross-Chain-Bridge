import React, { useState } from "react";

const TransferForm = ({ onTransfer }) => {
    const [amount, setAmount] = useState("");
    const [targetChain, setTargetChain] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onTransfer(amount, targetChain);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                type="text"
                placeholder="Target Chain"
                value={targetChain}
                onChange={(e) => setTargetChain(e.target.value)}
            />
            <button type="submit">Transfer</button>
        </form>
    );
};

export default TransferForm;