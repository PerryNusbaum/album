import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Image from './Image';

function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index === 3) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePrevious = () => {
    if (index === 0) {
      setIndex(3);
    } else {
      setIndex(index - 1);
    }
  };
console.log(index)
  // let index=0;
  return (<>
      <IconButton onClick=/*{index==-1?index=3:index--}*/{handlePrevious}>
      <NavigateBeforeRoundedIcon />
    </IconButton>
    <Image ind= {index}>
      <img src="https://yaaracacao.co.il/wp-content/uploads/2020/11/lev.jpg" alt='1'/>
      <img src='https://taasuka.galil-elion.org.il/sites/taasuka.galil-elion.org.il/files/Indexb-photos/Screen%20Shot%202019-09-12%20at%2021.43.47.png' alt='2'/>
      <img src='https://www.tory.co.il/wp-content/uploads/2022/07/DSC_1806-copy-scaled.jpg' alt='3'/>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Noto_Emoji_v2.034_2764.svg/640px-Noto_Emoji_v2.034_2764.svg.png' alt='4'/>
    </Image>
    <IconButton onClick=/*{index==3?index=0:index++}*/{handleNext}>
      <NavigateNextRoundedIcon />
    </IconButton>

    </>
  );
}

export default App;
