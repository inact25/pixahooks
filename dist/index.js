var useLocalStorage = function useLocalStorage(key, initialValue) {
  var setValue = function setValue(value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage key \"" + key + "\": ", error);
    }
  };
  var getValue = function getValue() {
    try {
      var item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error getting localStorage key \"" + key + "\": ", error);
      return null;
    }
  };
  var removeValue = function removeValue() {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing localStorage key \"" + key + "\": ", error);
    }
  };
  if (initialValue !== undefined && getValue() === null) {
    setValue(initialValue);
  }
  return {
    setValue: setValue,
    getValue: getValue,
    removeValue: removeValue
  };
};

exports.useLocalStorage = useLocalStorage;
//# sourceMappingURL=index.js.map
