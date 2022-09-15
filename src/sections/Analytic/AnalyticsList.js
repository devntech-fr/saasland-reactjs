import React from 'react';
import {displayTitle, displayParagraph} from "components/Content/RichContent";

function AnalyticsList({ title, p, list }) {
    return(
        <section className="analytices_list_area security_list_area">
            <img className="macbook_a" src={"/img/home-security/mackbook.png"} alt=""/>
            <img className="lock" src={"/img/home-security/padlock.png"} alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hosting_title analytices_title">
                            <h2 dangerouslySetInnerHTML={displayTitle(title)}></h2>
                            <p dangerouslySetInnerHTML={displayParagraph(p)}></p>
                        </div>
                        <ul className="analytices_list">
                            {list.map((item, key) => {
                                return <li key={key}>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnalyticsList;

AnalyticsList.defaultProps = {
    title: `<span>Protect what’s</span>yours with Internet Security`,
    p: `Nancy boy brown bread get stuffed mate a matie boy I grub cheeky horse play bobby argy-bargy loo, fantastic cockup pukka William bum bag the little rotter arse over tit cuppa.!`,
    list: ['Client accounts', 'Visitor & Keyword-level tracking', 'Unlimited user accounts', 'Email summaries']
}
