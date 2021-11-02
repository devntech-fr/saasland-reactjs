import React from "react";
import CloudServiceTabItem from "sections/Service/Sservice/CloudServiceTabItem";

function ServiceTabContentItem() {
    return (
        <div className="tab-pane fade show active" id="de" role="tabpanel" aria-labelledby="de-tab">
            <div className="row">
                <img src={`/img/image_test.png`} alt={`logo`} height={600}/>
                <CloudServiceTabItem ticon="ti-user" text="Team Management" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                <CloudServiceTabItem colClass="offset-lg-2" ticon="ti-basketball" text="Global Availability" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                <CloudServiceTabItem ticon="ti-face-smile" text="Cluster Deployments" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
                <CloudServiceTabItem colClass="offset-lg-2" ticon="ti-harddrives" text="Backups & Snapshots" description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."/>
            </div>
        </div>
    )
}
