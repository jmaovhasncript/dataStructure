

function LinkedList(){
    'use strict';
    var head, tail;

    this.addNodeAtFornt = function(node){
        if(!head){
            head = node;
            tail = head;
        }else{
            node.setnext(head);
            head = node;
        }

    };
    this.addNodeAtEnd = function(node){
            if(!tail){
                head = node;
                tail = head;
            }else{
                tail.setnext(node);
                tail = node;
            }
    };
    this.removeLast = function(position){
            if(tail){

            }
    };
    this.removeFromPosition = function(position){
        var current = head,previous;
        while (current){

        }
    };

    this.contains = function(item){

    };

    this.removeForStart = function(){
        if(head){
            if(head === tail){
             head = tail = null;
            }else {
                var temp = head;
                head = head.getnext();
                temp.setnext(null);
            }
        }
    }

    this.printAll = function(){
        var node = head;
         while (node !== null){
             console.log(node.getData());
             node = node.getnext();
         }
    };
    this.getElementForPosition = function(position){
        var node = head,count = 0;
        while (count < position && node){

            node = node.getnext();
            count++;
        }
    };
    this.clear = function(){
      head = null;
        tail= null
    };
}