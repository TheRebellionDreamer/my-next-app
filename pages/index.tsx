import { Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Button variant='primary' onClick={() => alert('Saved!')} arrow='right'>
        Сохранить
      </Button>
      <Button variant='ghost' onClick={() => alert('Saved!')} arrow='down'>
        Сохранить
      </Button>
    </>
  );
}
