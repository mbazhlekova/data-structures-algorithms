# Linked List

The Linked List data structure is a linear collection of data elements, called nodes, that contain data and a pointer to the following node.

## Advantages 

- Linked list are a dynamic data structure that can grow and shrink in size thus allocating and deallocating memory while the program is running
- Insertion and deletion operations are easily implemented
- Stacks and queues can be implemented using a linked list
- Initial size doesn't need to be defined unlike an Array
- Nodes can be added or removed from the middle of the list

## Disadvantages 

- Use more memory than arrays because of storage needed for pointers
- Nodes must be read in order from the beginning
- Reverse traversing is difficult. Doubly linked list make this somewhat easier.

## Operations

### size()

Returns the length of the Linked List

### head()

Returns the start, or head, node

### add(element)

Adds an element to the end of the list

### remove(element)

Removes element from the list and repoints the pointers from previous to removed element to next from removed element

### isEmpty()

Returns a boolean value indicating if list is empty

### indexOf(element)

Return the index of the supplied element

### elementAt(index)

Returns value of element at that index

### addAt(index, element) 

Adds an element at the specified index

### removeAt(index)

Removes element from specified index

## Algorithm Analysis of Common Operations

| Operation | Runtime
| ----------|----------
|  Indexing |  0(n)     
| Insert/delete at beginning | 0(1)
|Insert/delete at end | 0(1) is last element is known, 0(n) if unknown
|Insert/delete in middle | search time + 0(1)
|Wasted space (average) | 0(n)