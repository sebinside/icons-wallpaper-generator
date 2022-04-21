import './style.css'
import { defaultSettings } from "./settings"
import Wallpaper from './wallpaper';

document.fonts.ready.then(() => {
  const canvas = document.getElementById("main") as HTMLCanvasElement;
  const wallpaper = new Wallpaper(canvas);
  wallpaper.drawImage(defaultSettings);
});