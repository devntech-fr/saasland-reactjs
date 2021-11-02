import React, { useEffect } from "react";
import ClockUtils from "components/Coming/ClockUtils";

function ComingClock() {
    useEffect(() => {
        var deadline = new Date(Date.parse(new Date()) + 102 * 36 * 60 * 40 * 400);
        console.log('deadline',deadline);
        ClockUtils.initializeClock('clockdiv',deadline);
    }, []);

    return (
        <div id="clockdiv" className="clock">
            <div className="timer">
                <span className="days"></span>
                <div className="smalltext">Days</div>
            </div>
            <div className="timer">
                <span className="hours"></span>
                <div className="smalltext">Hours</div>
            </div>
            <div className="timer">
                <span className="minutes"></span>
                <div className="smalltext">Minutes</div>
            </div>
            <div className="timer">
                <span className="seconds"></span>
                <div className="smalltext">Seconds</div>
            </div>
        </div>
    )
}

export default ComingClock;
