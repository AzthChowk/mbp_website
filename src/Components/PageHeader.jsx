import React from "react";

const PageHeader = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#DDF2FD",
        backgroundImage: `url("https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundBlendMode: "multiply",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h1 style={{ padding: "50px", color: "#164863", fontSize: "32pt" }}>
          {props.pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
