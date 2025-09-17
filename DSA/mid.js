class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class ll{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

    prepend(val){
        let node = new Node(val)

        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(val){
        let node = new Node(val)

        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head

            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    mid(){
        let fast = this.head
        let slow = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.val
    }

    remMid(){

        if(this.isEmpty()){
            return "Empty"
        }

        if(this.size==1){
            this.head = null
            this.size--
            return
        }

        let slow = this.head
        let fast = this.head
        let prev = null

        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
        this.size--
    }

    print(){
        if(this.isEmpty()){
            return "Empty"
        }else{
            let str = ''
            let curr = this.head

            while(curr){
                str+=`${curr.val}`
                curr = curr.next
            }
            return str
        }
    }
}

let ins = new ll()

let i=1
while(i<=9){
    ins.prepend(i)
    i++
}

console.log("Values: ", ins.print())

console.log("Mid: ", ins.mid())

ins.remMid()

console.log("After removing: ", ins.print())
