import React from "react";
import { shallow } from "enzyme";
import App from "../src/App";

describe("Testing App Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
