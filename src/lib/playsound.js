function say (obj) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(obj.$jsstr()))
  }
  
var $builtinmodule = function(name)
{
    var mod = {};

    mod.say = new Sk.builtin.func(function(obj){
        say(obj);
        return new Sk.builtin.none;
    })

    return mod;
}

//import playsound
//playsound.say('hello world')