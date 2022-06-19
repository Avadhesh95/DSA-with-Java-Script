class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let list = new LinkedList();
let current;

function addComment(text) {
	let node = new ListNode(text);
  
	if(list.head == null) {
  	list.head = node;
    current = node;
  } else {
  	current.next = node;
    current = current.next
  }
}

node1.next = node2;
addComment("first")
addComment("second")
addComment("third")
addComment("fourth")

console.log(list.head)
console.log(list.head.next)
console.log(list.head.next.next)
