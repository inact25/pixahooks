const useLocalStorage = (action: string, key: string, initialValue: any) => {
  const setValue = (localKey: string, localValue: any) => {
    localStorage.setItem(localKey, JSON.stringify(localValue));
  };

  const removeValue = (localKey: string) => {
    localStorage.removeItem(localKey);
  };

  const getValue = (localKey: string) => {
    return JSON.parse(localStorage.getItem(localKey) || 'null');
  };

  if (action === 'get') return getValue(key);
  if (action === 'set') setValue(key, initialValue);
  if (action === 'remove') removeValue(key);
};

export {useLocalStorage};
