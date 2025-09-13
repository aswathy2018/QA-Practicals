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
        if(this.isEmpty()){
            console.log("It is empty")
        }

        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.val
    }

    rem(){
        if(this.isEmpty()){
            return "Empty"
        }

        if(this.size===1){
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
            console.log("Empty")
        }else{
            let curr = this.head
            let str = ''

            while(curr){
                str+=`${curr.val} `
                curr = curr.next
            }
            return str;
        }
    }
}

let pr = new ll()

pr.append(2)
pr.append(3)
pr.append(4)
pr.append(4)
pr.append(5)

console.log(pr.print())