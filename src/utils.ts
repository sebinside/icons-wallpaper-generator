export default class Utils {
    private constructor() { }

    static drawCircle(ctx: CanvasRenderingContext2D, color: string, x: number, y: number) {
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
    }

    static drawHexagon(ctx: CanvasRenderingContext2D, color: string, x: number, y: number) {
        const a = 2 * Math.PI / 6;
        const r = 20;
        ctx.beginPath();
        for (var i = 0; i < 6; i++) {
            ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
        }
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }
}