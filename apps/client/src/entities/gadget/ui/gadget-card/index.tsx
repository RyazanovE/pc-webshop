import {
  Card,
  CardActionArea,
  Box,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
  SxProps,
  Theme
} from '@mui/material'
import router from 'next/router'
import React from 'react'
import { ICard } from 'src/shared/types'

export type IindexProps = {
  card: ICard
  sx?: SxProps<Theme>
}

const GadgetCard: React.FC<IindexProps> = ({ card, sx }) => {

  return (
    <Card
      onClick={() => router.push(`/gadjet/${card.id}`)}
      sx={{ position: "relative", overflow: "visible", width: "250px", height: "max-content", display: "inline-block", ...sx }}>
      {card.discount && <Box sx={{ bgcolor: "red", borderRadius: "5px", px: 1, position: "absolute", top: 10, left: -8, zIndex: 10 }}>
        {`${card.discount}% off`}
      </Box>}
      <CardActionArea >
        <Box sx={{ background: 'white' }}>
          <CardMedia
            style={{ height: '200px' }}
            image={card.image}
            title={card.title}
          />
        </Box>
        <CardContent sx={{ gap: 1, display: "flex", flexDirection: "column", pb: 0 }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Rating size="small" name="read-only" value={card.rating} readOnly />
            {`(${64})`}
          </Box>
          <Typography variant='h5' height={70}>
            {card.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p' height={120}>
            {card.description}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography variant='h5' component='p'>
              {"22$"}
            </Typography>
            <Typography variant='h6' color='textSecondary' sx={{ textDecoration: "line-through" }} component='p'>
              {"22$"}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', }}>
          <Button size='small' color='primary'>
            more
          </Button>
          <Button
            variant='contained'
            size='small'
            color='primary'
          >
            add to cart
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}

export { GadgetCard }
