import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import s from './style.module.css';
import cn from 'classnames';
import YouWin from './assets/you-win.png';
import YouLose from './assets/you-lose.png';
import Draw from './assets/draw.png';

const Result = ({ type, isActive }) => {
   const history = useHistory();
   const [url, setUrl] = useState(null);

   const handleClick = () => {
     history.replace('/game/finish')
   }

   useEffect(() => {
       switch (type) {
           case 'win':
               setUrl(YouWin);
               break;
           case 'lose':
               setUrl(YouLose);
               break;
           case 'draw':
               setUrl(Draw);
               break;
           default:
               setUrl(YouWin);
       }
   }, [type]);

    return (
        <div className={cn(s.result, {[s.deactive]: !isActive}, {[s.active]: isActive})}>
            <img src={url}
                 alt="result"
                 onClick={handleClick} />
        </div>
    );
};

export default Result;
