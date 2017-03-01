import React from 'react';

const GenderButton = (props) => {
  let weather = props.weather.map(currentTemp=>{
    return(currentTemp.temp)
  })
  let description = ""
  let whatIShouldWear = ""
  if (weather.length !== 1){
    description = "Give us a zipcode so we can give ya good ideas for looking dope."
  } else if (props.genderNotice === "male" && weather < 45){
    description = "It is cold! Best tips for guys to look chill when its chilly. Alright that pun killed us too #corny"
    whatIShouldWear = "http://www.gq.com/gallery/what-to-wear-today-december-2016"
  } else if (props.genderNotice === 'male' && weather < 65) {
    description = "Some springs clothing ideas for the guy who don't know shit"
    whatIShouldWear = "http://www.esquire.com/style/advice/g751/mens-spring-clothing-advice-022411/"
  } else if (props.genderNotice === 'male' && weather < 90) {
    description = "This site is for the guy who wears flip flops with socks. You can do better"
    whatIShouldWear = "http://www.primermagazine.com/2015/spend/summer-style-essentials"
  } else if (props.genderNotice === 'female' && weather < 45) {
    description = "For the ladies, there is sNOw time to be cold. he he. Here are some none punny but great looking styles. (CLICK ME!)"
    whatIShouldWear = "http://www.whowhatwear.com/best-fashion-bloggers-winter-outfit-ideas-2015"
  } else if (props.genderNotice === 'female' && weather < 65) {
    description = "Insert deep quote about being stylish but seriously, you gurl look fine."
    whatIShouldWear = "http://stylecaster.com/casual-spring-outfits/"
  } else if (props.genderNotice === 'female' && weather < 90) {
    description = "Warm and cute and I am a guy so I am not great at writing convincing quotes for girls but still check these styles out :)"
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
