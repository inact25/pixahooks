declare const useLocalStorage: (key: string, initialValue?: any) => {
    setValue: (value: any) => void;
    getValue: () => any;
    removeValue: () => void;
};
export { useLocalStorage };
