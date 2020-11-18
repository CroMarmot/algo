// https://twitter.com/Tarrenam/status/1288749833143095298?s=20
export default function(v:number):boolean {
  let ret = true;
  while(v){
    v-=1;
    ret=!ret;
  }
  return ret;
}
