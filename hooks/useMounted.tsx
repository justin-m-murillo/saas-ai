'use client'
import React, { useState, useEffect } from 'react'


const useMounted = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  return isMounted;
}

export default useMounted