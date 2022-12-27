/* eslint-disable no-unused-vars */
export const tempSlider = [
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

import hcm1 from '../assets/images/hcm1.jpeg';
import hcm11 from '../assets/images/hcm11.jpeg';
import hcm111 from '../assets/images/hcm111.jpeg';

import hcm2 from '../assets/images/hcm2.jpeg';

export const city = [
  {
    id: 'city1',
    name: 'Tp Hồ Chí Minh',
    count: 72,
    provinces: [
      {
        id: 'city1_p1',
        name: 'Quận 1',
        address: [
          {
            name: '145 Nguyen Thai Hoc, Quan 1',
            map: 'Link google map',
            images: {
              src: hcm1
            }
          },
          {
            name: '145 Nguyen Thai Hoc, Quan 1',
            map: 'Link google map',
            images: {
              src: hcm1
            }
          },
          {
            name: '145 Nguyen Thai Hoc, Quan 1',
            map: 'Link google map',
            images: {
              src: hcm11
            }
          }
        ]
      },
      {
        id: 'city1_p2',
        name: 'Quận 2',
        address: [
          {
            name: '145 Nguyen Thai Hoc, Quan 2',
            map: 'Link google map',
            images: {
              src: hcm111
            }
          },
          {
            name: '145 Nguyen Thai Hoc, Quan 2',
            map: 'Link google map',
            images: {
              src: hcm1
            }
          },
          {
            name: '145 Nguyen Thai Hoc, Quan 2',
            map: 'Link google map',
            images: {
              src: hcm2
            }
          }
        ]
      },
      {
        id: 'city1_p3',
        name: 'Quận 3',
        address: [
          {
            name: '145 Nguyen Thai Hoc, Quan 3',
            map: 'Link google map',
            images: {
              src: hcm1
            }
          },
          {
            name: '145 Nguyen Thai Hoc, Quan 3',
            map: 'Link google map',
            images: {
              src: hcm11
            }
          },
          {
            name: '145 Nguyen Thai Hoc, Quan 3',
            map: 'Link google map',
            images: {
              src: hcm1
            }
          }
        ]
      }
    ]
  },
  {
    id: 'city2',
    name: 'Hà Nội',
    count: 41,
    provinces: [
      {
        id: 'city2_p1',
        name: 'Quận 1',
        address: [
          {
            name: '145 Nguyen Thai Hoc, Quan 1, HN',
            map: 'Link google map',
            images: {
              src: hcm2
            }
          },
          {
            name: '145 Nguyen Thai Hoc, Quan 1, HN',
            map: 'Link google map',
            images: {
              src: hcm111
            }
          },
          {
            name: '145 Nguyen Thai Hoc, Quan 1, HN',
            map: 'Link google map',
            images: {
              src: hcm111
            }
          }
        ]
      },
      {
        id: 'city2_p2',
        name: 'Quận 2',
        address: [
          {
            name: '145 Nguyen Thai Hoc, Quan 2, HN',
            map: 'Link google map',
            images: {
              src: hcm111
            }
          },
          {
            name: '145 Nguyen Thai Hoc, Quan 2, HN',
            map: 'Link google map',
            images: {
              src: hcm111
            }
          },
          {
            name: '145 Nguyen Thai Hoc, Quan 2, HN',
            map: 'Link google map',
            images: {
              src: hcm111
            }
          }
        ]
      }
    ]
  }
];

export const loadProvinces = async () => {
  const url = `https://provinces.open-api.vn/api/p`;
  try {
    const res = await fetch(url, {
      method: 'GET'
    });
    if (res.status === 200) {
      const json = await res.json();
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};
