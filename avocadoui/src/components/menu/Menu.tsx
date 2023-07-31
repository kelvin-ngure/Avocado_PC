import React, { useContext } from 'react';
import '../../css/Menu.css'
import MenuTab from './MenuTab';

function Menu(props: any) {

  return (
    <div className="Menu">
        <ul>
          <li>
            <MenuTab 
              name= 'Tasks' 
              onClick= {() => props.changePageIndex(0)}
              bgColor= {props.menuIndex === 0 ? 'gray' : 'white'}
            />
          </li>
          <li>
            <MenuTab 
              name= 'Completed' 
              onClick= {() => props.changePageIndex(1)}
              bgColor= {props.menuIndex === 1 ? 'gray' : 'white'}
            />
          </li>
        </ul>
    </div>
  );
}

export default Menu;
