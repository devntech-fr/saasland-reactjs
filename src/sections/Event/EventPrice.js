import React from "react";
import { displayTitle } from "components/Content/RichContent";
import PricingPlan from "components/Event/PricingPlan";

const EventPrice = ({ title }) => {
  return (
    <section className="event_price_area sec_pad">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2 dangerouslySetInnerHTML={displayTitle(title)}></h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6">
            <PricingPlan
                label={`Starter`}
                popular={true}
                currency={`€`}
                price={59.99}
                buttonLink={{
                  href: '/#',
                  target: '_self',
                  label: 'Buy'
                }}
                features={[
                  {
                    id: 1,
                    label: 'All Lite features',
                    included: true,
                  },
                  {
                    id: 2,
                    label: 'Unlimited contacts',
                    included: true,
                  },
                  {
                    id: 3,
                    label: 'Remove Sendinblue',
                    included: false,
                  },
                  {
                    id: 4,
                    label: 'Logo from emails',
                    included: false,
                  },
                  {
                    id: 5,
                    label: 'Advanced statistics',
                    included: true,
                  },
                ]}
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <PricingPlan
                label={`Business`}
                currency={`€`}
                price={559.99}
                buttonLink={{
                  href: '/#',
                  target: '_self',
                  label: 'Buy'
                }}
                features={[
                  {
                    id: 1,
                    label: 'All Lite features',
                    included: true,
                  },
                  {
                    id: 2,
                    label: 'Unlimited contacts',
                    included: true,
                  },
                  {
                    id: 3,
                    label: 'Remove Sendinblue',
                    included: false,
                  },
                  {
                    id: 4,
                    label: 'Logo from emails',
                    included: false,
                  },
                  {
                    id: 5,
                    label: 'Advanced statistics',
                    included: true,
                  },
                ]}
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <PricingPlan
                label={`Platinum`}
                currency={`€`}
                price={5559.99}
                buttonLink={{
                  href: '/#',
                  target: '_self',
                  label: 'Buy'
                }}
                features={[
                  {
                    id: 1,
                    label: 'All Lite features',
                    included: true,
                  },
                  {
                    id: 2,
                    label: 'Unlimited contacts',
                    included: true,
                  },
                  {
                    id: 3,
                    label: 'Remove Sendinblue',
                    included: false,
                  },
                  {
                    id: 4,
                    label: 'Logo from emails',
                    included: false,
                  },
                  {
                    id: 5,
                    label: 'Advanced statistics',
                    included: true,
                  },
                ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventPrice;
