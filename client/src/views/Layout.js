var m = require("mithril")
var Customer = require("../models/Customer")

module.exports = {
    view: (vnode) => {
        return m("main.layout", [
            m("nav.menu","Menu: ", [
                m("a[href='/list']", {oncreate: m.route.link}, "Customers")
            ]),
            m("div.status","status: " + Customer.status),
            m("section", vnode.children)
        ])
    }
}