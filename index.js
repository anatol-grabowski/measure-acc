class Measure {
  constructor() {
    this.map = {}
  }

  start(label) {
    this.map[label] = this.map[label]
      || { start: null, total: 0 }
    const state = this.map[label]
    state.start = Date.now()
  }

  end(label) {
    const state = this.map[label]
    if (state.start == null) {
       throw Error(`start() was not called for label '${label}'`)
    }
    const dt = Date.now() - state.start
    state.total += dt
    state.start = null
  }

  log(label) {
    const state = this.map[label]
    const ms = Math.round(state.total)
    console.log(`${label}: ${ms} ms`)
  }

  logAll() {
    const str = Object.keys(this.map)
      .map(label => `${label}: ${this.map[label].total} ms`)
      .join('\n')
    console.log(str)
  }

  clearAll() {
    this.map = {}
  }
}

exports.measure = new Measure()
