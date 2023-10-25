'use client'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { useProModal } from '@/hooks/useProModal';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import { Check, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import axios from 'axios';
import { routes } from '../sidebar/Sidebar';
import toast from 'react-hot-toast';


const ProModal = () => {
  const [loading, setLoading] = useState(false);
  const proModal = useProModal();
  
  const onSubscribe = async () => {
    try {
      console.log('opening stripe billing')
      setLoading(true);
      const response = await axios.get('/api/stripe');
      window.location.href = response.data.url;
    } catch (error) {
      console.log("STRIPE_CLIENT_ERROR", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
            <div className='flex items-center gap-x-2 font-bold py-1'>
              Upgrade to Genius
              <Badge className='uppercase text-sm py-1' variant={'premium'}>
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription 
            className='text-center pt-2 space-y-2 text-zinc-900 font-medium'
            asChild  
          >
            <>
              {routes.filter((route) => route.generative).map((route) => (
                <Card
                  key={route.label}
                  className='p-3 border-black/5 flex items-center justify-between'
                >
                  <div className='flex items-center gap-x-4'>
                    <div className={cn('p-2 w-fit rounded-md', route.bgColor)}>
                      <route.Icon className={cn('w-6 h-6', route.color)} />
                    </div>
                    <div className='font-semibold text-sm'>
                      {route.label}
                    </div>
                  </div>
                  <Check className='text-primary w-5 h-5' />
                </Card>
              ))}
            </>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            size='lg'
            variant='premium'
            className='w-full'
            onClick={onSubscribe}
            disabled={loading}
          >
            Upgrade
            <Zap className='w-4 h-4 ml-2 fill-white' />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ProModal