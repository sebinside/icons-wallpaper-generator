import Utils from "./utils"

export abstract class Icon {
    abstract drawIcon(ctx: CanvasRenderingContext2D): void;
}

export class DuotoneIcon extends Icon {
    drawIcon(ctx: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }
}

abstract class FilledIcon extends Icon {
    drawIcon(ctx: CanvasRenderingContext2D): void {
        this.fillIconBackground(ctx);
        throw new Error("Method not implemented.");
    }

    abstract fillIconBackground(ctx: CanvasRenderingContext2D): void;
}

export class CircleIcon extends FilledIcon {
    fillIconBackground(ctx: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }
}

export class HexagonIcon extends FilledIcon {
    fillIconBackground(ctx: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }
}