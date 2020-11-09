import React, { useState, useEffect } from 'react';

export default function Debounce(query: string) {
    const [debouncedValue, setDebouncedValue] = useState(query);
  
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(query);
        }, 500);
        return () => {
          clearTimeout(handler);
        };
      },
      [query] 
    );
  
    return debouncedValue;
  }