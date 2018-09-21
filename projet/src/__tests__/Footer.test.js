import React from "react";
import { shallow } from "enzyme";
import Footer from "../components/Footer";

describe("Footer component", () => {
  it("expect to render Footer component", () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
  });

  it("expect not to be updated", () => {
    const comp = shallow(<Footer />);
    const shouldUpdate = comp.instance().shouldComponentUpdate();
    expect(shouldUpdate).toBe(false);
  });
});
