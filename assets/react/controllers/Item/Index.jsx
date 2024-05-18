import React, { useEffect, useState } from "react";

export default function Item(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/items");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="pink-stripe">Page Item</div>
      <div className="white-stripe">
        {data.map((item) => (
          <div key={item.id} className="item">
            <h3 className="item-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
