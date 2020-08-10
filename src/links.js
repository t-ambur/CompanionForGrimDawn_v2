import React from 'react';
import './companion.css';


// class handles the login page, login reroutes to a confirmation page that displays good login or failed login
// confirmation page will reroute to login to try again

class Links extends React.Component
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
                <h2> Important Links </h2>
                <a href="https://docs.google.com/spreadsheets/d/1EUoW6I5brZDEvlex8UPt2Hvn9jTIejhF8LuVJ2JoESA/edit#gid=0"> Resistance Reduction Cheat Sheet by Reddit's u/DefinitelyNotCeno</a>
                <br/>
                <br/>
                <a href="https://www.grimtools.com/checklist/shrines/normal"> Devotion Shrine Checklist from Grim Tools</a>
                <br/>
                <br/>
                <a href="https://www.grimtools.com/calc/"> Grim Tools Build Calculator</a>
                <br/>
                <br/>
                <a href="https://www.grimtools.com/db/"> Grim Tools Gear Database</a>
                <br/>
                <br/>
                <a href="https://grimdawn.gamepedia.com/Grim_Dawn_Wiki"> Grim Dawn Wiki</a>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Links;
