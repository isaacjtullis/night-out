import React from 'react';

const GenderButton = (props) => {
  let weather = props.weather.map(currentTemp=>{
    return(currentTemp.temp)
  })
  let whatIShouldWear = ""
  if (props.genderNotice === "male" && weather < 30){
    whatIShouldWear = "http://www.gq.com/gallery/what-to-wear-today-december-2016"
  } else if (props.genderNotice === 'male' && weather < 60) {
    whatIShouldWear = "http://www.esquire.com/style/advice/g751/mens-spring-clothing-advice-022411/"
  } else if (props.genderNotice === 'male' && weather < 90) {
    whatIShouldWear = "http://www.primermagazine.com/2015/spend/summer-style-essentials"
  } else if (props.genderNotice === 'female' && weather < 30) {
    whatIShouldWear = "http://www.instyle.com/how-tos/what-to-wear-to-work-winter"
  } else if (props.genderNotice === 'female' && weather < 60) {
    whatIShouldWear = "http://stylecaster.com/casual-spring-outfits/"
  } else if (props.genderNotice === 'female' && weather < 90) {
    whatIShouldWear = "http://www.harpersbazaar.com/summer-fashion/"
  }
  debugger
  return(
    <div>
      <div className="input-group-button">
        <div className="">
          <button type="button" onClick={props.handleMaleClick}>Male</button>
        </div>
      </div>
      <div className="input-group-button">
        <div className="">
          <button type="button" onClick={props.handleFemaleclick}>Female</button>
        </div>
      </div>
      <div>{whatIShouldWear}</div>
    </div>
  )
}

export default GenderButton;
