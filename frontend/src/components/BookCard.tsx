import React from "react";
import { Card, Grid, CardMedia, CardActions, CardContent, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { Book } from "@/types";
import { useAddToFavorite } from "@/hooks/useAddToFavorite";
import { useRemoveFavorite } from "@/hooks/useRemoveFavourite";

interface BookCardProps {
  book: Book;
  refresh: () => void;
  isFavourite: boolean;
};

const BookCard = ({ book, refresh, isFavourite }: BookCardProps) => {
  const { addTofavourite, loading: addLoading, error: addError } = useAddToFavorite(book.id, refresh);
  const { removefavourite, loading: removeLoading, error: removeError } = useRemoveFavorite(book.id, refresh);

  const actionToPerform = () => {
    if (isFavourite) {
      removefavourite();
    } else {
      addTofavourite();
    }
  }

  const loading = addLoading || removeLoading;
  
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="div"
          sx={{
            pt: '56.25%',
          }}
          image={book.formats['image/jpeg']}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {book.title}
          </Typography>
          <Typography>
            {book.subjects.join(', ')}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites" onClick={actionToPerform}>
            { loading ? 
              <CircularProgress size={15} /> : 
              isFavourite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />
            }
          </IconButton>
          <Link href={`/books/${book.id}`}>
            view
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BookCard;
