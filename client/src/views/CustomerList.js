// @flow
var m = require("mithril")
var Customer = require("../models/Customer")

class CustomerList {
    oninit() {
        Customer.loadList();
    }
    view(vnode: m.Vnode) {
        return m("main", [
            m("ul.customer-list", Customer.list.map(function(customer) {
            return m("li", 
                m("a.customer-list-item", {href: "/customer/" + customer.id, oncreate: m.route.link}, customer.name)
            )     
        })),
        m("form", {
            onsubmit: (e) => {
                    e.preventDefault()
                    Customer.new(this.newCustomerName, this.newCustomerCity).then(()=>{
                        this.newCustomerName = ""
                        this.newCustomerCity = ""
                    })
                }
        }, [
            m("label", "Name:"),
            m("input[type=text]",{
                oninput: m.withAttr("value", (value) => {this.newCustomerName = value}),
                value: this.newCustomerName
            }),
            m("label", "City:"),
            m("input[type=text]",{
                oninput: m.withAttr("value", (value) => {this.newCustomerCity = value}),
                value: this.newCustomerCity
            }),
            m("button.button[type=submit]", "New Customer")
        ])
        ])
    }
}

module.exports = CustomerList