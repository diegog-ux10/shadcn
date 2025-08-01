'use client'
import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Popover, PopoverContent } from './ui/popover'
import { PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { format } from 'date-fns'

const todoList = [
    {
        id: 1,
        title: 'Create a new project',
        completed: false
    },
    {
        id: 2,
        title: 'Create a new project',
        completed: false
    },
    {
        id: 3,
        title: 'Create a new project',
        completed: false
    },
    {
        id: 4,
        title: 'Create a new project',
        completed: false
    },
    {
        id: 5,
        title: 'Create a new project',
        completed: false
    },
    {
        id: 6,
        title: 'Create a new project',
        completed: false
    },
    {
        id: 7,
        title: 'Create a new project',
        completed: false
    },
    {
        id: 8,
        title: 'Create a new project',
        completed: false
    },
    {
        id: 9,
        title: 'Create a new project',
        completed: false
    },
    {
        id: 10,
        title: 'Create a new project',
        completed: false
    },
    {
        id: 11,
        title: 'Create a new project',
        completed: false
    },
]

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false)
    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className='w-full'>
                        <CalendarIcon />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                    <Calendar mode='single' selected={date} onSelect={(date) => {
                        setDate(date)
                        setOpen(false)
                    }} className='rounded-md border' />
                </PopoverContent>
            </Popover>
        <ScrollArea className="max-h-[550px] mt-4 overflow-y-auto">
            <div className='flex flex-col gap-4'>
            {todoList.map((item) => (
                <Card key={item.id} className='p-4'>
                    <div className='flex items-center gap-4'>
                        <Checkbox id={item.id.toString()} />
                        <label htmlFor={item.id.toString()} className='text-sm text-muted-foreground'>
                            {item.title}
                        </label>
                    </div>
                    </Card>
                ))}
            </div>
        </ScrollArea>
        </div>
    )
}

export default TodoList