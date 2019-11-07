state = {}
state.__data = []
state.__handlers = {}

state.__serve_handlers = (item) => {
    value = state.__data[item];
    handlers = state.__handlers[item] || []
    handlers.forEach(handler => handler(value))
}

state.get = (item, fallback) => {
    if (state.__data[item] === undefined) {
        return fallback
    }

    return state.__data[item]
}

state.set = (item, value) => {
    state.__data[item] = value
    state.__serve_handlers(item)
}

state.handle = (item, callback) => {
    if (! state.__handlers[item]) {
        state.__handlers[item] = []
    }

    state.__handlers[item].push(callback)
}
