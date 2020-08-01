
export function isEven(v:number):boolean{
  return v % 2 == 0;
}

// https://twitter.com/Tarrenam/status/1288749833143095298?s=20
export function isEvenON(v:number):boolean {
  let ret = true;
  while(v){
    v-=1;
    ret=!ret;
  }
  return ret;
}
// https://twitter.com/cpuodzius/status/1288764516017348608?s=20
export function isEvenRandom(v:number):boolean {
  while(true){
    if(2*Math.round(Math.random()*v) == v){
      return true;
    }else if(2*Math.round(Math.random()*v)+1 == v){
      return false;
    }
  }
}