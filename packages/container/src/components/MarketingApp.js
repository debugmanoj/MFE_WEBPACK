import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
export default () => {
  useEffect(() => {
    mount(ref.current);
  });
  const ref = useRef(null);
  return <div ref={ref} />;
};


// Intha approach yen use panrom na vera framework code iruntha kooda atha render pannidum for example child app vue iruntha kooda render pannum