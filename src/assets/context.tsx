import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { schedule } from "./mockData";

type ContextType = {
    selectedValue: schedule[] | undefined;
    setSelectedValue: Dispatch<SetStateAction<schedule[] | undefined>>;
    index: number;
    setIndex: Dispatch<SetStateAction<number>>
}
export const MyContext = createContext<ContextType | undefined>(undefined);

export default function MyProvider({children}: { children: ReactNode }) {
    const [selectedValue, setSelectedValue] = useState<schedule[] | undefined>(undefined);
    const [index, setIndex] = useState<number>(0)
    return (
        <MyContext.Provider value = {{selectedValue, setSelectedValue, index, setIndex}}>
        {children}
        </MyContext.Provider>
    )
}
export const useValues = (): ContextType => {
    const context = useContext(MyContext);
    if(!context) {
        throw new Error('useValues must be used within a MyProvider');
    }
    return context;
}
