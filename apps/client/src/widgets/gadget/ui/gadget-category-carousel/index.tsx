import React, { useMemo } from 'react';
import _ from "lodash"
import useWindowDimensions from 'src/shared/hooks/use-window-dimensions';
import CategoryIcon from '@mui/icons-material/Category';
import { CategoryCard } from 'src/entities/category';
import { ICategory } from 'src/shared/types';
import { Carousel, ICarouselProps } from 'src/shared/ui';
import { Box, SxProps, Theme } from '@mui/material';
import { categoryCardSize } from 'src/shared/const/containerWidth';

export interface IGadgetCarouselProps extends ICarouselProps {
  categories: ICategory[],
}

const GadgetCategoryCarousel: React.FC<Omit<IGadgetCarouselProps, "title" | "Icon" | "pagesCount" | "heading">> = ({ categories, ...props }) => {
  const [width] = useWindowDimensions();

  const categoriesGridArr = useMemo(() => {
    let chunkSize = 8

    if (width < 1536) {
      chunkSize = 6
    }

    if (width < 1200) {
      chunkSize = 5
    }

    if (width < 900) {
      chunkSize = 4
    }

    if (width < 750) {
      chunkSize = 3
    }

    if (width < 500) {
      chunkSize = 2
    }

    return _.chunk(categories, chunkSize)
  }, [width, categories])


  return (
    <Carousel
      sx={{ ...props.sx, minHeight: '226px' }}
      pagesCount={categoriesGridArr.length - 1}
      title='Categories'
      heading="Browse by category"
      Icon={CategoryIcon}
      {...props}
    >
      {categoriesGridArr.map((categories, i) =>
        <Box key={i} sx={{ minWidth: "100%", py: 1, display: "flex", gap: 2 }}>
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} sx={{ width: categoryCardSize }} />
          ))}
        </Box>
      )}
    </Carousel>
  );
}

export { GadgetCategoryCarousel };