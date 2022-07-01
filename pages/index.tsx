import { useState } from 'react';
import { Paragraph, Rating } from '../components';
import { withLayout } from '../layout';

function Home(): JSX.Element {
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
    </>
  );
}

export default withLayout(Home);
