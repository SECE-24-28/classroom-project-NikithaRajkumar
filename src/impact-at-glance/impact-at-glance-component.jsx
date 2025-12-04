import React from "react";
import { ImpactAtGlanceStyle } from "./impact-at-glance-style";

const ImpactAtGlance = () => {
  return (
    <ImpactAtGlanceStyle>
      <div className="parent">
        <h2>Impact at a Glance</h2>

        {/* Top Row */}
        <div className="row">
          <div className="card pink">
            <p className="details">Colleges</p>
            <p className="numbers">100+</p>
          </div>

          <div className="card blue">
            <p className="details">Students</p>
            <p className="numbers">1,00,000</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row">
          <div className="card green">
            <p className="details">Study Materials</p>
            <p className="numbers">1000+</p>
          </div>

          <div className="card orange">
            <p className="details">Professional Trainers</p>
            <p className="numbers">150</p>
          </div>
        </div>
      </div>
    </ImpactAtGlanceStyle>
  );
};

export default ImpactAtGlance;
