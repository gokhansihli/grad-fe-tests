import { useState } from "react";
import "./findX.css";

export default function FindX() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>You have found X {count} times!</h3>
      <table className="table-container"></table>
    </div>
  );
}
