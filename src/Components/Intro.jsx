import React from "react";
import CustomHeader from "./CustomHeader";

const Intro = () => {
  return (
    <div>
      <CustomHeader title="Introduction" />

      <p
        style={{
          padding: "10px 50px",
          textAlign: "center",
          lineHeight: "2.25rem",
        }}
      >
        As the digital age continues to unfold, Manakamana Binding Press stands
        at the forefront, seamlessly blending traditional craftsmanship with
        cutting-edge technology to bring your visions to life. At Manakamana
        Binding Press, we understand the power of print in a digital world.
        Since from the establishment, in 2014, Our commitment is to elevate your
        ideas and messages through the artistry of printing. Whether you're
        looking for bespoke business collateral, captivating marketing
        materials, or unique personal projects, our state-of-the-art printing
        presses and skilled team ensure that every detail is meticulously
        crafted to perfection.
        <br />
        Join us on a journey. Explore the possibilities, ignite your creativity,
        and experience the unparalleled quality that sets Manakamana Binding
        Press apart.
      </p>
    </div>
  );
};

export default Intro;
