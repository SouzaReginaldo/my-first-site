function showNumbers(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number' || isNaN(start) || isNaN(end)) {
        console.log("Please provide numeric parameters.");
        return;
    }

    if (start === end) {
        console.log(`The numbers are equal: ${start}`);
        return;
    }

    if (start > end) {
        for (let i = start; i >= end; i--) {
            console.log(i);
3    }
    } else {
        for (let i = start; i <= end; i++) {
            console.log(i);
        }
    }
}

showNumbers(0, 1000);
showNumbers(1000, 0);
showNumbers(100, 100);
showNumbers("100", 300);
