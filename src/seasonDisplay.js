import React from 'react';
import config from './config'
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }

    else {
        return lat > 0 ? 'winter' : 'summer';
    }

}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
   // const text = season === 'winter' ? 'booo sarde' : 'gar mamemeeeeeeeeeee';
  //  const icon = season === 'winter' ? 'snowflake' : 'sun';

       const {text,icon}= config[season]
           return (
        <>
            <h1>
                <i className={`${icon} icon`}/>

                
                {text}
                <i className={`${icon} icon`}/>

                
                {/* {season ==='winter' ? 'booo sarde' :'gar mamemeeeeeeeeeee'} */}
            </h1>
        </>
    )
};

export default SeasonDisplay;