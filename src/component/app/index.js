import React, { Component } from "react";
import ReactDOM from "react-dom";
import ListComponent from "../../component/list-component";
import Header from "../../component/header";
import Footer from "../../component/footer";

class AppComponent extends Component {
  render() {
    let props = {
      title: "React Training",
      list: ["chocolate", "vanilla", "strawberry", "mango"],
      footer: "Copyright@Sapient"
    };
    return (
      <div>
        <Header {...props} />
        <ListComponent {...props} />
        <Footer {...props} />
      </div>
    );
  }
}

export default AppComponent;
