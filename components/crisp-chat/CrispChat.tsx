'use client'
import React, { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';


export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("83f7528a-d6c4-40d2-a8f6-56e04eaa0aea");
  }, [])

  return null
}