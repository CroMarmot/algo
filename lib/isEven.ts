
export function isEven(v:number):boolean{
  return v % 2 == 0;
}

export function isEvenON(v:number):boolean {
  let ret = true;
  while(v){
    v-=1;
    ret=!ret;
  }
  return ret;
}