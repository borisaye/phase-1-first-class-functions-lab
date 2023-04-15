const returnFirstTwoDrivers = function(scuberDrivers){

    return scuberDrivers.slice(0,2);
}

const returnLastTwoDrivers = function(scuberDrivers){

    return scuberDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multpleOf){

    return function(fare){

        return fare * multpleOf;
    }

}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(scuberDrivers, driverSelector){

    return driverSelector(scuberDrivers);
}