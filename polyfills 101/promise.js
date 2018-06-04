class DummyPromise{
    constructor(fn){
  
      //to handle multiple thens
      this.chainedPromises = []; //array of fns passed to then
      this.handleError = () => {};
  
      this._resolve = this._resolve.bind(this);
      this._reject = this._reject.bind(this);
      
      //input fn will be called with resolve and reject 
      fn(this._resolve, this._reject);
  
  
  
    }
    then(_resolve){
      this.chainedPromises.push(_resolve);
      return this; //to allow chaining
    }
    catch(handleError){
      this.handleError = handleError;
      return this; // to allow chaining
    }
    _resolve(val){
      //handle success
      let temp = val;
      try{
        this.chainedPromises.forEach((nextFn) => {
          //call each then with previous then's return value
          temp = nextFn(temp);
        });
      }catch(err){
        this.chainedPromises = [];
        this._reject(err);
      }
  
    }
    _reject(err){
      //handle error
      this.handleError(err);
    }
  
  }
  
  //Mock API Call
  function makeApiCall(){
    return new DummyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve(100);
      }, 0);
    });
  }
  
  //Testing Dummy Promise
  makeApiCall().then((val) => {
    console.log(val);
    return new DummyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve(200);
      }, 0);
    });
  }).then((val) => {
    val.then((val) => {
      console.log(val);
    });
  });