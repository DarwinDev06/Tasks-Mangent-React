import React from "react";

function useLocalStorage (itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)


  React.useEffect(()=> {
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName)
  
        let parsedItem;
    
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }
        console.log('error1')
        console.log('error2',parsedItem)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
        console.log('error', error)
      }
    },2000)
  },[ ])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName,JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

  export {useLocalStorage}




  /* const defaultTodo = [
  {text: 'Practice English', completed: true},
  {text: 'Learn React.js', completed: false},
  {text: 'be fullstack developer', completed:false},
  {text: 'Get work in technology industry', completed:false}
]
localStorage.setItem('TASKS_V1', defaultTodo) 
localStorage.removeItem('TASK_V1)
 */

//CUSTOM HOOKS