'use client'
import useMounted from '@/hooks/useMounted'
import React, { useState } from 'react'
import ProModal from '../pro-modal/ProModal'

type Props = {}

const ModalProvider = (props: Props) => {
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProModal />
    </>
  )
}

export default ModalProvider