import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p>Rokas Kliučinskas</p>
      <p>Kaunas</p>
      <p>{new Date().getFullYear()}</p>
    </div>
  );
}
