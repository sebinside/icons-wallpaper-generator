import { WallpaperSettings } from "./settings";

export default class Wallpaper {
    constructor(private canvas: HTMLCanvasElement) {
    }

    private ctx(): CanvasRenderingContext2D {
        return this.canvas.getContext("2d")!;
    }

    drawImage(settings: WallpaperSettings): void {
        this.fillBackground(settings.backgroundColor);
    }

    private fillBackground(backgroundColor: string) {
        this.ctx().fillStyle = backgroundColor;
        this.ctx().fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}