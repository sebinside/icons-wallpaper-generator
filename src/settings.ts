export const iconCodes = ["f0ca", "e15b", "f00e", "f233", "f2f7", "f1de", "e448", "f0ee", "e32a", "f67e", "f7cf", "f7b6", "f7ce", "f5f8", "f672", "f386", "f530", "f8bb", "f534", "f81b", "e3fa", "f5ce", "f6d8", "f0ad", "f818", "f8bc", "f577", "f121", "e202", "f593", "f8f4", "e012", "f749", "f6b8", "f2f9", "e3dc", "f5dc", "e165", "f03d", "f542", "e33b", "f590", "f522", "f75a", "f188", "f8ab", "e48b", "f1c9", "f544", "f8f6", "f19d", "e2df", "f030", "f539", "f001", "f7f1", "e474", "f06c", "f661", "f7b9", "f0c3", "f8a7", "f336", "f6a3", "f7a1", "f2ce", "f1e0", "f1c0", "f2db", "f6be", "e132", "f3c2", "e240", "f1b3", "e13f", "e41c", "e443", "e418", "f8e0", "f49c", "e2ea", "f312", "f0fc", "f729", "f564", "f076", "f3a0", "e409", "f013", "f8d5", "f52b", "e3e2", "e183", "3b", "f46c", "f187", "3f", "f6a1", "f8be", "e3dd", "f8e9", "f4c8", "f700", "f801"]

export interface WallpaperSettings {
    preset: "hexagon" | "circle" | "duotone",
    backgroundColor: string,
    fontSize: number,
    distanceX: number,
    distanceY: number,
    secondRowFactor: number
}

export const defaultSettings: WallpaperSettings = {
    preset: "circle",
    backgroundColor: "#222222",
    fontSize: 20,
    distanceX: 60 * 1.05,
    distanceY: 90 * 1.05,
    secondRowFactor: 1.5
}