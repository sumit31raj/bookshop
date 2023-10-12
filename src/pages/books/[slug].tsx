import { useRouter } from 'next/router'
import React, { useEffect ,useState} from 'react'
import { Book } from '@/types'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {}

const Page = (props: Props) => {
    const router = useRouter()

    const [book,setBook]=useState<Book>()


    useEffect(()=>{
    
        async function fetchBooks(id:number){
    const res= await fetch(`https://gutendex.com/books/${id}`)
    const data= await res.json()
    console.log(book)
setBook(data)
        }
    
    
        fetchBooks(+router.query.slug!)
    
    },[])


    console.log(book)

    let content=book ? <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="books"
   
      image={book?.formats?.['image/jpeg'] || 'fallback-image-url-if-undefined'}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {book?.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {/* Author Name : {book?.authors[0].name.split(",").reverse().join(" ")} */}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        {book?.copyright}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        {book?.subjects?.join(", ")}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        {book?.bookshelves?.join(",")}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
: <div>Loading///</div>

    return content    

}

export default Page