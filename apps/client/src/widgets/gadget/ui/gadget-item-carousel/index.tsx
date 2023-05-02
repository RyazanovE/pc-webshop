import React, { useMemo } from 'react';
import { GadgetGrid } from 'src/entities/gadget';
import { ICard } from 'src/shared/types';
import _ from "lodash";
import { Carousel, ICarouselProps } from 'src/shared/ui';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export interface IGadgetItemCarouselProps extends ICarouselProps {
  cards: ICard[]
}

const GadgetItemCarousel: React.FC<Omit<IGadgetItemCarouselProps, "title" | "Icon" | "pagesCount" | "heading">> = ({ cards, ...props }) => {

  const grid = useMemo(() => {
    return _.chunk(cards, 8)
  }, [cards])

  return (
    <Carousel
      title='Our Products'
      heading="Explore our Products"
      Icon={ShoppingBasketIcon}
      pagesCount={grid.length - 1}
      {...props}
    >
      {grid.map((cards, i) =>
        <GadgetGrid key={i} cards={cards} sx={{ minWidth: "100%" }} />
      )}
    </Carousel>
  );
}

export { GadgetItemCarousel };