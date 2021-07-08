class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;}
  

  start(callback) {
    this.intervalId = setInterval(()=>{
      if (callback !== undefined) {
        callback();
      }
      this.currentTime+=1;
    },1000);
    }
    
   
    
    // ... your code goes here
  

  getMinutes() {

    return Math.floor(this.currentTime/60);
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60;

    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if(value<10){
      return'0' +value;
    } else {
      return value.toString();
    }
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime =0;
    // ... your code goes here
  }


  split() {
    let seconds= this.getSeconds();
    let minutes = this.getMinutes ();

    let secondAsString = this.computeTwoDigitNumber (seconds);
    let minutesAsString= this.computeTwoDigitNumber (minutes);

    return `${minutesAsString}:${secondsAsString}`;
  }

   
  

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
