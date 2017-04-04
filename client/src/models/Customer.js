// @flow
var m = require("mithril")

var Customer = {
    list: [],
    status: "", //This should probably be somewhere else, but is kept here for simplicity 
    current: {},
    loadList: ()=> {
        return m.request({
            method: "GET",
            url: "/customers"
        })
        .then((result)=>{
            Customer.list = result
            Customer.status = "successfully loaded customer list"
        }).catch((reason) => {
            Customer.status = "error: " + reason
        })
    },
    load: (id: number)=> {
        return m.request({
            method: "GET",
            url: "/customers/:id",
            data: {id: id}
        })
        .then((result)=>{
            Customer.current = result
            Customer.status = "successfully loaded customer details"
        }).catch((reason) => {
            Customer.status = "error: " + reason
            Customer.status = "successfully loaded customer list"
        })
    },
    new: (name: string, city: string) => {
        return m.request({
            method: "POST",
            url: "/customers/",
            data: {
                name: name,
                city: city
            }
        }).then((result)=> {
            Customer.list.push({id: result, name: name, city})
            Customer.status="successfully added new customer";
        }).catch((reason) => {
            Customer.status = "error: " + reason
        })
    }
}

module.exports = Customer