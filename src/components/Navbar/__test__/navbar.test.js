import React from "react";
import { shallow } from "enzyme";
import Navbar from "../navbar";

describe("Navbar Component", () => {
  let wrapper;
  let mock_props = {};
  const subject = props => shallow(<Navbar {...props} />);

  beforeEach(() => {
    mock_props = {
      onChangeSearch: jest.fn()
    };
  });

  it("renders without crashing", () => {
    shallow(<Navbar {...mock_props} />);
  });

  it("setSelectedMovie is called when movieCard clicked", () => {
    wrapper = subject(mock_props);
    let event = { target: { name: "search2", value: "test on change" } };
    wrapper.find(".navbar__search__inputSearch").simulate("change", event);
    expect(mock_props.onChangeSearch).toHaveBeenCalled();
  });
});
