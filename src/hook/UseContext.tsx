import { createContext, useContext } from "react";

type ComplexObject = {
    kind: string;
}
// The context is created with `| null` in the type, to accurately reflect the default value.
export const Context = createContext<ComplexObject | null>(null);

const useGetComplexObject = () => {
    const object = useContext(Context);
    if (!object) { throw new Error("useGetComplexObject must be used within Provider") }
    return object;
}

export function UseContext() {
    const object = useGetComplexObject();
    return (
        <>
            <p>Current Object: { object.kind }</p>
        </>
    );
}