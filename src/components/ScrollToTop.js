import React from "react";
class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  render() {
    return null;
  }
}
export default ScrollToTopOnMount;
