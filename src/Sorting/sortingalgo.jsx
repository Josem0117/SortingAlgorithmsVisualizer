
import './Sorting.css';
import { state } from "./Sorting";


//////////////////////////////////
///MERGE SORT/////

export function Animations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {

      animations.push([i, j]);

      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {

        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {

        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {

      animations.push([i, i]);

      animations.push([i, i]);

      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {

      animations.push([j, j]);

      animations.push([j, j]);

      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
////////////////////////////////////////////////////////////////////////
///QUICK SORT///

function partition(array, start, end, arr){
    // Taking the last element as the pivot
    
    const pivotValue = array[end];
    let pivotIndex = start; 
    state[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
        // Swapping elements
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        arr.push ([i, array[i]]);
        arr.push ([pivotIndex, array[pivotIndex]]);
        arr.push ([i, pivotIndex]);

        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]] 

    arr.push ([end, array[end]]);  
    arr.push ([pivotIndex, array[pivotIndex]]);
    arr.push ([end, pivotIndex]);
    
    return {
      pivotIndex,
      arr
    }
};
export function quick(array, start, end, arr =[]) {
   
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let {pivotIndex:index} = partition(array, start, end, arr);
    
    
    // Recursively apply the same logic to the left and right subarrays
    quick(array, start, index - 1, arr);
    quick(array, index + 1, end, arr);

    return arr;
}
/////////////////////////////////////
/////////////// HEAP SORT////////////

const buildMaxHeap = (array, arr) => {
  // Get index of the middle element
  let i = Math.floor(array.length / 2 - 1);

  // Build a max heap out of
  // All array elements passed in
  while (i >= 0) {
    heapify(array, i, array.length, arr);
    
    i -= 1;
  }
}

const heapify = (heap, i, max, arr) => {
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    index = i;

    // Get the left child index 
    // Using the known formula
    leftChild = 2 * i + 1;
    
    // Get the right child index 
    // Using the known formula
    rightChild = leftChild + 1;

    // If the left child is not last element 
    // And its value is bigger
    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    // If the right child is not last element 
    // And its value is bigger
    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;

    }

    // If none of the above conditions is true
    // Just return
    if (index === i) {
      return;
    }

    // Else swap elements
    swap(heap, i, index);
    
    
    arr.push([i, heap[i]]);
    arr.push([index, heap[index]]);
    
    
    arr.push([i, index]);
    
    // Continue by using the swapped index
    i = index;
    

  }
}

const swap = (array, firstItemIndex, lastItemIndex, arr) => {
  const temp = array[firstItemIndex];

  // Swap first and last items in the array
  

  array[firstItemIndex] = array[lastItemIndex];
  array[lastItemIndex] = temp;
  
}

export function heap(array,arr = []) {
  
  // Build max heap
  buildMaxHeap(array, arr);
  
  // Get the index of the last element
  let lastElement = array.length - 1;

  // Continue heap sorting until we have
  // One element left
  while (lastElement > 0) {

    swap(array, 0, lastElement);
    arr.push([0, array[0]]);
    arr.push([lastElement, array[lastElement]]);

    arr.push([0, lastElement]);
    
    heapify(array, 0, lastElement, arr);
    
    lastElement -= 1;
    
  }

  // Return steps to do
  return arr;
 
} 

////////////////////////////////////////////////////////////////
export function bubble(array, arr = []){
  let len = array.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (array[j] > array[j + 1]) {
              let tmp = array[j];
              arr.push([j, array[j]]);
              arr.push([j+1, array[j+1]]);
              arr.push([j, (j+1)]);
              array[j] = array[j + 1];
              array[j + 1] = tmp;
          }
      }
  }
  return arr;
};

