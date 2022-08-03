import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="sam" timeAgo="1PM" content="xyz" avatar={faker.image.image()}/>
      <CommentDetail author="alex" timeAgo="2PM" content="eyz" avatar={faker.image.image()}/>
      <CommentDetail author="jane" timeAgo="3PM" content="tyz" avatar={faker.image.image()}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));