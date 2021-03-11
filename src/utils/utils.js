// this function will read the rawSystem text file and give me an array of all systems

const getAllSystems = (systemsObject) => {
    const systemsArray = []
    for (let pair in systemsObject) {
        systemsArray.push(pair)
    }
    return systemsArray;
}


// this function will read the rawSystem text file and create a lookup object. ideally I'd like to write that lookup object into it's own file


module.exports = { getAllSystems };