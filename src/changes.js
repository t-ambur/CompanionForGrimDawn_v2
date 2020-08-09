import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './companion.css';


// class handles the login page, login reroutes to a confirmation page that displays good login or failed login
// confirmation page will reroute to login to try again

class Changes extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
        };
    }

    render() {
        return(
            <div>
                <h1> Change Log </h1>

                <h3> 08/09/2020 - v0.2.0 </h3>
                <ul>
                    <li> Devotions up to date with Grim Dawn version </li>
                    <li> Forked and rehosted from https://github.com/andrewsnyder328/CompanionForGrimDawn to https://github.com/t-ambur/CompanionForGrimDawn_v2 </li>
                    <li> Added simple navigation bar/buttons at top of screen (Devotions, Masteries, Change Log) </li>
                    <li> Updated favicon and website title </li>
                    <li> Structural changes/additions to code to faciliate faster development in the future</li> 
                </ul>
            </div>
        )
    }
}

export default Changes;
