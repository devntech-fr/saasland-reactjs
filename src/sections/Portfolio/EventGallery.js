import React from 'react';
import EventGalleryItem from './EventGalleryItem';

const EventGallery = ({ children }) => {
    return(
        <section className="event_gallery_area">
            <div className="row m0 portfolio_gallery event_gallery">
                {children}
            </div>
        </section>
    )
}
export default EventGallery;
