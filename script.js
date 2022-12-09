class PasswordGenerator{  
    constructor(UpperCase, LowerCase, SpecialChar, Number){
      this.Upper = UpperCase;
      this.Lower = LowerCase;
      this.Special = SpecialChar;
      this.Number = Number;
    }
    
    random(value){
        return Math.floor(Math.random()*value.length)
    }
    
    easy(){
        let Password = this.Upper[this.random(this.Upper)] + this.Upper[this.random(this.Upper)] + this.Number[this.random(this.Number)] + this.Upper[this.random(this.Upper)] + this.Upper[this.random(this.Upper)] + this.Number[this.random(this.Number)]
        
        return span.innerText = `${Password}`
        }
        
    medium(){
        let Password = this.Upper[this.random(this.Upper)] + this.Lower[this.random(this.Lower)] + this.Upper[this.random(this.Upper)] + this.Number[this.random(this.Number)] + this.Lower[this.random(this.Lower)] + this.Upper[this.random(this.Upper)] + this.Lower[this.random(this.Lower)] + this.Upper[this.random(this.Upper)] + this.Number[this.random(this.Number)] + this.Lower[this.random(this.Lower)] 
        
        return span.innerText = `${Password}`
        }
    
    hard(){
        let Password =  this.Special[this.random(this.Special)] + this.Upper[this.random(this.Upper)] + this.Lower[this.random(this.Lower)] + this.Special[this.random(this.Special)] + this.Upper[this.random(this.Upper)] + this.Number[this.random(this.Number)] + this.Upper[this.random(this.Upper)] + this.Upper[this.random(this.Upper)] + this.Lower[this.random(this.Lower)] +  this.Number[this.random(this.Number)] + this.Upper[this.random(this.Upper)] + this.Number[this.random(this.Number)]
        return span.innerText = `${Password}`
    } 
    
}

const UpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const LowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','s','s','t','u','v','w','x','y','z'];

const SpecialChar = ['+','×','÷','=','/','_','€','£','₹','!','@','#','$','%','^','&','*','-','?','~','|','¿'];

const Number = ['0','1','2','3','4','5','6','7','8','9'];

const Common = ['12345678','123456','abcdef','querty','abc@123','google','password']

let newpass = new PasswordGenerator(UpperCase,LowerCase, SpecialChar, Number);


const Easy = () => {
    newpass.easy()
}

const Medium = () => {
    newpass.medium()
}

const Hard = () => {
    newpass.hard()
}
