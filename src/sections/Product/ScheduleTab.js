import React, { Component } from "react";
import RichContent from "components/Content/RichContent";
import ScheduleRow from "components/Event/ScheduleRow";
import ScheduleTabContent from "components/Event/ScheduleTabContent";
import ScheduleNavItem from "components/Event/ScheduleNavItem";
import ScheduleNav from "components/Event/ScheduleNav";

class ScheduleTab extends RichContent {
  render() {
    return (
        <section className="event_schedule_area sec_pad">
          <div className="container">
            <div className="hosting_title security_title text-center">
              <h2 dangerouslySetInnerHTML={this.displayTitle()}></h2>
            </div>
            <div className="event_schedule_inner">
              <ScheduleNav>
                <ScheduleNavItem
                    identifier={`one`}
                    isSelected={true}
                    title={`Day 1`}
                    date={`Feb 20, 2019`}
                />
                <ScheduleNavItem
                    identifier={`two`}
                    isSelected={false}
                    title={`Day 2`}
                    date={`Feb 22, 2019`}
                />
                <ScheduleNavItem
                    identifier={`three`}
                    isSelected={false}
                    title={`Day 3`}
                    date={`Feb 25, 2020`}
                />
              </ScheduleNav>
              <div className="tab-content event_tab_content">
                <ScheduleTabContent
                    identifier={`one`}
                    isActive={true}
                >
                  <ScheduleRow
                      image={{
                        src: '/img/home-event/conference.jpg',
                        alt: 'Conférence'
                      }}
                      hours={`10:30 - 12:30 AM`}
                      location={`Room 2`}
                      title={`The future of the UI/UX`}
                      author={`Hanson Deck`}
                      description={`Lost the plot lurgy on your bike mate Oxford hanky panky
                    blow off haggle golly gosh do one, is tosser car boot
                    knees.`}
                  />
                  <ScheduleRow
                      image={{
                        src: '/img/home-event/conference.jpg',
                        alt: 'Conférence'
                      }}
                      hours={`10:30 - 12:30 AM`}
                      location={`Room 2`}
                      title={`The future of the UI/UX`}
                      author={`Hanson Deck`}
                      description={`Lost the plot lurgy on your bike mate Oxford hanky panky
                    blow off haggle golly gosh do one, is tosser car boot
                    knees.`}
                  />
                  <ScheduleRow
                      image={{
                        src: '/img/home-event/conference.jpg',
                        alt: 'Conférence'
                      }}
                      hours={`10:30 - 12:30 AM`}
                      location={`Room 2`}
                      title={`The future of the UI/UX`}
                      author={`Hanson Deck`}
                      description={`Lost the plot lurgy on your bike mate Oxford hanky panky
                    blow off haggle golly gosh do one, is tosser car boot
                    knees.`}
                  />
                </ScheduleTabContent>
                <ScheduleTabContent
                    identifier={"two"}
                >
                  <ScheduleRow
                      image={{
                        src: '/img/home-event/conference.jpg',
                        alt: 'Conférence'
                      }}
                      hours={`10:30 - 12:30 AM`}
                      location={`Room 2`}
                      title={`The future of the UI/UX`}
                      author={`Hanson Deck`}
                      description={`Lost the plot lurgy on your bike mate Oxford hanky panky
                    blow off haggle golly gosh do one, is tosser car boot
                    knees.`}
                  />
                  <ScheduleRow
                      image={{
                        src: '/img/home-event/conference.jpg',
                        alt: 'Conférence'
                      }}
                      hours={`10:30 - 12:30 AM`}
                      location={`Room 2`}
                      title={`The future of the UI/UX`}
                      author={`Hanson Deck`}
                      description={`Lost the plot lurgy on your bike mate Oxford hanky panky
                    blow off haggle golly gosh do one, is tosser car boot
                    knees.`}
                  />
                  <ScheduleRow
                      image={{
                        src: '/img/home-event/conference.jpg',
                        alt: 'Conférence'
                      }}
                      hours={`10:30 - 12:30 AM`}
                      location={`Room 2`}
                      title={`The future of the UI/UX`}
                      author={`Hanson Deck`}
                      description={`Lost the plot lurgy on your bike mate Oxford hanky panky
                    blow off haggle golly gosh do one, is tosser car boot
                    knees.`}
                  />
                </ScheduleTabContent>
                <ScheduleTabContent
                    identifier={`three`}
                >
                  <ScheduleRow
                      image={{
                        src: '/img/home-event/conference.jpg',
                        alt: 'Conférence'
                      }}
                      hours={`10:30 - 12:30 AM`}
                      location={`Room 2`}
                      title={`The future of the UI/UX`}
                      author={`Hanson Deck`}
                      description={`Lost the plot lurgy on your bike mate Oxford hanky panky
                    blow off haggle golly gosh do one, is tosser car boot
                    knees.`}
                  />
                  <ScheduleRow
                      image={{
                        src: '/img/home-event/conference.jpg',
                        alt: 'Conférence'
                      }}
                      hours={`10:30 - 12:30 AM`}
                      location={`Room 2`}
                      title={`The future of the UI/UX`}
                      author={`Hanson Deck`}
                      description={`Lost the plot lurgy on your bike mate Oxford hanky panky
                    blow off haggle golly gosh do one, is tosser car boot
                    knees.`}
                  />
                  <ScheduleRow
                      image={{
                        src: '/img/home-event/conference.jpg',
                        alt: 'Conférence'
                      }}
                      hours={`10:30 - 12:30 AM`}
                      location={`Room 2`}
                      title={`The future of the UI/UX`}
                      author={`Hanson Deck`}
                      description={`Lost the plot lurgy on your bike mate Oxford hanky panky
                    blow off haggle golly gosh do one, is tosser car boot
                    knees.`}
                  />
                </ScheduleTabContent>
              </div>
            </div>
          </div>
        </section>
    );
  }
}
export default ScheduleTab;
