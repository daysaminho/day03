function fillBus(peopleAtBusStops, busSeats) {
    let Passagers = 0; 

    for (let i = 0; i < peopleAtBusStops.length; i++) {
        Passagers += peopleAtBusStops[i]; 

        if (Passagers >= busSeats) { 
            return i; 
        }
    }

    return -1; 
}

console.log(fillBus([1, 3, 10, 1], 12)); 
