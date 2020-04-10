import {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = (isEnabled) => {
    const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage('darkModeEnabled', isEnabled)
    useEffect(() => {
        // if darkModeEnabled add 'dark-mode' as class to body tag else remove it
        darkModeEnabled ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    }, [ darkModeEnabled ]);
    
    return [darkModeEnabled, setDarkModeEnabled]
}

export default useDarkMode