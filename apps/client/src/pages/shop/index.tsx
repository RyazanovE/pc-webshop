import { Button, Grid } from '@mui/material'
import { GadgetGrid } from 'src/entities/gadget'
import { WithContainer } from 'src/shared/ui'
import { SortBar } from 'src/shared/ui/sort-bar'
import { ShopSidebar } from 'src/widgets/sidebar'

const Shop = () => {
  const showingResultsNumber = 22
  const allResultsNumber = 84

  const categories = [
    "Sun Care",
    "Night Care",
    "Treatments",
    "Moisturizers",
    "Masks",
    "Featured",
  ]

  const genders = [
    { title: "Men", counter: 11 },
    { title: "Women", counter: 23 },
    { title: "Unisex", counter: 5 }
  ]

  const cards = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is card 1',
      image:
        'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png',
      discount: 20,
      rating: 3,
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is card 2',
      image:
        'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-06.png',
      rating: 4,
      discount: 20,
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'This is card 3',
      image:
        'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-03.png',
      rating: 2,
    },
    {
      id: 4,
      title: 'Card 1',
      description: 'This is card 1',
      image:
        'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png',
      discount: 20,
      rating: 3,
    },
    {
      id: 5,
      title: 'Card 2',
      description: 'This is card 2',
      image:
        'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-06.png',
      rating: 4,
      discount: 20,
    },
    {
      id: 6,
      title: 'Card 3',
      description: 'This is card 3',
      image:
        'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-03.png',
      rating: 2,
    },
    {
      id: 7,
      title: 'Card 1',
      description: 'This is card 1',
      image:
        'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png',
      discount: 20,
      rating: 3,
    },
    {
      id: 8,
      title: 'Card 2',
      description: 'This is card 2',
      image:
        'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-06.png',
      rating: 4,
      discount: 20,
    },
    {
      id: 9,
      title: 'Card 3',
      description: 'This is card 3',
      image:
        'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-03.png',
      rating: 2,
    },
    {
      id: 10,
      title: 'Card 1',
      description: 'This is card 1',
      image:
        'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png',
      discount: 20,
      rating: 3,
    },
    {
      id: 11,
      title: 'Card 2',
      description: 'This is card 2',
      image:
        'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-06.png',
      rating: 4,
      discount: 20,
    },
    {
      id: 12,
      title: 'Card 3',
      description: 'This is card 3',
      image:
        'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-03.png',
      rating: 2,
    }
  ]

  return (
    <WithContainer>
      <Grid container>
        <Grid xs={3}>
          <ShopSidebar categories={categories} genders={genders} />
        </Grid>

        <Grid xs={9} mt={2}>
          <SortBar allResultsNumber={allResultsNumber} showingResultsNumber={showingResultsNumber} />
          <GadgetGrid cards={cards} sx={{ justifyContent: "center" }} />
          <Button sx={{ mb: 1, mx: "auto", display: "block" }}>
            Load more
          </Button>
        </Grid>
      </Grid >
    </WithContainer >
  )
}

export default Shop
