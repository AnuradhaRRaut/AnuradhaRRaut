import { api, LightningElement } from 'lwc';
import firsttemplet from './lifecycle.html'
import secondtemplet from './lifecycle2.html'

export default class Lifecycle extends LightningElement {
 @api templatenumber = 'temp1';
constructor(){
super();
console.log('Inside constructor');
}
connectedCallback(){
console.log('Inside connected callback');
}
disconnectedCallback(){
console.log('Inside disconnected callback');
}
chnagetemplet(){
console.log('Inside change template');
if(this.templatenumber==='temp1'){
this.templatenumber='temp2';
}else{
this.templatenumber='temp1';
}
}
renderedCallback(){
console.log('Inside render');
if(this.templatenumber==='temp1')
return firsttemplate;
else return secondtemplate;
}
errorCallback(){
    console.log('Inside the Error Callback'); 
}

}
