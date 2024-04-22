'use client'
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';


export default function Todos(){
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'desc') {
      setDesc(value);
    }
  };

  const handleSubmit = () => {
    if (!title || !desc) {
      setError('Title and Description are required!');
      return;
    }
    const newTodo = { title, desc, is_finish: false };
    setTodos([...todos, newTodo]);
    setTitle('');
    setDesc('');
    setError('');
  };

  const handleCheck = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].is_finish = !updatedTodos[index].is_finish;
    setTodos(updatedTodos);
  };

  const filteredTodos = (isFinished) => todos.filter(todo => todo.is_finish === isFinished);



  return (
    
    <main className='px-5 py-10'>
      <Card className=''>
          <CardHeader className='flex items-center'>
              <Heading size='lg'>My Todo-List</Heading>
              <Button
                  className='ml-auto'
                  colorScheme="blue"
                  onClick={() => {
                    setIsCreateOpen(true)
                }}
              >
                  Add Todo
              </Button>
          </CardHeader>
          <CardBody>
          <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-4">
              
                <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-4">
                  <div className="px-4 py-2 overflow-y-auto max-h-48">
                  {filteredTodos(false).map((todo, index) => (
                        <Card className='m-4' key={index}>
                          <input
                            type="checkbox"
                            checked={todo.is_finish}
                            onChange={() => handleCheck(index)}
                          />
                          <label>{todo.title}</label>
                          <p>{todo.desc}</p>
                        </Card>
                      ))}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
            
                <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-4">
                  <div className="px-4 py-2 overflow-y-auto max-h-48">
                  {filteredTodos(true).map((todo, index) => (
                    <Card className='m-4' key={index}>
                      <label>{todo.title}</label>
                      <p>{todo.desc}</p>
                      <input
                        type="checkbox"
                        checked={todo.is_finish}
                        onChange={() => handleCheck(index)}
                      />
                      
                    </Card>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
      </Card>
      {/* Modal Create Todo */}
      <Modal
                isOpen={isCreateOpen}
                onClose={() => setIsCreateOpen(false)}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Todo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input 
                                type="text"
                                name="title"
                                value={title}
                                onChange={handleInputChange}
                                placeholder="Title"
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Input 
                                type="text"
                                name="desc"
                                value={desc}
                                onChange={handleInputChange}
                                placeholder="Description"
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                        
                    </ModalFooter>
                </ModalContent>
            </Modal>
    </main>

  )
}