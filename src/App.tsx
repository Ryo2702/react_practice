import { useMemo } from "react";
import { Context } from "./hook/UseContext";
import { UseContext } from "./hook/UseContext";

export default function App() {
  const object = useMemo(() => ({ kind: "complex" }), []);

  return (
    <Context value={object}>
      <UseContext/>
    </Context>
  )
}
