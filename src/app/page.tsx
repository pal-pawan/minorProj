'use client';
import React, { useState } from 'react';
import { toast, useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { taskValidationSchema } from '@/validationSchema/taskValidationSchema';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";


const page = () => {

  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);
  const [createdAt, setCreatedAt] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data:z.infer<typeof taskValidationSchema>) => {
    setIsSubmitting(true);
    setCreatedAt(Date.now().toString());
    setTask(data.task);
    console.log(data.task)
    toast({
      description:"Adding task..."
    })
    try {
      const taskData = await axios.post('/api/addTask', { task, status });
      console.log(taskData);
      toast({
        description:`Task "${task}" added successfully`
      })
    } catch (error) {
      toast({
        description:`Failed to add task  ${task}`,
        variant:'destructive'
      });
    } 

    finally { setIsSubmitting(false);
     }
  }

  // Implementing zod validations
  
  const form = useForm({
    resolver: zodResolver(taskValidationSchema),
    defaultValues: {
      task: ""
    }
  })
  
  return (
    <>
      <div className='w-full h-screen flex items-center justify-center bg-black'>
        <div className=' flex flex-col gap-5 h-4/5 w-4/5 bg-[#ffffff20] rounded-lg'>
          <h1 className=' font-semibold text-gray-100 outline-sky-500 bg-slate-400/20 rounded-md text-center px-2 py-2 text-4xl'>TODO PAL</h1>
          <div className='flex justify-center'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}className='flex gap-5 w-full justify-center'>
              <FormField control={form.control} name='task' render={({ field }) => {
                return (
                  <>
                    <FormItem>
                      <FormControl>
                        <Input placeholder='Add Task here' required {...field} className='w-full' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </>
                )
              }}/>
              <Button type='submit' className='px-3 py-2'>Submit</Button>
            </form>
          </Form>
          </div>
          

        </div>
      </div>
    </>
  )
}

export default page;
