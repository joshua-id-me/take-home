import React, { useState, useEffect } from "react";
import PurchasesTable from "../components/PurchaseTable";

const App = () => {
  const [Header, setHeader] = useState("Purchases");
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    fetch(
      "https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json",
    )
      .then((response) => response.json())
      .then((json) => setPurchases(json));
  }, []);

  return (
    <div>
      <h1>{Header}</h1>
      {<PurchasesTable purchases={purchases} />}
    </div>
  );
};

export default App;
