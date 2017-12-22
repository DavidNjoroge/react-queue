import React from "react";

class MyStyledComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {exampleBooleanStateValue:false}
    }
    render(){
        var MyStyledComponentStyles = {
            backgroundColor: "#ecf0f1",
            fontFamily: "sans-serif",
            paddingTop:"50px"
        }
        return (
            <div style={MyStyledComponentStyles}>
            <h1>Hey im a component</h1>
            <h2>But theres something different about me</h2>
            <h3>Unlike other components you've worked with thus far....</h3>
            <h4>I also include custom CSS styles!</h4>
            <p>Pretty cool, right</p>
        </div>
        )
    }
}
// function MyStyledComponent(props){
    // var MyStyledComponentStyles = {
    //     backgroundColor: "#ecf0f1",
    //     fontFamily: "sans-serif",
    //     paddingTop:"50px"
    // }
//     return (
//         <div style={MyStyledComponentStyles}>
//             <h1>Hey im a component</h1>
//             <h2>But theres something different about me</h2>
//             <h3>Unlike other components you've worked with thus far....</h3>
//             <h4>I also include custom CSS styles!</h4>
//             <p>Pretty cool, right</p>
//         </div>
//     )
// }

export default MyStyledComponent;