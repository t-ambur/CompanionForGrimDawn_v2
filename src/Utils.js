export function getColor(constellation, resources) {
    const selectedGreen = "#49ff42";
    const availableYellow = "#fff98a";
    const unavailableRed = "#d91818";
    const goalYellow = "#0080FF";
    const goalRed = "#FFAD00";

    if (constellation.isSelected) {
        return selectedGreen
    } else {
        if (isAvailable(constellation.requirements, resources)) {
            if (!constellation.isGoal) {
                return availableYellow
            } else {
                return goalYellow
            }
        } else {
            if (!constellation.isGoal) {
                return unavailableRed
            } else {
                return goalRed
            }
        }
    }
}

export function isAvailable(requirements, resources) {
    return (requirements.ascendant ? resources.ascendant >= requirements.ascendant : true)
        && (requirements.chaos ? resources.chaos >= requirements.chaos : true)
        && (requirements.eldritch ? resources.eldritch >= requirements.eldritch : true)
        && (requirements.order ? resources.order >= requirements.order : true)
        && (requirements.primordial ? resources.primordial >= requirements.primordial : true)
}

export function sort(constellations, resources) {
    return constellations.sort((a, b) => (a.name > b.name) ? 1 : -1)
        .sort((a, b) => (!a.isSelected > b.isSelected) ? 1 : -1)
        .sort((a, b) => {
            if (!a.requirements) {
                return -1
            } else if (!b.requirements) {
                return 0
            } else {
                return (isAvailable(a.requirements, resources) && !isAvailable(b.requirements, resources) ? -1 : 1)
            }
        })
}

export function getPointsUsed(data) {
    return data.filter(constellation => constellation.isSelected).reduce((current, constellation) => current + constellation.points, 0)
}

export function getDependant(resources, data, constellation) {
    let dependant = "";
    let tempResources = {
        ascendant: resources.ascendant - (constellation.rewards.ascendant ? constellation.rewards.ascendant : 0),
        chaos: resources.chaos - (constellation.rewards.chaos ? constellation.rewards.chaos : 0),
        eldritch: resources.eldritch - (constellation.rewards.eldritch ? constellation.rewards.eldritch : 0),
        order: resources.order - (constellation.rewards.order ? constellation.rewards.order : 0),
        primordial: resources.primordial - (constellation.rewards.primordial ? constellation.rewards.primordial : 0)
    };
    data.filter(constellation => constellation.isSelected).forEach(item => {
        if (!isAvailable(item.requirements, tempResources)) {
            dependant = dependant + item.name + "\n"
        }
    });
    return dependant
}

export function getSummary(data, resources, pathHistory) {
    let summary = "";
    summary += "Ascendant: " + resources.ascendant + "\n";
    summary += "Chaos: " + resources.chaos + "\n";
    summary += "Eldritch: " + resources.eldritch + "\n";
    summary += "Order: " + resources.order + "\n";
    summary += "Primordial: " + resources.primordial + "\n";
    summary += "\nActive: \n";
    data.filter(item => {
        return item.isSelected
    }).forEach((item) => {
        summary += "  >" + item.name + "\n"
    });
    summary += "\nPoints Used: " + getPointsUsed(data) + "\n";
    summary += "\nSteps: \n";
    summary += pathHistory;
    return summary
}

export function hasRequirements(constellation) {
    if (constellation.requirements.ascendant > 0)
    {
        return true;
    }
    if (constellation.requirements.chaos > 0)
    {
        return true;
    }  
    if (constellation.requirements.order > 0)
    {
        return true;
    }  
    if (constellation.requirements.primordial > 0)
    {
        return true;
    }  
    if (constellation.requirements.eldritch > 0)
    {
        return true;
    }  
    return false;   
}