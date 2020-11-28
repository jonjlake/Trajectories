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

function PhysGlobals(){
    PhysGlobals.gsi=-9.81;
    PhysGlobals.gus=-32.2;
}

// constructing instance so class properties can be used,
// necessary for some reason
testGlobals = new TestGlobals();
physGlobals = new PhysGlobals();

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

function SightAngle(v,xf){
    this.v=v;
    this.xf=xf;
    this.setSights=function(v,xf){
        this.v=v;
        this.xf=xf;
    }
    
    this.sightAngleRoot=function(th){
        /*var val=Math.pow(this.v,3)*Math.sin(th)*Math.pow(
          Math.cos(th),2) + PhysGlobals.gus*
          Math.pow(this.xf,2)/2;*/
          //alert("this.v: "+this.v);
          var val=this.v*Math.cbrt(Math.sin(th)*
            Math.pow(Math.cos(th),2)) + 
            Math.cbrt(PhysGlobals.gus*Math.pow(this.xf,2)/2);
          //var val=Math.pow(this.v,3);
          return val;
    }
    
    this.solve=function(){
        return zeroSolveGen(this.sightAngleRoot.bind(this));
    };
}

function testSolveSightAngleRoot(){
    var sightAngle = new SightAngle(2600,600);
    //var solveRes=zeroSolveGen(sightAngle.sightAngleRoot);
    var tv=sightAngle.sightAngleRoot(0.01);
    //alert("ftn val of 0.01: " + tv);
    tv=sightAngle.sightAngleRoot(0.1);
    //alert("ftn val of 0.1: " + tv);
    var solveRes=sightAngle.solve();//sightAngle.sightAngleRoot);
    alert("solveRes: " + JSON.stringify(solveRes));
}

function sightAngleRoot(th,v,xf){
    //v^3sin(th)cos^2(th)=-ay xf^2/2;
    var val=Math.pow(v,3)*Math.sin(th)*Math.pow(
      Math.cos(th),2) + ay*Math.pow(xf,2)/2;
}

function runTests(){
  testCalcDist();
  testSolveSightAngleRoot();
}