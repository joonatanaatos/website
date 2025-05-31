import Image from 'next/image';
import classes from './index.module.css';

function MainImage() {
  return (
    <div className={classes.container}>
      <Image
        src="/images/joonatan.png"
        alt="joonatan"
        width="0"
        height="0"
        sizes="100%"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default MainImage;
