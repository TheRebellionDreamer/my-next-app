import axios from 'axios';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Paragraph, Rating } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout';

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(1);
  return (
    <>
      <Paragraph>
        Elit aute eu enim culpa ad consectetur consectetur qui. Reprehenderit consequat occaecat
        cillum excepteur eu excepteur. Dolore Lorem magna aute ad non et culpa culpa in enim
        excepteur. Deserunt culpa laborum culpa eu. Do in dolore aute dolore pariatur cupidatat
        nostrud.
      </Paragraph>
      <Rating rating={rating} isEditable onChangeRating={setRating} />
      <ul>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory },
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
