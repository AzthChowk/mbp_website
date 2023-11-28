import React from "react";

const PageHeader = (props) => {
  return (
    <div
      style={{
        paddingTop: "125px",
        backgroundColor: "#f3f3f3",
        // backgroundImage: `url("https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        // backgroundBlendMode: "screen",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h1
          style={{
            padding: "50px",
            color: "#164863",
            fontSize: "32pt",
            fontWeight: "500",
          }}
        >
          {props.pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
