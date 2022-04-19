import './style.css'

const iconCodes = ["f0ca", "e15b", "f00e", "f233", "f2f7", "f1de", "e448", "f0ee", "e32a", "f67e", "f7cf", "f7b6", "f7ce", "f5f8", "f672", "f386", "f530", "f8bb", "f534", "f81b", "e3fa", "f5ce", "f6d8", "f0ad", "f818", "f8bc", "f577", "f121", "e202", "f593", "f8f4", "e012", "f749", "f6b8", "f2f9", "e3dc", "f5dc", "e165", "f03d", "f542", "e33b", "f590", "f522", "f75a", "f188", "f8ab", "e48b", "f1c9", "f544", "f8f6", "f19d", "e2df", "f030", "f539", "f001", "f7f1", "e474", "f06c", "f661", "f7b9", "f0c3", "f8a7", "f336", "f6a3", "f7a1", "f2ce", "f1e0", "f1c0", "f2db", "f6be", "e132", "f3c2", "e240", "f1b3", "e13f", "e41c", "e443", "e418", "f8e0", "f49c", "e2ea", "f312", "f0fc", "f729", "f564", "f076", "f3a0", "e409", "f013", "f8d5", "f52b", "e3e2", "e183", "3b", "f46c", "f187", "3f", "f6a1", "f8be", "e3dd", "f8e9", "f4c8", "f700", "f801"]

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

        function drawCircle(ctx, color, x, y) {
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
            ctx.fillStyle = color;
            ctx.fill();
        }

        function drawHexagon(ctx, color, x, y) {
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

        function fillBackground() {
            const canvas = document.getElementById("main");
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = `#222222`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
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
            fillBackground();

            const fontSize = 20;
            const distanceX = 60 * 1.05;
            const distanceY = 90 * 1.05;

            const canvas = document.getElementById("main");

            let secondRow = true;

            for (let x = distanceX; x < canvas.width; x += distanceX) {
                let y = secondRow ? distanceY : distanceY * 1.5;
                for (; y < canvas.height; y += distanceY) {
                    drawRandomDuotoneIcon("#EEE", "#BBB", fontSize, x, y);
                }
                secondRow = !secondRow;
            }
        }

        // TODO: Find cool layout, e.g. https://stackoverflow.com/questions/17125632/html5-canvas-rotate-object-without-moving-coordinates
        // - Mehr vertikaler als horizontaler Abstand?
        // - Random opacity?
        // - Leicht gedreht vs. exakt 45 grad?
        // - Gesamtes Bild leicht drehen (sieht gut aus!)
        // TODO: Fix icons (e.g. speakers, mic, lock)
        // TODO: Fix icon repetitions (shuffle array after 50 items + icon repetition detection?)
        // TODO: Update coloring
        // TODO: Custom coloring per unicode

        document.fonts.ready.then(() => {
            createImage();
        });