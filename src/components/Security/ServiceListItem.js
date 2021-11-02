import React from "react";

function ServiceListItem({ span, p }) {
    return (
        <React.Fragment>
            <span>{span.toUpperCase()} {p ? ': ' : ''}</span>
            <p>{p}</p>
        </React.Fragment>
    )
}

export default ServiceListItem;

ServiceListItem.defaultProps = {
    span: 'Access our data anywhere:',
    p: 'James Bond Queen\'s English mufty it\'s all gone to pot bobby elizabeth.'
}
