import React, { useEffect, useState } from 'react'
import "../DashboardCompnent/Herosection.css"
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoCheckmarkDone } from "react-icons/io5";

const Herosection = () => {
  const [completedTask, setcompletedTask] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [listItems, setListItems] = useState([])
  const [listItemData, setListItemData] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {
    const saved = localStorage.getItem("My-todo")
    console.log("Loaded:", saved)
    if (saved) {
      setListItems(JSON.parse(saved))
    }
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("My-todo", JSON.stringify(listItems))
      console.log("Saved:", listItems)
    }
  }, [listItems, isInitialized])

  const handleChange = (e) => {
    const { name, value } = e.target

    setListItemData({ ...listItemData, [name]: value })
  }

  const handleAdd = (e) => {
    if (!listItemData.title.trim()) {
      alert("Title Missing??")
      return
    }

    let newTask = {
      id: Date.now(),
      title: listItemData.title,
      description: listItemData.description,
      completed: false,
    }
    setListItems([...listItems, newTask]);

    setListItemData({
      title: '',
      description: '',
    })
  }

  const handleDelete = (id) => {
    setListItems(listItems.filter((item) => item.id !== id));
  };

  const handleComplete = (id) => {
    setListItems(
      listItems.map((item) =>
        item.id === id ? { ...item, completed: true } : item
      )
    );
  };

  return (
    <div className='Herosection'>
      <div className='Herosection-Tittle'>
        <h2>My ToDo</h2>
      </div>
      <div className='Add-Task'>
        <div className='Add-Task-items'>
          <label className='Add-Task-Lable'>Title: </label>
          <input type="text" placeholder=' Title of Task' className='Add-Task-Input' value={listItemData.title} name='title' onChange={handleChange} />
        </div>
        <div className='Add-Task-items'>
          <label className='Add-Task-Lable'>Description: </label>
          <input type="text" placeholder=' Description of Task' className='Add-Task-Input' value={listItemData.description} name='description' onChange={handleChange} />
        </div>
        <div className='Add-Task-btn-Section'>
          <button type='submit' className='AddTask-btn' onClick={handleAdd}>Add</button>
          <button className='AddTask-btn' onClick={() => setListItemData({ title: '', description: '' })}>Cancel</button>
        </div>
      </div>
      <div className='Task-Section'>
        <div className='Task-button-section'>
          <button className={`Task-button ${completedTask === false && 'active'}`} onClick={() => setcompletedTask(false)}>ToDo</button>
          <button className={`Task-button ${completedTask === true && 'active'}`} onClick={() => setcompletedTask(true)}>Completed</button>
        </div>
        {listItems.filter(item => item.completed === completedTask)
          .map((item) => {
            return (
              <div className="Task-list" key={item.id}>
                <div className='Task-list-item'>
                  <div className='Task-list-item-title'>
                    <p>{item.title}</p>
                    {!item.completed && <IoCheckmarkDone className='done' onClick={() => handleComplete(item.id)} />}
                    <RiDeleteBin5Fill className='bin' onClick={() => handleDelete(item.id)} />
                  </div>
                  <p className='Task-list-item-Des'>{item.description}</p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Herosection