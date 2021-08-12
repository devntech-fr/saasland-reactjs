import React from "react";
import AppTeam from "../sections/Team/AppTeam";
import EventTeam from "../sections/Team/EventTeam";
import Team from "../sections/Team/Team";

function TeamSectionsSample() {
    return (
        <div className="body_wrapper">
            <AppTeam/>
            <EventTeam/>
            <Team/>
        </div>
    )
}

export default TeamSectionsSample;
