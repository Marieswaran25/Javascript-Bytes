function chicken(egg) {
    return egg();
    }
    function egg() {
        return ('Egg function')
    }
    console.log(chicken(egg) + " came first.");

