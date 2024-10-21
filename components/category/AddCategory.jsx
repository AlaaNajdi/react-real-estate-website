import React from 'react'

const AddCategory = () => {
  return (
    <div>
      <h2>add category</h2>
      <form action=''>
        <div>
<label htmlFor='name'>name:</label>
<input type='text' id='name' required onChange={handlenamechange}></input>
</div>
<br/>
<div>
<label htmlFor='description'>description:</label>
<textarea id='description' required></textarea>
</div>
<button type='submit'>add category</button>
      </form>
    </div>
  )
}

export default AddCategory
