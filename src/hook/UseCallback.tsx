import React, { useCallback, useState } from "react";

export function Form() {
    const [value, setValue] = useState("Change me");


    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        setValue(event.currentTarget.value);
    }, [setValue])


    return (
        <>
            <input value={value} className="input" onChange={handleChange} />
            <p >Value: {value}</p>
        </>
    );
}