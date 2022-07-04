import { Menu } from '../Menu';
import SidebarProps from './Sidebar.props';

function Sidebar(props: SidebarProps): JSX.Element {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
}

export default Sidebar;
