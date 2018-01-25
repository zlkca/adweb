import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, FormControl } from '@angular/forms';

@Directive({
  selector: '[invalidChar]',
  providers: [  
   {  
    provide: NG_VALIDATORS,  
    useExisting: ForbiddenCharValidator,  
    multi: true  
   }  
  ]  
})
export class ForbiddenCharValidator implements Validator {
	validator: ValidatorFn;

  	constructor() { 
  		this.validator = this.forbiddenCharValidatior();
  	}

  	validate(c:FormControl){ 
  		return this.validator(c);
  	}

  	forbiddenCharValidatior():ValidatorFn {
  		return (c:FormControl) => {
  			let bValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);
  			if(bValid){
  				return null;
  			}else{
  				return {
  					'invalidChar':{
  						valid:false
  					}
  				}// return validation error object
  			}
  		}
	  }
}
