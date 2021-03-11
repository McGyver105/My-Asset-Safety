const { destinationLookup } = require('../db/rawSystems')

// this function will read the rawSystem text file and give me an array of all systems

const getAllSystems = (systemsObject) => {
    const systemsArray = []
    for (let pair in systemsObject) {
        systemsArray.push(pair)
    }
    return systemsArray;
}

// this function will read the rawSystem text file and return the destination system

const getDestination = (origin) => {
    return destinationLookup[origin];
}

module.exports = { getAllSystems, getDestination };