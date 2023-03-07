let stopwatch = {
  startime: 0,
  endtime: 0,
  duration: 0,
  reset: false,
  runnings: false,
  start() {
    return !this.runnings
      ? ((this.runnings = true), (this.startime = new Date()))
      : ((this.runnings = false), "cannot start already running");
  },
  stop() {
    return this.runnings
      ? ((this.runnings = false), (this.endtime = new Date()))
      : ((this.runnings = true), "cannot stop,stopwatch is not running");
  },
  duration() {
    this.duration = (this.endtime - this.startime) / 1000;
    return this.duration + " seconds";
  },
};
console.log(stopwatch.start());
setTimeout(() => {
  console.log(stopwatch.stop());
  console.log(stopwatch.duration());
}, 3000);

class Stopwatch {
  startime = 0;
  endtime = 0;
  duration = 0;
  reset = false;
  runnings = false;
  start() {
    if (!this.runnings) {
      this.runnings = true;
      return (this.startime = new Date());
    } else {
      this.runnings = false;
      return "cannot start already running";
    }
  }

  stop() {
    return this.runnings
      ? ((this.runnings = false), (this.endtime = new Date()))
      : ((this.runnings = true), "cannot stop,stopwatch is not running");
  }
  findduration() {
    console.log(this.startime, this.endtime);
    this.duration = (this.endtime - this.startime) / 1000;
    return this.duration + " seconds";
  }
}

const newobj = new Stopwatch();
console.log(newobj.start());

setTimeout(() => {
  console.log(newobj.stop());
  console.log(newobj.findduration());
}, 3000);
