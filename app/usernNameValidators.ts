import {Control} from 'angular2/common'; 

export class UserNameValidators {

    //asyncValidators
    static shoulbeUnique(control: Control){
        return new Promise((resolve, reject)=> {
            setTimeout(function(){
                if(control.value == "Mani")
                    resolve({shoulbeUnique : true})
                else 
                    resolve(null);
            },1000)
        })
    }

    static CannotContainSpace(control: Control) {
        if(control.value.indexOf(' ') >=0 )
            return { CannotContainSpace: true }
        
        return null;
    }

}
