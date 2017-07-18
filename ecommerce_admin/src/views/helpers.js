module.exports = (app) => {
    app.locals.checked = function(value) {
        return value === true ? 'checked' : ''
    }

    app.locals.selected = function(option, value) {
        console.log(value)
        if (typeof value !== "undefined") {
            return option.toString() == value.toString() ? 'selected' : ''
        }

        return ''
    }
}