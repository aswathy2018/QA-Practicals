const invoices = [
  { id: 201, customerId: 10, total: 1500, status: 'paid', items: ['monitor', 'cable'] },
  { id: 202, customerId: 11, total: 2300, status: 'unpaid', items: ['laptop'] },
  { id: 203, customerId: 10, total: 600, status: 'paid', items: ['keyboard', 'mouse'] },
  { id: 204, customerId: 12, total: 800, status: 'cancelled', items: ['webcam'] },
  { id: 205, customerId: 15, total: 800, status: 'cancelled', items: null },
];


function customer(invoices, customerId){
    let obj = invoices.filter(val=>val.customerId==customerId && val.items)

    if(obj.length===0){
        console.log("Customer not found")
        return
    }

    let item = obj.flatMap(val=>val.items || [])

    if(item.length==0){
        console.log("Items not available")
    }else{
        console.log(item);
    }
}

customer(invoices,12)
customer(invoices,15)
customer(invoices,10)