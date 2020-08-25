import React from 'react';

import {ReactComponent as IconFeatures247Support } from '../../assets/images/IconFeatures247Support.svg';
import {ReactComponent as IconFeaturesAutomaticPayment } from '../../assets/images/IconFeaturesAutomaticPayment.svg';
import {ReactComponent as IconFeaturesBuyOnline } from '../../assets/images/IconFeaturesBuyOnline.svg';
import {ReactComponent as IconFeaturesCreditCard } from '../../assets/images/IconFeaturesCreditCard.svg';
import {ReactComponent as IconFeaturesDriverExclusion } from '../../assets/images/IconFeaturesDriverExclusion.svg';
import {ReactComponent as IconFeaturesImmediateCoverage } from '../../assets/images/IconFeaturesImmediateCoverage.svg';
import {ReactComponent as IconFeaturesLocalAgent } from '../../assets/images/IconFeaturesLocalAgent.svg';
import {ReactComponent as IconFeaturesLowDownPayment } from '../../assets/images/IconFeaturesLowDownPayment.svg';
import {ReactComponent as IconFeaturesMobile } from '../../assets/images/IconFeaturesMobile.svg';
import {ReactComponent as IconFeaturesNewCarReplacement } from '../../assets/images/IconFeaturesNewCarReplacement.svg';
import {ReactComponent as IconFeaturesNoCreditCheck } from '../../assets/images/IconFeaturesNoCreditCheck.svg';
import {ReactComponent as IconFeaturesNonOwner } from '../../assets/images/IconFeaturesNonOwner.svg';
import {ReactComponent as IconFeaturesOnlineIdCards } from '../../assets/images/IconFeaturesOnlineIdCards.svg';
import {ReactComponent as IconFeaturesOnlineServicing } from '../../assets/images/IconFeaturesOnlineServicing.svg';
import {ReactComponent as IconFeaturesPaperless } from '../../assets/images/IconFeaturesPaperless.svg';
import {ReactComponent as IconFeaturesRateLock } from '../../assets/images/IconFeaturesRateLock.svg';
import {ReactComponent as IconFeaturesRentersBundle } from '../../assets/images/IconFeaturesRentersBundle.svg';
import {ReactComponent as IconFeaturesRideshare } from '../../assets/images/IconFeaturesRideshare.svg';
import {ReactComponent as IconFeaturesRoadside } from '../../assets/images/IconFeaturesRoadside.svg';
import { ReactComponent as IconFeaturesSR22 } from '../../assets/images/IconFeaturesSR22.svg';

import './features.scss';

const Icons = {
  IconFeatures247Support,
  IconFeaturesAutomaticPayment,
  IconFeaturesBuyOnline,
  IconFeaturesCreditCard,
  IconFeaturesDriverExclusion,
  IconFeaturesImmediateCoverage,
  IconFeaturesLocalAgent,
  IconFeaturesLowDownPayment,
  IconFeaturesMobile,
  IconFeaturesNewCarReplacement,
  IconFeaturesNoCreditCheck,
  IconFeaturesNonOwner,
  IconFeaturesOnlineIdCards,
  IconFeaturesOnlineServicing,
  IconFeaturesPaperless,
  IconFeaturesRateLock,
  IconFeaturesRentersBundle,
  IconFeaturesRideshare,
  IconFeaturesRoadside,
  IconFeaturesSR22,
}

const Features = ({ features }) => {
 
  return (
    <div className="features">
      {features.map(({ group_id, icon }) => { 
        const Icon = Icons[icon]
        return (
        <Icon key={group_id} className="feature-icon" />
        )
      })}
    
    </div>
  )
};
 
export default Features;