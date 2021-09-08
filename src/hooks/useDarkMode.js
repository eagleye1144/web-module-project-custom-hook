
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) =>{
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue);
    const handleChanges = updatedValue => {
        setSomeValue(updatedValue)
    }
    return [someValue, setSomeValue, handleChanges]
};

