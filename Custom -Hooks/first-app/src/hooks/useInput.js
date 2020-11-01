import {useState} from 'react'

function useInput(intialValue) {
  const [value,setValue] = useState (intialValue)
   
  const reset = ()=>{
      setValue(intialValue)
  }

  const bind = {
      value,
      onChange:e=>{
          setValue(e.target.value)
      }
  }

   return [value,bind,reset]
}

export default useInput
