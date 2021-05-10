import { Injectable, EventEmitter } from "@angular/core";
import { CounterService } from "./counter.service";


//since this is going to call the counter service
//if we inject a service, the receiving service has to have @Injectable
@Injectable()
export class UserService{

    activeUsers = ['Ash', 'Nik'];
    inactiveUsers = ['Speed', 'Raptor'];
  
    constructor(private counterService: CounterService){
    
    }

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);

        //increment the inactive counter
        this.counterService.incrementToInactCounter();
      }

      
  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

    //increment the active counter
    this.counterService.incrementToActCounter();
  }
    
    
    }