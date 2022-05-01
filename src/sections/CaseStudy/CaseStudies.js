import React from "react";
import SeoTitle from "sections/Title/SeoTitle";
import StudySlider from "sections/Product/StudySlider";

function CaseStudies({ title, p, case_collection }) {
    return (
        <section className="case_studies_area sec_pad" id="#portfolio">
            <div className="container">
                <SeoTitle title={title} p={p}/>
                <StudySlider
                    cases={case_collection}
                />
            </div>
        </section>
    )
}

export default CaseStudies
