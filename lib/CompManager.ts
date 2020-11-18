import Funcs = CromarmotAlgoLib.Funcs;
import Complexity = CromarmotAlgoLib.Complexity;
import Fn = CromarmotAlgoLib.Fn;

class CompManager{
  private zone:Map<Funcs, Map<Complexity,Fn>> = new Map();
  private ff:{[key: string]: {[key:string]:Fn}} ;

  static createCompManager():CompManager {
    return new CompManager();
  }

  constructor(){
    this.ff= {}
  }

  reg(fnName:Funcs,complex:Complexity,fn:Fn){
    if(!this.zone.has(fnName)){
      this.zone.set(fnName,new Map());
    }
    this.zone.get(fnName)?.set(complex,fn);

    if(!this.ff[fnName]){
      this.ff[fnName] = {};
    }
    this.ff[fnName][complex] = fn;
  }

  unreg(fnName:Funcs,complex:Complexity){
    if(!this.zone.has(fnName)){
      return ;
    }
    this.zone.get(fnName)?.delete(complex);
    delete this.ff[fnName][complex];
  }

  f(fnName:Funcs,complex:Complexity, ...args:any[]):any{
    if(!this.zone.has(fnName)){
      throw new Error(`${fnName} Not found.`)
    }
    if(!this.zone.get(fnName)?.has(complex)){
      throw new Error('Not Implemented.')
    }
    return (<Fn>this.zone.get(fnName)?.get(complex))(...args);
  }
}

export {
  CompManager
}
