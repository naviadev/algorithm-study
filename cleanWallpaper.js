function solution(wallpaper) {
  let sX = 51;
  let sY = 51;
  let eX = 0;
  let eY = 0;
  for(let i = 0; i<wallpaper.length; i++){
      for(let j = 0; j < wallpaper[0].length; j++){
          if(wallpaper[i][j] === "#"){
          sX = Math.min(i, sX);
          sY = Math.min(j,sY);
          eX = Math.max(i, eX);
          eY = Math.max(j,eY);
          }
      }

  }

  let list = [sX,sY,eX+1,eY+1];
  return list;
}