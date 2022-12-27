import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from '../../component/Image.component';

const tempSlider = [
  {
    imgUrl:
      'https://file.hstatic.net/1000075078/file/familyday_desktop_4ea268afdf3d45648fc6fef381357122.jpg'
  },
  {
    imgUrl:
      'https://file.hstatic.net/1000075078/file/bennhau_web_64f71ffdb3354e8ebcb434a8eaf9f65a.jpg'
  },
  {
    imgUrl:
      'https://file.hstatic.net/1000075078/file/ansang9k_desktop_86bea6043e9246a382c464501bb88447.jpg'
  }
];

const Slider = () => {
  const tempSliderImg = tempSlider;
  return (
    <Carousel autoPlay infiniteLoop showStatus={false}>
      {tempSliderImg.map((item: any, index: number) => {
        return (
          <div key={index}>
            <Image src={item.imgUrl} height={'100%'} width={'100%'} className="rounded-lg" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
