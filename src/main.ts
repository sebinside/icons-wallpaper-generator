import './style.css'
import { iconCodes, defaultSettings } from "./settings"
import Wallpaper from './wallpaper';


// TODO: Move to icon sub classes
function drawDuotoneIcon(iconUnicode, colorA, colorB, fontSize, x, y) {
  const canvas = document.getElementById("main");
  const ctx = canvas.getContext('2d');

  ctx.textBaseline = 'middle';
  ctx.textAlign = "center";
  ctx.font = `900 ${fontSize}px "Font Awesome 6 Duotone"`;

  const textMetrics = ctx.measureText(String.fromCodePoint(parseInt(iconUnicode, 16)));
  const realFontSize = Math.min(fontSize, fontSize * ((fontSize + 5) / textMetrics.width));
  ctx.font = `900 ${realFontSize}px "Font Awesome 6 Duotone"`;

  ctx.fillStyle = colorA;
  ctx.fillText(String.fromCodePoint(parseInt(iconUnicode, 16)), x, y);

  ctx.fillStyle = colorB;
  ctx.fillText(String.fromCharCode(parseInt(iconUnicode, 16), parseInt(iconUnicode, 16)), x, y);
}

function drawIconNegative(iconUnicode, colorFront, colorBack, fontSize, x, y) {
  const canvas = document.getElementById("main");
  const ctx = canvas.getContext('2d');

  ctx.textBaseline = 'middle';
  ctx.textAlign = "center";
  ctx.font = `900 ${fontSize}px "Font Awesome 6 Pro"`;

  const textMetrics = ctx.measureText(String.fromCodePoint(parseInt(iconUnicode, 16)));
  const realFontSize = Math.min(fontSize, fontSize * ((fontSize + 5) / textMetrics.width));
  ctx.font = `900 ${realFontSize}px "Font Awesome 6 Pro"`;

  drawHexagon(ctx, colorFront, x, y);

  ctx.fillStyle = colorBack;
  ctx.fillText(String.fromCodePoint(parseInt(iconUnicode, 16)), x, y);
}





function drawRandomDuotoneIcon(colorA, colorB, fontSize, x, y) {
  const randomIndex = Math.floor(Math.random() * iconCodes.length);
  const randomCode = iconCodes[randomIndex];
  console.log(randomIndex);
  console.log(randomCode);

  let randomColor = 'hsl(' + 360 * Math.random() + ',60%,60%)';

  if (Math.random() < 0.82) {
    randomColor = "#444";
  }

  drawIconNegative(randomCode, randomColor, "#222", fontSize, x, y);
  //drawDuotoneIcon(randomCode, colorA, colorB, fontSize, x, y);
}

function createImage() {

  // TODO: Move to settings
  const fontSize = 20;
  const distanceX = 60 * 1.05;
  const distanceY = 90 * 1.05;

  
  // TODO: move to wallpaper
  let secondRow = true;

  for (let x = distanceX; x < canvas.width; x += distanceX) {
    let y = secondRow ? distanceY : distanceY * 1.5;
    for (; y < canvas.height; y += distanceY) {
      drawRandomDuotoneIcon("#EEE", "#BBB", fontSize, x, y);
    }
    secondRow = !secondRow;
  }
}



document.fonts.ready.then(() => {
  const canvas = document.getElementById("main") as HTMLCanvasElement;
  const wallpaper = new Wallpaper(canvas);
  wallpaper.drawImage(defaultSettings);
});