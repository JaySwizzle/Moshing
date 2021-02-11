//Speed Limit = 70
// 5 -> 1 point
// Math.floor()
// 12 points ---> Suspended

// 5 * 12 = 60 + 70 = 130
checkSpeed(70);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('ok');
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License suspended');
    else
        console.log('License not suspended. Points added:', points);
}
