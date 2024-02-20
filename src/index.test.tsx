import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from './hooks/useLocalStorage';

// Mock localStorage
const localStorageMock = (function() {
  let store: Record<string, string> = {};
  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = String(value);
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('useLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should set and get a value', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'testValue'));

    act(() => {
      result.current.setValue('newValue');
    });

    expect(result.current.getValue()).toBe('newValue');
  });

  it('should remove a value', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'testValue'));

    act(() => {
      result.current.setValue('newValue');
      result.current.removeValue();
    });

    expect(result.current.getValue()).toBeNull();
  });
});
