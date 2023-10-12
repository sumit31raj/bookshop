import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { Book } from '@/types'
import { Button } from '@mui/material'

type Props = {}

const Booklist = (props: Props) => {

    const [bookList,setBookList]=useState<Book[]>([])


useEffect(()=>{

    async function fetchBooks(){
const res= await fetch('https://gutendex.com/books/')
const data= await res.json()

setBookList(data.results)
    }


    fetchBooks()

},[])

let content= bookList.length > 0 ? bookList.map((book:Book)=>{return <BookCard  id={book.id} key={book.id} title={book.title} author={book?.authors[0]?.name ?? "Unknown Author"} downloadCount={book.download_count}></BookCard>}): <div>Loading...</div>
  return (
    <><div>{content}</div>
    <Button>Load More Books</Button></>
  )
}

export default Booklist