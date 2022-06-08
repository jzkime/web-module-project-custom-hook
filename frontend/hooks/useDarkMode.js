import {useState} from 'react'
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initial) => {
  const [ storedValue, setValue ] = useLocalStorage("darkMode", initial);
  const [darkMode, setDarkMode] = useState(storedValue);

    const changeDark = () => {
        setDarkMode(!darkMode);
        setValue(!darkMode)
      }

    return ([darkMode, changeDark]);
}

export default useDarkMode;