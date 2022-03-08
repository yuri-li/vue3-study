class State {
    private _now: Date
    constructor() {
        this._now = new Date()
    }
    get currentTime(): Date {
        return this._now
    }
}
const state = new State()
export { state }