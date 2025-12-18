let findTheOldest = function(people) {
    let today = new Date
    let thisYear = today.getFullYear();
    for (person of people) {
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = thisYear;
        }
        person.lifespan = person.yearOfDeath - person.yearOfBirth;
    }
    let sortedLifespan = people.sort((a, b) => a.lifespan - b.lifespan);
    return sortedLifespan.at(sortedLifespan.length - 1);
};

// Do not edit below this line
module.exports = findTheOldest;
