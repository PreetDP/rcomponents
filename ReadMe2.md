//Props: 
System for passing data from parent to child component.
Goal is to customize or configure a child component.
Here we have two stages: 1) we provide information from parent to child,
<!-- Example: in index.js we have <CommentDetails author="sam"/> -->
Here we have name of prop author with value sam.
2) then child consumes or make use of it
<!-- in CommentDetail commponent we pass props and added {props.author} which consumes passed data-->
//Goal of components is to show some content to the user or react to user interaction.
