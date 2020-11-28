function TestGlobals(){
  TestGlobals.tol=1e-6;
  
  TestGlobals.floatsEqual = function(
    act, expt){
    return Math.abs(act-expt) < TestGlobals.tol;
  }
  
  TestGlobals.alertResults = function(
    funcName, act, expt){
    var passString = TestGlobals.floatsEqual(act,expt) ? " passed " : " didn't pass ";
    alert(funcName + passString + " with expected: " + expt + ", actual: " + act);
  }
}

// constructing instance so class properties can be used,
// necessary for some reason
testGlobals = new TestGlobals();

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
  var xfexp=69.6;
  
  xf=calcDist(x0,vx0,ax0,t);
  try{
    TestGlobals.alertResults("calcDist", xf, xfexp);
    }catch(e){alert(e);}
}

function runTests(){
  testCalcDist();
}