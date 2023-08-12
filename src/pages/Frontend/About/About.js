import React, { useEffect, useState } from 'react'

import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { useAuthContext } from '../../Context/AuthContext'
import { firestore } from '../../../config/firebase';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
const initialState = { title: "", description: "", date: "" }

export default function About() {
  const [state, setState] = useState(initialState)
  const [documents, setDocuments] = useState([])
  const [todo, setTodo] = useState({})
  const [isApploading, setisApploading] = useState(true)
  const [isApploadingDelete, setisApploadingDelete] = useState(false)
  const { user } = useAuthContext()


  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

const handleUpdate= async(todo)=>{

const formData = {...todo}

try {
  await setDoc(doc(firestore, "todos", formData.randumId), formData);
 setDocuments(docs=>[...docs, formData])
 
  window.notify("Add ToDo successfull", "success")
}
catch (err) {
  console.error(err)
  window.notify("something wants wrong, ToDo not added", "error")
}

}







  const fatchDocuments = async () => {
    const array = []
    const querySnapshot = await getDocs(collection(firestore, "todos"));
    querySnapshot.forEach((doc) => {
      const Data = doc.data()
      array.push(Data)
      setDocuments(array)
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setisApploading(false)
    });
  }





  useEffect(() => {
    fatchDocuments()
  }, [])

  const handleDelete = async (document) => {
    console.log(document);
    setisApploadingDelete(true)
    try {
      await deleteDoc(doc(firestore, "todos", document.randumId));
      let newdocument = documents.filter(doc => doc.randumId !== document.randumId)
      setDocuments(newdocument)
      window.notify("successfuly Deleted ", "success")

    } catch (err) {
      console.log(err);
      window.notify("SomeThing wants worng on deleting user!", "error")

    }
    setisApploadingDelete(false)

  }


  return (
    <>

      <div className="home ">
        <div className="container">
          <h2 className='text-center my-5'>ADD TODO</h2>
          <div className="row justify-content-center">
            <div className="col-12 ">

              <div className="card p-4  my-5 text-center ">
                <Table>
                  <Thead>
                    <Tr>
                      <Th>#</Th>
                      <Th>Title</Th>
                      <Th>Description</Th>
                      <Th>Date</Th>
                      <Th>Action</Th>

                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      documents.map((document, i) => {
                        return (
                          <Tr key={i}>
                            <Td>{i + 1}</Td>
                            <Td>{document.title}</Td>
                            <Td>{document.description}</Td>
                            <Td>{document.date}</Td>
                            <Td>
                              <button className='btn btn-info btn-sm me-2' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setTodo(document) }} >Edit</button>
                              <button className='btn btn-danger btn-sm' onClick={() => { handleDelete(document) }} >
                                {!isApploadingDelete ?
                                  "Delete" :
                                  <>
                                    <div className="spinner-border" role="status" >
                                      <span className="visually-hidden">Loading...</span>
                                    </div>
                                  </>

                                }
                              </button>
                            </Td>

                          </Tr>
                        )
                      })
                    }
                  </Tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* <!-- Modal -->*/}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">update Todo</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <input type="text" className="form-control" id="title" placeholder='Title' name='title' value={todo.title} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <input type="text" className="form-control" id="description" placeholder='Description' name='description' value={todo.description} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input type="date" className="form-control" id="date" name='date' value={todo.date} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input type="file" className="form-control" id="image" name='image' placeholder='Upload image' />
                  </div>
                </div>
                
              </div>





            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleUpdate} >Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
