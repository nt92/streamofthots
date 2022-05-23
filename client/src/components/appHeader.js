import {useEffect, useState} from "react";

function AppHeader () {
    const [theme, setTheme] = useLocalStorage('mode', 'light');

    const handleLightDark = (event) => {
        event.preventDefault();
        toggleLightDark();
    }

    const toggleLightDark = () => {
        if (theme === 'dark') {
            setTheme('light');
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        } else {
            setTheme('dark');
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        }
    }

    useEffect(() => {
        if(theme === 'dark') {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    });

    return (
        <header>
            <a href="/" className="logo">streamofthots</a>
            <nav>
                <a href="https://nikhilthota.com">about me</a>
                <button onClick={handleLightDark} className='light-dark'>light/dark</button>
            </nav>
        </header>
    );

    // https://usehooks.com/useLocalStorage/
    function useLocalStorage(key, initialValue) {
        // State to store our value
        // Pass initial state function to useState so logic is only executed once
        const [storedValue, setStoredValue] = useState(() => {
            if (typeof window === "undefined") {
                return initialValue;
            }
            try {
                // Get from local storage by key
                const item = window.localStorage.getItem(key);
                // Parse stored json or if none return initialValue
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                // If error also return initialValue
                console.log(error);
                return initialValue;
            }
        });
        // Return a wrapped version of useState's setter function that ...
        // ... persists the new value to localStorage.
        const setValue = (value) => {
            try {
                // Allow value to be a function so we have same API as useState
                const valueToStore =
                    value instanceof Function ? value(storedValue) : value;
                // Save state
                setStoredValue(valueToStore);
                // Save to local storage
                if (typeof window !== "undefined") {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                }
            } catch (error) {
                // A more advanced implementation would handle the error case
                console.log(error);
            }
        };
        return [storedValue, setValue];
    }
}

export default AppHeader;