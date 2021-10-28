import React from 'react'
import { BrowserRouter, Switch, Route , Link } from "react-router-dom";

const RouterDemo = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/services" component={Services} />
            </Switch>
        </BrowserRouter> 
        </>
    )
}

const Home = () => {
    return(
        <>
            <h1>Hello Home components</h1>
            <h5><Link to="services">Services</Link></h5>
        </>
    )
}

const Services = ({match, history, location}) => {
    // console.log(match)
    // console.log(history)
    // console.log(location)
    return(
        <>
            <h1>Hello Services components</h1>
            <ul>
                <li><Link to={`${match.path}/web-designing`}>Web Designing</Link></li>
                <li><Link to={`${match.path}/web-development`}>Web Development</Link></li>
                <li><Link to={`${match.path}/seo-services`}>SEO Services</Link></li>
                <li><Link to={`${match.path}/mobile-app-development`}>Mobile App Development</Link></li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:slug`} component={service} />
            </Switch>
        </>
    )
}

const service = ({match}) => {
    console.log(match)
    return(
        <>
            <h3>This is web-designing Service pages</h3>
            <h5>Service Name: {match.params.slug}</h5>
        </>
    )
}


export default RouterDemo;
