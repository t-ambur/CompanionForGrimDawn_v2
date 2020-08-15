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
            <div id="textBlock">
                <p>
                    This website loads better on mobile if you force 'Desktop' layout in your browser.
                    <br/>
                    <br/>
                    If you are having trouble seeing an update listed in this log: clear your cookies and cache for this webpage and refresh the page.
                    <br/>
                    You will always see the latest version if you set your browser to delete cookies for this webpage on browser close.
                    <br/>
                    <br/>
                    Only the base directory (/CompanionForGrimDawn_v2) is connected to the internet. Trying to load this page or the 'Links' page directly will not work on github.io.
                </p>
                <h1> Change Log </h1>

                <h3> 8/15/2020 - v0.2.4 </h3>
                <ul>
                    <li> Buttons no longer overlap header </li>
                    <li> Cleaned up dead code leftover from UI change </li>
                    <li> Minor CSS changes </li>
                </ul>

                <h3> 8/14/2020 - v0.2.3 </h3>
                <ul>
                    <li> Finally fixed the search bar bug and restored the search bar to the app </li>
                </ul>

                <h3> 8/14/2020 - v0.2.2 </h3>
                <ul>
                    <li> Removed mastery option from nav bar (grim tools already does this) </li>
                    <li> Updated UI </li>
                    <li> Fixed primordials not showing requirements </li>
                    <li> temporary removed search bar as it is beyond broken at this point</li>
                </ul>

                <h3> 08/11/2020 - v0.2.1 </h3>
                <ul>
                    <li> Correct Reward to Staff </li>
                    <li> I am aware of the Search bug (refresh as a workaround) and some primordials not displaying required amount properly</li>
                </ul>

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
