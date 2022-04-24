import Utils from "./utils"

export abstract class Icon {
    abstract drawIcon(ctx: CanvasRenderingContext2D): void;

    protected setupFont(ctx: CanvasRenderingContext2D, iconUnicode: string, fontSize: number, font: "Free" |"Pro" | "Duotone") {
        ctx.textBaseline = 'middle';
        ctx.textAlign = "center";

        const textMetrics = ctx.measureText(this.calculateIcon(iconUnicode));
        const normalizedFontSize = Math.min(fontSize, fontSize * ((fontSize + 5) / textMetrics.width));
        ctx.font = `900 ${normalizedFontSize}px "Font Awesome 6 ${font}"`;
    }

    protected calculateIcon(iconUnicode: string): string {
        return String.fromCodePoint(parseInt(iconUnicode, 16));
    }
}

export class DuotoneIcon extends Icon {
    constructor(
        protected readonly iconUnicode: string,
        protected readonly firstColor: string,
        protected readonly secondColor: string,
        protected readonly fontSize: number,
        protected readonly x: number,
        protected readonly y: number) { super(); }

    drawIcon(ctx: CanvasRenderingContext2D): void {
        this.setupFont(ctx, this.iconUnicode, this.fontSize, "Duotone");


        ctx.fillStyle = this.firstColor;
        ctx.fillText(this.calculateIcon(this.iconUnicode), this.x, this.y);

        ctx.fillStyle = this.secondColor;
        ctx.fillText(this.calculateSecondaryIcon(this.iconUnicode), this.x, this.y);
    }

    protected calculateSecondaryIcon(iconUnicode: string): string {
        return String.fromCharCode(parseInt(iconUnicode, 16), parseInt(iconUnicode, 16));
    }
}

abstract class FilledIcon extends Icon {
    constructor(
        protected readonly iconUnicode: string,
        protected readonly foregroundColor: string,
        protected readonly backgroundColor: string,
        protected readonly fontSize: number,
        protected readonly fontAwesomePlan: "Free" | "Pro",
        protected readonly x: number,
        protected readonly y: number) { super(); }

    drawIcon(ctx: CanvasRenderingContext2D): void {
        this.fillIconBackground(ctx);
        this.setupFont(ctx, this.iconUnicode, this.fontSize, this.fontAwesomePlan);

        ctx.fillStyle = this.backgroundColor;
        ctx.fillText(this.calculateIcon(this.iconUnicode), this.x, this.y);
    }

    abstract fillIconBackground(ctx: CanvasRenderingContext2D): void;
}

export class CircleIcon extends FilledIcon {
    fillIconBackground(ctx: CanvasRenderingContext2D): void {
        Utils.drawCircle(ctx, this.foregroundColor, this.x, this.y);
    }
}

export class HexagonIcon extends FilledIcon {
    fillIconBackground(ctx: CanvasRenderingContext2D): void {
        Utils.drawHexagon(ctx, this.foregroundColor, this.x, this.y);
    }
}