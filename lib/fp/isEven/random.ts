// https://twitter.com/cpuodzius/status/1288764516017348608?s=20
export default function(v:number):boolean {
  while(true){
    if(2*Math.round(Math.random()*v) == v){
      return true;
    }else if(2*Math.round(Math.random()*v)+1 == v){
      return false;
    }
  }
}
