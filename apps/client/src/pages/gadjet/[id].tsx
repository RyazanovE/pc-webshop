import { Box, Button, Divider, IconButton, Rating, ThemeOptions, Typography, useTheme } from '@mui/material'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { api } from 'src/shared/api/axios-instance'
import { IGadget } from 'src/shared/types'
import { WithContainer } from 'src/shared/ui'
import Image from 'next/image'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function Gadjet({ gadjet }: InferGetStaticPropsType<typeof getStaticProps>) {
  const theme: ThemeOptions = useTheme()


  return (
    <WithContainer sx={{ my: theme.mY.large }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", width: "50%" }}>
          {gadjet.images && gadjet.images.map((img, i) => <Box key={i} sx={{ mx: 2 }}><Image src={img} alt={gadjet.description} width={400} height={300} style={{ borderRadius: 10 }} /></Box>)}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "50%" }}>
          <Typography variant="h3" component="h2">
            {gadjet.title}
          </Typography>
          <Typography variant="h5" component="h4">
            {`$${gadjet.price}`}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating size="small" name="read-only" value={gadjet.rating} />
            {`(${64})`}
          </Box>
          <Divider />
          <Typography variant='h5'>
            Description
          </Typography>
          <Typography >
            {gadjet.description}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: "auto" }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <IconButton color='primary'><AddIcon /></IconButton>
              <Typography variant="h5" component="p">1</Typography>
              <IconButton color='primary'><RemoveIcon /></IconButton>
            </Box>
            <Button sx={{ flex: 1 }} variant="contained">add to cart</Button>
            <IconButton color='primary'>
              <FavoriteIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </WithContainer>
  )
}


export const getStaticProps: GetStaticProps<{ gadjet: IGadget }> = async ({ params }) => {
  console.log(params)
  const { data } = await api.get<IGadget>(`gadjets/${params?.id}`)

  return { props: { gadjet: data } }
}


export const getStaticPaths: GetStaticPaths = async () => {

  const { data } = await api.get<IGadget[]>('gadjets')

  const paths = data.map((gadget) => ({
    params: { id: gadget.id.toString() },
  }))

  return { paths, fallback: false }
}