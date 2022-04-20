import { Icon } from "./icon";
import { WallpaperSettings } from "./settings";

export default class Wallpaper {
    constructor(private canvas: HTMLCanvasElement) {
    }

    private ctx(): CanvasRenderingContext2D {
        return this.canvas.getContext("2d")!;
    }

    drawImage(settings: WallpaperSettings): void {
        this.fillBackground(settings.backgroundColor);
        this.drawIcons(settings);
    }

    private fillBackground(backgroundColor: string) {
        this.ctx().fillStyle = backgroundColor;
        this.ctx().fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private drawIcons(settings: WallpaperSettings) {
        let secondRow = true;
        let icons: Icon[] = [];

        // Create icons
        for (let x = settings.distanceX; x < this.canvas.width; x += settings.distanceX) {
            let y = secondRow ? settings.distanceY : settings.distanceY * settings.secondRowFactor;
            for (; y < this.canvas.height; y += settings.distanceY) {
                icons.push(this.createRandomIcon(settings));
            }
            secondRow = !secondRow;
        }

        // Draw icons
        icons.forEach(icon => icon.drawIcon(this.ctx()));
    }

    private createRandomIcon(settings: WallpaperSettings): Icon {
        switch (settings.preset) {
            case "duotone":
                //drawRandomDuotoneIcon("#EEE", "#BBB", settings.fontSize, x, y);
                 //drawDuotoneIcon(randomCode, colorA, colorB, fontSize, x, y);
                break;
            case "circle":
                // drawIconNegative(randomCode, randomColor, "#222", fontSize, x, y);
                break;
            case "hexagon":
                break;
        }
    }
}