import Home  from "./Home";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import { Suspense } from "react";
<<<<<<< HEAD
// const Admin = React.lazy(()=>import("./Component/Admin/Adminrouting"))

const Admin = React.lazy(()=>import('./Component/Admin/Adminrouting'))
=======
const Pages = React.lazy(()=>import("./Component/Pages/PageRouting"))
>>>>>>> 05b544bc74cb53b5da2d0e1b8128dcff88daea2a
const MainRouting = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Home",
    element:<Home/>
  },
  {
    path:"AdminPanel",
    element:<AdminPanel/>,
    children:[
      {
<<<<<<< HEAD
        path:"Admin/*",
        element:<Suspense fallback={<h1>Loading..</h1>}><Admin/></Suspense>,
=======
        path:"Pages/*",
        element:<Suspense fallback={<h1>Loading..</h1>}><Pages/></Suspense>,
>>>>>>> 05b544bc74cb53b5da2d0e1b8128dcff88daea2a
      }
    ]
  }
])

export default MainRouting;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import AdminPanel from './AdminPanel';
// import PageRouting from './Component/Pages/PageRouting';

// const MainRouting = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/Home" component={Home} />
//         <Route path="/AdminPanel" component={AdminPanel} />
//         <Route path="/AdminPanel/Pages" component={PageRouting} />
//       </Switch>
//     </Router>
//   );
// };

// export default MainRouting;
