//LogicalOperators-RocketExample
/*
1.rocket can launch if it's not raining
2.rocket can launch if it's not snowing
3.wind speed is less than 20 km/hr.
 */
let isSnowing = false;
let isRaining =false;
let  windSpeed = 17;

let rocketLaunch= (isSnowing === false) && (isRaining === false) && (windSpeed <20);
alert(rocketLaunch);
