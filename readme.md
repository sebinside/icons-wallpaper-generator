# Icons Wallpaper Generator

## How to use
* Clone this repository
* Install dependencies with `npm i`
* Add the `css` and `webfonts` folders from the [Font Awesome For Web zip file](https://fontawesome.com/download) to the root folder
* Depending on your plan and the zip file you downloaded you might have to change `fontAwesomePlan` `settings.ts` to the correct option (`Free` or `Pro`)
* *Optional:* Change the icons to use in `settings.ts`. Some of the default icons are not included in Font Awesome Free


## TODOs
* Add eslint
* Fix icons (e.g. speakers, mic, lock)
* Find cool layout, e.g. https://stackoverflow.com/questions/17125632/html5-canvas-rotate-object-without-moving-coordinates
    * Mehr vertikaler als horizontaler Abstand?
    * Random opacity?
    * Leicht gedreht vs. exakt 45 grad?
    * Gesamtes Bild leicht drehen (sieht gut aus!)
* Fix icon repetitions (shuffle array after 50 items + icon repetition detection? sliding window über 2x zeilen?)
* Update coloring
* Custom coloring per unicode
* Jede Spalte um x pixel weiter unten beginnen lassen?
* Animationen: Bewegen, drehen, einzelne icons wechseln
* Color Paletten (z.B. Monokai)