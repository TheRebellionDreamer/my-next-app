import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import style from './Menu.module.css';

function Menu(): JSX.Element {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  return (
    <div>
      <ul>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
