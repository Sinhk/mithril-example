// @flow
var m = require("mithril")
var Customer = require("../models/Customer")

class CustomerDetails {
    oninit(vnode: m.Vnode) {
        Customer.load(vnode.attrs.id)
    }

    view() {
        return m("ul", [
            m("li", "name: " + Customer.current.name),
            m("li", "city: " + Customer.current.city)
        ])
    }
}

module.exports = CustomerDetails