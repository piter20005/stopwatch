// //Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);

//Constructor Function

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {
        x: 0,
        y: 0
    };

    let computeOptimumuLocation = function () {

    }
    this.draw = function () {
        computeOptimumuLocation();

        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.');

            defaultLocation = value;
        }
    })

}

const circle = new Circle(10);

function Stopwatch() {

    let starTime, endTime, duration, runnig;

    this.start = function () {
        if (runnig)
            throw new Error("The stopwatch is already running")
        startTime = new Date();
        console.log(startTime);
    };

    this.stop = function () {
        if (!runnnig)
            throw new Error("The stopwatch is not started");
        runnig = false;
        let endTime = new Date();
        duration = (endTime.getTime() - startTime.getTime()) / 1000;
        console.log(duration);
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        runnig = false;
        duration = 0;
    };
}

const sw = new Stopwatch();