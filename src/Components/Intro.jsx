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
        Welcome to the heart of innovation in printing technology! At Manakamana
        Binding Press, we pride ourselves on being pioneers in the world of
        printing, where creativity meets precision. As the digital age continues
        to unfold, our printing press stands at the forefront, seamlessly
        blending traditional craftsmanship with cutting-edge technology to bring
        your visions to life. At Manakamana Binding Press, we understand the
        power of print in a digital world. Our commitment is to elevate your
        ideas and messages through the artistry of printing. Whether you're
        looking for bespoke business collateral, captivating marketing
        materials, or unique personal projects, our state-of-the-art printing
        presses and skilled team ensure that every detail is meticulously
        crafted to perfection.
        <br />
        <br />
        Join us on a journey where craftsmanship meets technology, where each
        page tells a story, and each print bears the mark of excellence. Explore
        the possibilities, ignite your creativity, and experience the
        unparalleled quality that sets Manakamana Binding Press apart.
      </p>
    </div>
  );
};

export default Intro;
