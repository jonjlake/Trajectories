function cubic(x){
    //return Math.pow(x,3)+Math.pow(x,2)-2;
    return Math.pow(x,3)+Math.pow(x,2)-12;
  }
  
  function quartic(x){
      return Math.pow(x,4)-
        Math.pow(x,3)+Math.pow(x,2)-12;
  }
  
function zerosolve(){
    alert("in zerosolve");
    var x0=2.2;
    var x1=2.1;
    var y0=cubic(x0); 
    var y1=cubic(x1); 
    var limit=100;
    var tol=1e-7;
    var i=0; 
    
    var dy=y1-y0; 
    var dx=x1-x0; 
    if(Math.abs(dx)<=tol) {
        return {root: x1, 
      iters:i, limit:limit, tol:tol};
    }
    
    for(var i=0;i<limit;i++){ 
      x0=x1;
      y0=y1; 
      //x1=x0+x0*dy/dx;
      x1=x0-y0*dx/dy;
      y1=cubic(x1); 
      dy=y1-y0; 
      dx=x1-x0; 
      if (Math.abs(dx) <= tol) return { 
        root: x1, iters:i,  
        limit:limit, tol:tol}; 
    } 
    return { root: x1, 
      iters:i, limit:limit, tol:tol};
  }

  function printZeroSolve(){
      alert("printing");
      var cu=cubic(10);
      alert("cubic10" + cu);
      var zsRes=zerosolve();
      alert("zsRes results are " + JSON.stringify(zsRes));
    }
    
    function ZeroSolveRes(xf,yf,iterations,tol,maxIter){
        this.xf=xf;
        this.yf=yf;
        this.iterations=iterations;
        this.tol=tol;
        this.maxIter=maxIter;
    }
    
    function zeroSolveGen(solveFtn){
        var x0=2.1;
        var x1=2.2;
        var y0=solveFtn(x0);
        var y1=solveFtn(x1);
        var tol=1e-7;
        var maxIter=1000;
        
        var dy=y1-y0;
        var dx=x1-x0;
        var i=0;
        
        if (Math.abs(dx) <= tol) {
            return new ZeroSolveRes(x1,y1,i,tol,maxIter);
        }
        
        for(i=0;i<maxIter;i++){
            x0=x1;
            y0=y1;
            x1=x1-y1*dx/dy;
            y1=solveFtn(x1);
            dy=y1-y0;
            dx=x1-x0;
            if(Math.abs(dx) <= tol){
                alert("breaking with dx " + dx);
                break;
            }
        }
        
        return new ZeroSolveRes(x1,y1,i,tol,maxIter);
    }
    
    function alertZeroSolveResGen(solveFtn){
        var res=zeroSolveGen(solveFtn);
        alert("zeroSolveGen results: " + JSON.stringify(res));
    }