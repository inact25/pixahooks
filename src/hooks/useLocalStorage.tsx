const useLocalStorage = (key: string, initialValue?: any) => {
  const setValue = (value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}": `, error);
    }
  };

  const getValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting localStorage key "${key}": `, error);
      return null;
    }
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}": `, error);
    }
  };

  // Automatically set the initial value if it's provided and the key does not exist yet
  if (initialValue !== undefined && getValue() === null) {
    setValue(initialValue);
  }

  return { setValue, getValue, removeValue };
};

export { useLocalStorage };
