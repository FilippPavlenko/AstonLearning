class SimpleLinkedList {
    constructor() {
         this.head = null
         this.length = 0
    }

    append(value) {
         const node = {value, next: null}

         if (!this.head) {
              this.head = node
         } else {
              let currentItem = this.head

              while (currentItem.next) {
                   currentItem = currentItem.next
              }

              currentItem.next = node

         }

         this.length++
    }

    size() {
         return this.length
    }

    find(value) {
         let currentItem = this.head

         while (currentItem) {
              if (currentItem.value === value) {
                   return currentItem
              }

              currentItem = currentItem.next
         }
         return null
    }

    remove(value) {
         if (!this.head) {
              return null
         }

         if (this.head.value === value) {
              this.head = this.head.next
              this.length--
              return
         }

         let currentItem = this.head
         while (currentItem) {
              if (currentItem.value === value) {
                   currentItem.next = currentItem.next.next
                   this.length--
                   return
              }
              currentItem = currentItem.next
         }
         

    }

    prepend(value) {
         const node = { value, next: this.head }
         this.head = node
         this.length++
    }
}