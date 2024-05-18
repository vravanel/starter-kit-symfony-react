import React from "react";

export default function Main(props) {
  return (
    <>
      <h1 className="pink-stripe">Hello {props.fullName}</h1>
      <div className="white-stripe">
        <h2 className="item-title">
          <a href="/item">Page Item</a>
        </h2>
      </div>
    </>
  );
}
