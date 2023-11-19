import {createContext, useContext} from 'react'

const TaskContext = createContext();
export const useTasks=()=> {
    const context= useContext(TaskContext);

    if(!context){
        throw new Error('useTasks must be used within a TaskProvider');
    }
}


export function TaskProvider({children}){
    return(
        <TaskContext.Provider value={{}}>
            {children}
        </TaskContext.Provider>
    )
}