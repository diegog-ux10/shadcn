import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const latestTransactions = [
    {
        id: 1,
        title: "Subscriptions Renewed",
        badge: "John Doe",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        count: 1000,
    },
    {
        id: 2,
        title: "Payment for Service",
        badge: "Jane Smith",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        count: 12000,
    },
    {
        id: 3,
        title: "Subscription Renewed",
        badge: "Mike Johnson",
        image: "https://images.pexels.com/photos/20709194/pexels-photo-20709194.jpeg",
        count: 1000,
    },
    {
        id: 4,
        title: "Payment for Service",
        badge: "Sarah Brown",
        image: "https://images.pexels.com/photos/7562185/pexels-photo-7562185.jpeg",
        count: 100,
    },
    {
        id: 5,
        title: "Payment for Service",
        badge: "David Wilson",
        image: "https://images.pexels.com/photos/7562185/pexels-photo-7562185.jpeg",
        count: 1000,
    },
]

const popularContent = [
    {
        id: 1,
        title: "Javascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
        count: 100,
    },
    {
        id: 2,
        title: "N8N Tutorial",
        badge: "AI",
        image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
        count: 1000,
    },
]

const CardList = ({ title }: { title: string }) => {
    const list = title === "Popular Content" ? popularContent : latestTransactions;
    return (
        <div>
            <h1>{title}</h1>
            <div className='flex flex-col gap-2'>
                {list.map((item) => (<Card key={item.id} className='flex-row items-center justify-between gap-4 p-4'>
                    <div className='w-12 h-12 rounded-sm relative overflow-hidden'>
                        <Image src={item.image} alt={item.title} fill className='object-cover' />
                    </div>
                    <CardContent className='p-0 flex-1'>
                        <CardTitle className='text-sm font-medium'>{item.title}</CardTitle>
                        <Badge variant="default" className='text-xs'>{item.badge}</Badge>
                    </CardContent>
                    <CardFooter className='p-0'>{item.count / 1000}k</CardFooter>
                </Card>
                ))}
            </div>
        </div>
    )
}

export default CardList