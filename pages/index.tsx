import React from 'react';
import { Htag, Button, Paragraph } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
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
    </>
  );
}
