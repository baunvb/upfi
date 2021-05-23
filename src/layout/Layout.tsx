import "./layout.css"
import React from "react"
import { Switch, Route, Redirect } from "react-router-dom";
import { Routers } from "../router/Routers";
import Sidebar from "../component/sidebar/Sidebar";
import Header from "../component/header/Header";

const switchRoutes = (
    <Switch>
      {Routers.map((e, key) => {
        return <Route exact path={e.path} component={e.component} key={key} />;
      })}
    </Switch>
  );
  

export default function Layout(props: any) {
    return (
        <div className="layout">
            <div className="layout-sidebar">
                <Sidebar/>
            </div>
            <div className="layout-content">
                <Header/>
                <div>
                {switchRoutes}
                </div>
            </div>
        </div>
    )
}