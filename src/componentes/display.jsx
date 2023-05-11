import React from 'react';

import '../css/display.css';

const flecha = (props) =>
{
    // return <div className="display"> <label id="pri_display" className="pri_display"> {props.str} </label> <label id="sec_display" className="sec_display"> </label> </div>;
    return <div className="display"> <input type="text" id="pri_display" className="pri_display" value={props.str} disabled/> <label id="sec_display" className="sec_display"> </label> </div>;
}

export default flecha;
