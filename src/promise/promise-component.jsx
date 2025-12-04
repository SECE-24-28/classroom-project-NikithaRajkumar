import React from "react";
import { PromiseStyle } from "./promise-component-style";
const PromiseComponent = () => {
  return (
    <PromiseStyle>
      <div>
        <div className="title-subtitle">
          <h2 className="title">Our Promise</h2>
          <p className="subtitle">
            As part of our high quality service, we'd like to offer something
            extra too.
          </p>
        </div>
        <div className="element">
          <div className="sub-element">
            <div className="item">Top code Quality</div>
            <div className="item-content">
              Our commitment goes beyond mere code - it encompasses providing
              solutions. You receive W3C fully compliant markup, without any
              compromise on quality.
            </div>
          </div>
          <div className="sub-element">
            <div className="item">Responsive</div>
            <div className="item-content">
              We understand the value of a positive attitude, timely
              responsiveness, and adaptability. We're dedicated to attentively
              listening and leveraging our utmost capabilities to serve you.
            </div>
          </div>
          <div className="sub-element">
            <div className="item">Rockstar team</div>
            <div className="item-content">
              Our expertise is our unique selling proposition. You'll have
              access to an all-star team of experienced professionals fully
              dedicated to serving you, armed with coding skills that are truly
              exceptional.
            </div>
          </div>
          <div className="sub-element">
            <div className="item">Fast turn arounds</div>
            <div className="item-content">
              The importance of speed is on par with quality for us. We are
              swift, nimble, and capable of providing high-quality code within a
              timeframe that suits your preferences.
            </div>
          </div>
          <div className="sub-element">
            <div className="item">Life-time Support</div>
            <div className="item-content">
              Our commitment to code quality is exemplified by our enduring
              support. If any bugs happen to emerge in the future, feel free to
              reach out to us for assistance.
            </div>
          </div>
          <div className="sub-element">
            <div className="item">Secured Agreement</div>
            <div className="item-content">
              The creative work you receive is entirely your own, and we
              unequivocally respect that. We assure you of our commitment and
              readiness to formalize this with a Non-Disclosure Agreement (NDA).
            </div>
          </div>
        </div>
      </div>
    </PromiseStyle>
  );
};
export default PromiseComponent;
