import React from 'react';

const getSeason=(lat,month)=>{
if(month>2 && month<9){
return lat >0 ? 'summer' :'winter';
}

else{
    return lat >0 ? 'winter' :'summer';
    }

}
const SeasonDisplay =(props)=>{
    const season=getSeason(props.lat,new Date().getMonth())
    const text=  season ==='winter' ? 'booo sarde' :'gar mamemeeeeeeeeeee';
return(
    <>
    <h1>
        {text}
    {/* {season ==='winter' ? 'booo sarde' :'gar mamemeeeeeeeeeee'} */}
    </h1>

    
    </>
)
};

export default SeasonDisplay;