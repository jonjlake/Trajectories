function TestGlobals(){
  TestGlobals.tol=1e-6;
  
  TestGlobals.floatsEqual = function(
    act, exp){
    return Math.abs(act-exp) 
      TestGlobals.tol;
  }
  
  TestGlobals.alertResults = function(
    funcName, act, exp){
    var passString = TestGlobals.floatsEqual(act,exp) ? " passed " : " didn't pass ";
    alert(funcName + passString + " with expected: " + exp + ", actual: " + act);
  }
}

function calcDist(d0, vd0, ad0, t){
  var df = d0 + vd0*t + 
    ad0*Math.pow(t,2)/2;
    
  return df;
}

function testCalcDist(){
  var x0=10;
  var vx0=20;
  var ax0=9.8;
  var t=2;
  var xfexp=10;
  
  xf=calcDist(x0,vx0,ax0,t);
  
  TestGlobals.alertResults("calcDist",
    xf, xfexp);
}

function runTests(){
  testCalcDist();
}