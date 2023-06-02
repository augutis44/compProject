import Button from "../components/Button"
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

const ButtonPage = () => {

  const handleClick = () => {
    console.log('Click!!');
  };

  return <div>
    <div>
      <Button primary rounded outline onClick = {handleClick} className={'mb-5'}><GoBell />Hi there!</Button>
    </div>
    <div>
      <Button secondary rounded onMouseEnter = {handleClick}><GoCloudDownload />Bye there!</Button>
    </div>
    <div>
      <Button success><GoDatabase />Add me!</Button>
    </div>
    <div>
      <Button warning rounded outline>Delete</Button>
    </div>
    <div>
      <Button danger outline>Buy</Button>
    </div>
  </div>

}

export default ButtonPage;
