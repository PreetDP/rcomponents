import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
   
    <div className="ui container comments">
      <ApprovalCard>
        <h1>Warning!</h1>
        Are you sure?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="sam" timeAgo="1PM" content="xyz" avatar={faker.image.image()}/>
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail author="alex" timeAgo="2PM" content="eyz" avatar={faker.image.image()}/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="jane" timeAgo="3PM" content="tyz" avatar={faker.image.image()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));