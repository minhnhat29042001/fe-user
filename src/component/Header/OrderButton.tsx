import { Images } from '../../assets/image';
import Button from '../Button.component';
import Image from '../Image.component';

const styles = {
  container: 'bg-clrLightOrange flex my-auto p-3 ml-12 rounded-full items-center',
  paragraph: 'text-clrBrown font-bold text-sm',
  imgContainer: 'ml-2'
};
const OrderButton = () => {
  return (
    <Button className="flex">
      <div className={styles.container}>
        <p className={styles.paragraph}>Giao liền tay, giải cơn khát !</p>
        <Image
          src={Images.imgDelivery}
          width={40}
          height={40}
          containerTwClass={styles.imgContainer}
        />
      </div>
    </Button>
  );
};
export default OrderButton;
