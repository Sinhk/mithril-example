var m = require("mithril")

var CustomerList = require("./views/CustomerList")
var CustomerDetails = require("./views/CustomerDetails")
var Layout = require("./views/Layout")

m.route(document.body, "/list", {
    "/list": {
        render: ()=>{
            return m(Layout, m(CustomerList))
        }
    },
    "/customer/:id": {
        render: (vnode: m.Vnode) =>{
            return m(Layout, m(CustomerDetails, vnode.attrs))
        }
    }
}) 