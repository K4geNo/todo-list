import { Box, Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react"

import { RiAddCircleLine } from "react-icons/ri"
import { BiTrash } from "react-icons/bi"
import { useState } from "react"

interface TaskProps {
    id: number
    title: string
    isCompleted: boolean
}

export function TaskList() {
    const [tasks, setTasks] = useState<TaskProps[]>([])
    const [newTaskTitle, setNewTaskTitle] = useState("")

    const handleCreateNewTask = () => {
        const newTask = {
            id: Math.random(),
            title: newTaskTitle,
            isCompleted: false,
        }

        setTasks((oldState) => [...oldState, newTask])
        setNewTaskTitle("")
    }

    const removeTodo = (id: number) => {
        setTasks((oldState) => oldState.filter((task) => task.id !== id))
    }

    const handleChangeTaskStatus = (id: number) => {
        const newTasks = tasks.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        )
        setTasks(newTasks)
    }

    return (
        <Flex
            w="full"
            justifyContent={"center"}
            align="center"
            flexDir="column"
        >
            <Box mt={"-30px"}>
                <Input
                    w={"638px"}
                    h="54px"
                    bg="gray.500"
                    placeholder="Adicione uma nova tarefa"
                    _placeholder={{ color: "gray.300" }}
                    border="1px solid gray.700"
                    onChange={(e: any) => setNewTaskTitle(e.target.value)}
                    value={newTaskTitle}
                />
                <Button
                    type="submit"
                    colorScheme={"none"}
                    bg="blue-dark"
                    w="90px"
                    h="52px"
                    ml={"8px"}
                    rightIcon={<RiAddCircleLine size={"16px"} />}
                    onClick={() => handleCreateNewTask()}
                >
                    <Text fontSize={"0.875rem"} fontWeight="bold">
                        Criar
                    </Text>
                </Button>
            </Box>

            <Flex
                maxW="736px"
                w="full"
                flexDir={"column"}
                pt={"4rem"}
                justifyContent="center"
                align="center"
            >
                <Flex
                    w="full"
                    justifyContent={"space-between"}
                    alignItems="center"
                >
                    <Text fontWeight={"bold"} fontSize="0.875rem" color="blue">
                        Tarefas criadas
                        <Text
                            as="span"
                            ml="8px"
                            bg="gray.400"
                            p="7px"
                            rounded={"999px"}
                            color="gray.100"
                        >
                            {tasks.length}
                        </Text>
                    </Text>

                    <Text
                        fontWeight={"bold"}
                        fontSize="0.875rem"
                        color="purple"
                    >
                        Concluídas
                        <Text
                            as="span"
                            ml="8px"
                            bg="gray.400"
                            p="7px"
                            rounded={"999px"}
                            color="gray.100"
                        >
                            {`${
                                tasks.filter((task) => task.isCompleted).length
                            } de ${tasks.length}`}
                        </Text>
                    </Text>
                </Flex>

                <Flex
                    w="full"
                    justifyContent={"center"}
                    alignItems="center"
                    flexDir={"column"}
                    mt={"2.5rem"}
                >
                    {tasks.map((task) => (
                        <Flex
                            w="full"
                            key={task.id}
                            bg={task.isCompleted ? "gray.500" : "gray.400"}
                            py="1rem"
                            px="1rem"
                            mt={"0.75rem"}
                            borderRadius={"8px"}
                            justifyContent={"space-between"}
                            alignItems="center"
                            textDecoration={
                                task.isCompleted ? "line-through" : ""
                            }
                        >
                            <Checkbox
                                spacing="1rem"
                                pr={"2rem"}
                                onChange={() => handleChangeTaskStatus(task.id)}
                                colorScheme="blue"
                                checked={task.isCompleted}
                            >
                                <Text fontSize="0.875rem">{task.title}</Text>
                            </Checkbox>
                            <Button
                                colorScheme={"none"}
                                _hover={{
                                    color: "danger",
                                }}
                                onClick={() => removeTodo(task.id)}
                            >
                                <BiTrash size="20px" />
                            </Button>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}
