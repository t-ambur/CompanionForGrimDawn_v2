import React from 'react';
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
                <p>
                    If you are having trouble seeing an update listed in this log: clear your cookies and cache for this webpage and refresh the page.
                    <br/>
                    You will always see the latest version if you set your browser to delete cookies for this webpage on browser close.
                </p>
                <h1> Change Log </h1>

                <h3> 08/11/2020 - v0.2.0 </h3>
                <ul>
                    <li> All Devotion Descriptions up to date with Grim Dawn version v1.1.7.2</li>
                    <li> All Devotion Descriptions now show the node sequence when adding points to them</li>
                    <li> All Devotion Descriptions are reformatted </li>
                    <li> Forked and rehosted from https://github.com/andrewsnyder328/CompanionForGrimDawn to https://github.com/t-ambur/CompanionForGrimDawn_v2 </li>
                    <li> Added simple navigation bar/buttons at top of screen (Devotions, Masteries, Links, Change Log) </li>
                    <li> Added some important links</li>
                    <li> Added this change log</li>
                    <li> Updated favicon and website title </li>
                    <li> Structural changes/additions to code to faciliate faster development in the future</li> 
                    <li> CSS coloring changes (Darker)</li>
                </ul>
            </div>
        )
    }
}

export default Changes;
