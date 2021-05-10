import {EventEmitter} from "@angular/core";

export class CounterService{

toInactcounter: number = 0;
toActcounter: number = 0;


activeCounterUpdated = new EventEmitter<number>();
inactiveCounterUpdated = new EventEmitter<number>();

//increment when user is made inactive
incrementToInactCounter(){
    this.toInactcounter +=1;
    console.log("incrementing the inact counter " + this.toInactcounter);
    this.inactiveCounterUpdated.emit(this.toInactcounter);
}

//increment when user is made active
incrementToActCounter(){
    this.toActcounter +=1;
    console.log("incrementing the act counter" + + this.toActcounter);
    this.activeCounterUpdated.emit(this.toActcounter);
}

}