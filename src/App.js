

// // 
// // import React from 'react';
// // import Navbar from './components/Navbar';

// // import { Main } from './components/Main';
// // import { Sidebar1 } from './components/Sidebar1';
// // import { Sidebar2 } from './components/Sidebar2';
// // import { Footer } from './components/Footer';
// // const App = () => {
// //   return (
// //     <div className='app'>
// //       <Navbar />
// //       <Main />
// //       <div className='sidebar'>
// //         <Sidebar1 />
// //         <Sidebar2 />
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default App;
// // import React, { Component } from 'react'

// // import FBCPropEx from './propsex/FBCPropEx';


// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         {/* <CBCPropEx
// //         username="rishika"
// //         age={20}
// //         hobbies={["playing" , "reading"]}
// //         address={{city:"hyderabad", area:"kompally"}}
// //         sendFun={function(){alert("hi i am rishika")}}
// //         /> */}
// //          <FBCPropEx
// //           username="rishika"
// //           isMarried={false}
// //           hobbies={["Chatting","Reading","Eating","Sleeping"]}
// //         />
// //       </div>
// //     );
// //   }
// // }
// import React, { Component } from 'react'
// class CBCPropEx extends Component {
//   constructor(){
//     super();
//     this.state={
//       users:["Rishika" , "615" , "Varshini" , "sadvi"],
//       num:100
//     };
//   }
//   changeNumber=()=>{
//     this.setState({num:200})
//   }
//   render() {
//     console.log(this);
//     return (
//       <div>
//         {
//           this.state.users.map((user , i)=>{
//             return <li key={i}>{user}</li>
//           })
//         }
//         <h1>{this.state.num}</h1>
//         <button onClick={this.changeNumber}>Change number</button>
//       </div>
//     )
//   }
// }

import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
    return (
        <div>
            {/* Passing props to FunctionalComponent */}
            <FunctionalComponent apply={true} clgName="ExcelR">
                Students
            </FunctionalComponent>
        </div>
    );
}

export default App;

