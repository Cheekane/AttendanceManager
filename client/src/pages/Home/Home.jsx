import React, { useState, useEffect } from "react"
import "./Home.scss"
import GroupCard from "../../components/GroupCard/GroupCard"
import AddNewGroup from "../../components/AddNewGroup/AddNewGroup"
import axios from "axios"
import { Toaster, toast } from "sonner"

const Home = () => {
  const [groups, setGroups] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [groupsPerPage] = useState(3)

  useEffect(() => {
    getGroupDesc()
  }, [])

  // Function to add a new group
  const addGroup = async (newGroup) => {
    try {
      await axios.post('http://localhost:8800/group', newGroup)
      toast.success(`Group added: ${newGroup.groupName}`)
      getGroupDesc() // Fetch groups again to update the list
    } catch (error) {
      toast.error('Failed to add group')
      console.error('Failed to add group:', error)
      throw error
    }
  }

  const getGroupDesc = async () => {
    try {
      const response = await axios.get("http://localhost:8800/groupdesc")
      setGroups(response.data)
    } catch (error) {
      console.error("Failed to fetch groups:", error)
    }
  }

  const handleRemoveClick = async (groupName) => {
    try {
      await axios.delete(`http://localhost:8800/group/${groupName}`)
      getGroupDesc(); // Optionally fetch groups again after deletion
    } catch (error) {
      console.error(`Failed to delete group: ${groupName}`, error)
    }
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const indexOfLastGroup = currentPage * groupsPerPage
  const indexOfFirstGroup = indexOfLastGroup - groupsPerPage
  const currentGroups = groups.slice(indexOfFirstGroup, indexOfLastGroup)

  return (
    <div className="main-container">
      <div className="dashboard-container">
        <div className="home-top-container">
          <div className="section-name-container">
            <h1 className="section-name">Dashboard</h1>
          </div>
          <AddNewGroup addGroup={addGroup} />
        </div>
        <div className="home-body-container">
          <GroupCard groups={currentGroups} handleRemoveClick={handleRemoveClick} />
          <div className="pagination-container">
            {Array.from({ length: Math.ceil(groups.length / groupsPerPage) }).map(
              (_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-button ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </div>
        <Toaster richColors />
      </div>
    </div>
  )
}

export default Home
