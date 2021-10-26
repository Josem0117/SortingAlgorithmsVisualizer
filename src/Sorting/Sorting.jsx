import React from "react";
import './Sorting.css';
import {Animations} from './sortingalgo';
import {quick} from './sortingalgo';
import {Button} from './Buttons';
import {heap} from './sortingalgo';
import {bubble} from './sortingalgo';


let array1 =  [1000];
export let state = [];
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min + 1) + min;
}


export default class SortingV extends React.Component{

    constructor(props){

        super(props);

        this.state = {

            array: [],
            

        };

    }



    componentDidMount(){
        this.resetArray();
    }

    resetArray() {

        const array = [];
        
        for (let i = 0; i<38; i++){
            array.push(Math.trunc(getRandomArbitrary(20, 1000)));
            state[i] = 1;
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = Animations(this.state.array);
        console.log(animations);
        console.log(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('circle');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'white' : 'black';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 50);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * 50);
          }
        }

      }
    
    quickSort(){
        
        const arr = quick(this.state.array, 0, this.state.array.length-1);
        console.log(this.state.array);
        console.log(arr);

        for(let i = 0; i<arr.length; i++){
            const arrayBars = document.getElementsByClassName('circle');
            const [barOneIdx, newHeight] = arr[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const isColorChange = i % 3 === 2;
            if (isColorChange){
                
                const[barOneIdx, barTwoIdx]= arr[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
               
                

                setTimeout(() =>{
                    
                    let color = 'black';
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    
                },i *50);


            }else{
                    barOneStyle.backgroundColor = 'black';
                setTimeout(()=>{
                    
                    barOneStyle.height = `${newHeight}px`;
                    barOneStyle.backgroundColor = 'white';
                    
                }, i * 50);
            }

            }
            
        }
    
    bubbleSort(){
        let arr = bubble(this.state.array);
        console.log(arr);
        console.log(this.state.array);
        let arraux = arr;
        for(let i = 0; i<arr.length; i++){
             const arrayBars = document.getElementsByClassName('circle');
             const [barOneIdx] = arr[i];
             const barOneStyle = arrayBars[barOneIdx].style;
            //  const isColorChange = i % 3 === 2;
            //  if (isColorChange){
                 
                


            //  }
            
             const tryif = i % 3 === 0;
             if(tryif) {
                
                setTimeout(()=>{
                
                barOneStyle.height = `${arraux[i+1][1]}px`;
                barOneStyle.backgroundColor = 'black';
             }, i *30);
            }
             const tryif1 = i % 3 === 1;
             if(tryif1) {
                
                setTimeout(()=>{
                
                barOneStyle.height = `${arraux[i-1][1]}px`;
                barOneStyle.backgroundColor = 'black';

             }, i *30);
            }
            else{
                     barOneStyle.backgroundColor = 'black';
                     
                //  setTimeout(()=>{

                    
                //      barOneStyle.backgroundColor = 'black';
                //      console.log(newHeight);
                //  }, i * 50);
             }

         }
        arr = [];
    }
    heapSort(){

        const arr = heap(this.state.array);
        console.log(this.state.array);
        console.log(arr);
        for(let i = 0; i<arr.length; i++){
            const arrayBars = document.getElementsByClassName('circle');
            const [barOneIdx, newHeight] = arr[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const isColorChange = i % 3 === 2;
            if (isColorChange){
                
                const[barOneIdx, barTwoIdx]= arr[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
               
                

                setTimeout(() =>{
                    
                    let color = 'black';
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    
                },i * 50);


            }else{
                    barOneStyle.backgroundColor = 'black';
                setTimeout(()=>{
                    
                    barOneStyle.height = `${newHeight}px`;
                    barOneStyle.backgroundColor = 'white';
          
                }, i * 50);
            }

            }
    }
    render(){
        
        const {array} = this.state;
        
        return (
            <div className = "general">
                
                <div className = "array-cont">
            
                    {array.map((value, idx) =>(
                        <div className = "circle" 
                            key = {idx}
                            style={{height: `${value}px`}}
                            ></div>
            
                    ))}
                    {array1.map((value, idx) =>(
                        <div className = "circle1" 
                            key = {idx}
                            style={{height: `${value}px`}}
                            ></div>
            
                    ))}
                
                </div>
                <div className = "buttons">
                    
                    <Button onClick = {() => this.resetArray()}>Generate more balls</Button>
                    <Button onClick = {() => this.mergeSort()}>Do a Merge Sort</Button>
                    <Button onClick = {() => this.heapSort()}>Do a Heap Sort</Button>
                    <Button onClick = {() => this.bubbleSort()}> Do a Bubble Sort</Button>
                    <Button onClick = {() => this.quickSort()}> Do a Quick Sort</Button>

                </div>
                <div className = "background">

                </div>
               
                <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
            </div>
        );

    }

}





