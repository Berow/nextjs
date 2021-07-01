import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import axios from 'axios';
import { Htag, Button, Paragraph, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

export function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, SetRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
        Кнопка
      </Button>
      <Paragraph size="s">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora consequuntur nihil iure
        ipsum tenetur minus incidunt, tempore, natus distinctio doloribus vero quasi asperiores
        dolorem eum hic est? Pariatur, incidunt repellendus? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Suscipit aliquid iste praesentium doloremque quasi repellendus natus ut
        laboriosam! Numquam ipsa voluptatem voluptas laboriosam incidunt? Rem aliquid odio
        praesentium vitae tempore!
      </Paragraph>
      <Rating rating={rating} isEditable setRating={SetRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find, {firstCategory}`,
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
