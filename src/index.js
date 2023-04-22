var createStore = function (Nam,options) {
    this.name=Nam;
    var state=options.state;
    var $action=options.action;      
      const handler = {
        get(target, property) {
          //function
          return target[property];
        },
        set(target, property, value) {
          console.log(`Setting ${property} to ${value}`);
          target[property] = value;
        }
      };
      
      this.$state = new Proxy(state, handler);
 }
 //options ask for a 
