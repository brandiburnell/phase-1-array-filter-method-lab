// Code your solution here

function findMatching(driversNames, name) {
    //let lowercaseDriversNames = driversNames.map(driver => driver.toLowerCase());
    //console.log(lowercaseDriversNames);
    const matchingNames = driversNames.filter(item => item.toLowerCase() === name.toLowerCase());
    return matchingNames;
}

function fuzzyMatch(driversNames, letters) {
    const matchingNames = driversNames.filter(name => name.substring(0,2) === letters);
    return matchingNames;
}

function matchName(drivers, person) {
    const matchingName = drivers.filter(driver => driver.name === person);
    return matchingName;
}