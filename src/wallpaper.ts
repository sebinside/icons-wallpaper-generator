import { CircleIcon, DuotoneIcon, HexagonIcon, Icon } from "./icon";
import { iconCodes, WallpaperSettings } from "./settings";

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
                icons.push(this.createRandomIcon(settings, x, y));
            }
            secondRow = !secondRow;
        }

        // Draw icons
        icons.forEach(icon => icon.drawIcon(this.ctx()));
    }

    private createRandomIcon(settings: WallpaperSettings, x: number, y: number): Icon {
        const randomIndex = Math.floor(Math.random() * iconCodes.length);
        const randomCode = iconCodes[randomIndex];

        if (settings.preset === "circle" || settings.preset === "hexagon") {
            // TODO: Move to settings
            let randomColor = 'hsl(' + 360 * Math.random() + ',60%,60%)';

            if (Math.random() < 0.82) {
                randomColor = "#444";
            }

            if (settings.preset === "circle") {
                // TODO: Move to settings
                return new CircleIcon(randomCode, randomColor, "#222", settings.fontSize, settings.fontAwesomePlan, x, y)
            } else {
                // TODO: Move to settings
                return new HexagonIcon(randomCode, randomColor, "#222", settings.fontSize, settings.fontAwesomePlan, x, y)
            }
        } else {
            return new DuotoneIcon(randomCode, "#EEE", "#BBB", settings.fontSize, x, y);
        }
    }
}