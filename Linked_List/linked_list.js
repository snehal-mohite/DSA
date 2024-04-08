class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkList{
    constructor(data){
        this.head = null;
    }
   
    addDataFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addDataLast(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current){
            current = current.next;
        }
        current.next = newNode;
    }

    addAtIndex(index,data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let index = 0;
        while(index){
            index=index+1;
        }
    }
}

