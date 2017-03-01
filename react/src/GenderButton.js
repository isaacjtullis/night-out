import React from 'react';

const GenderButton = (props) => {
  let weather = props.weather.map(currentTemp=>{
    return(currentTemp.temp)
  })
  let description = ""
  let whatIShouldWear = ""
  if (props.genderNotice === "male" && weather < 45){
    description = "It is cold! Best tips for guys to look chill when its chilly. Alright that pun killed us to #corny"
    whatIShouldWear = "http://www.gq.com/gallery/what-to-wear-today-december-2016"
  } else if (props.genderNotice === 'male' && weather < 65) {
    description = "Some springs clothing ideas for the guy who don't know shit"
    whatIShouldWear = "http://www.esquire.com/style/advice/g751/mens-spring-clothing-advice-022411/"
  } else if (props.genderNotice === 'male' && weather < 90) {
    description = "This site is for the guy who wears flip flops with socks. You can do better"
    whatIShouldWear = "http://www.primermagazine.com/2015/spend/summer-style-essentials"
  } else if (props.genderNotice === 'female' && weather < 45) {
    description = "Stay warm and stylish. It is possible."
    whatIShouldWear = "http://www.instyle.com/how-tos/what-to-wear-to-work-winter"
  } else if (props.genderNotice === 'female' && weather < 65) {
    description = "Insert deep quote about being stylish but seriously, these are some great outfits for the weather right now"
    whatIShouldWear = "http://stylecaster.com/casual-spring-outfits/"
  } else if (props.genderNotice === 'female' && weather < 90) {
    description = "Warm and cute. Check these styles out :)"
    whatIShouldWear = "http://www.harpersbazaar.com/summer-fashion/"
  }
  return(
    <div className="buttons">
      <div className="male-button">
        <div className="">
          <button type="button" onClick={props.handleMaleClick}><i className="fa fa-male fa-3x" aria-hidden="true"></i></button>
        </div>
      </div>
      <div className="female-button">
        <div className="">
          <button type="button" onClick={props.handleFemaleclick}><i className="fa fa-female fa-3x" aria-hidden="true"></i></button>
        </div>
      </div>
      <div className="clothing-ideas">
        <a href={whatIShouldWear}>{description}</a>
      </div>
    </div>
  )
}

export default GenderButton;
