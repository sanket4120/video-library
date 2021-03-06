import { v4 as uuid } from 'uuid';
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    title: 'ASUS ZenBook 14 OLED (2022): A Solid Thin & Light Windows Laptop?',
    description:
      'ASUS has launched the new ZenBook 14 OLED in India and this seems like a good thin & light Windows laptop. So, is this the work laptop you should be buying? We find out. The ZenBook 14 OLED with the 12th Gen Core i7 processor, LPDDR5 RAM, PCIe Gen 4 SSD, 90Hz 2.8K OLED and more, has launched at ₹1,04,990.',
    creator: 'Beebom',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLTQGRWqwoJ5mY6aSUe5PPE3QaYB8A_cwi-uY7-pzw=s68-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/PumNp_O_Euo/hq720.jpg',
    views: '110k',
    createdAt: '12 May 2022',
    src: 'https://www.youtube.com/embed/PumNp_O_Euo',
    category: 'laptop',
    duration: '6:58',
  },
  {
    _id: uuid(),
    title: 'Bose 700 Headphones - Are They The Best?',
    description: `The Bose Noise Cancelling 700 headphones are the latest flagship wireless headphones from Bose. Bose was aiming to create the best wireless headphones of 2019... Did they succeed?`,
    creator: 'Unbox Therapy',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLQf2e6s9_FvCfjFM14z_q7LUwlu5J7sUaBak7VtPw=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/7DMDA5pde-0/hq720.jpg',
    views: '3,522,595',
    createdAt: '13 Aug 2019',
    src: 'https://www.youtube.com/embed/7DMDA5pde-0',
    category: 'headphone',
    duration: '10:18',
  },
  {
    _id: uuid(),
    title: 'iPhone 13 Review: Lowkey Great!',
    description:
      'iPhone 13 improves the 3 most important parts of a smartphone.',
    creator: 'Marques Brownlee',
    logo: 'https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/g5ymJNLURRI/hq720.jpg',
    views: '6,406,861',
    createdAt: '28 Sept 2021',
    src: 'https://www.youtube.com/embed/g5ymJNLURRI',
    category: 'mobile',
    duration: '18:03',
  },
  {
    _id: uuid(),
    title: 'XPS 13 Plus - Cleaner And Faster Than A MacBook!',
    description: `My review of the XPS 13 Plus 9320 (2022). Running the new i7-1280P chip from Intel. This is the most powerful 13 laptop they've ever made. TWICE as capable as their 2021 XPS 13.`,
    creator: 'Dave2D',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLQjae6b5utMZa4thBe_Lj3b80UwxpctudgPiiVCGQ=s48-c-k-c0x00ffffff-no-rj',
    thumbnail:
      'https://i.ytimg.com/vi/6fPj6mj-M_k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDspmOmZmrm_TWoM8Mr8kHPjZp4NA',
    views: '1,638,276',
    createdAt: '30 Apr 2022',
    src: 'https://www.youtube.com/embed/6fPj6mj-M_k',
    category: 'laptop',
    duration: '9:39',
  },
  //mobile
  {
    _id: uuid(),
    title: 'Galaxy S22 Review: The iPhone of Android!',
    description:
      'The Samsung Galaxy S22 has cemented itself as the Android default even more than the Pixel 👀',
    creator: 'Marques Brownlee',
    logo: 'https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/qWIkBMNKj1s/hq720.jpg',
    views: '5,204,038',
    createdAt: '19 Feb 2022',
    src: 'https://www.youtube.com/embed/qWIkBMNKj1s',
    category: 'mobile',
    duration: '13:34',
  },
  {
    _id: uuid(),
    title: 'The New OnePlus is Here, FINALLY!',
    description: `OnePlus isn't the same but there has been a new OnePlus in the making and now, it is FINALLY here. In fact, the new OnePlus' ambitions are to be much more than OnePlus. `,
    creator: 'Beebom',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLTQGRWqwoJ5mY6aSUe5PPE3QaYB8A_cwi-uY7-pzw=s68-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/1Lh3UZPHyZk/hq720.jpg',
    views: '373,966',
    createdAt: '15 Jun 2022',
    src: 'https://www.youtube.com/embed/1Lh3UZPHyZk',
    category: 'mobile',
    duration: '6:04',
  },
  {
    _id: uuid(),
    title: `Surface Laptop Studio Impressions: Windows 11 With a Twist!`,
    description: `Microsofts Surface Laptop Studio continues to evolve the laptop form factor, taking on board the lessons of the long-running Surface Book range by adding its own unique twist to the screen. Thanks to Microsoft UK, I've spent some time with the Surface Laptop Studio to get a better idea of what it is capable of and who it is for.`,
    creator: 'Marques Brownlee',
    logo: 'https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/vBnpGIZK9R0/hq720.jpg',
    views: '3,062,254',
    createdAt: '6 Oct 2021',
    src: 'https://www.youtube.com/embed/vBnpGIZK9R0',
    category: 'laptop',
    duration: '11:27',
  },
  {
    _id: uuid(),
    title: 'The Latest Flagship Smartphone MONSTER',
    description: `The new vivo X80 Pro has a monster camera setup and a focus on cinematography. Other specifications include SnapDragon 8 Gen 1, 80 Watt Charging and 120Hz Display. Sponsored by vivo. `,
    creator: 'Unbox Therapy',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLQf2e6s9_FvCfjFM14z_q7LUwlu5J7sUaBak7VtPw=s48-c-k-c0x00ffffff-no-rj',
    thumbnail:
      'https://i.ytimg.com/vi/fwOsOJE-NS8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbfCuTqLK6vnR-nSfDnZJvM_rudw',
    views: '1,188,770',
    createdAt: '29 May 2022',
    src: 'https://www.youtube.com/embed/fwOsOJE-NS8',
    category: 'mobile',
    duration: '18:09',
  },
  //wearable reviews
  {
    _id: uuid(),
    title: `NOTHING ear(1) - Let's Talk`,
    description: `Thoughts on the NOTHING ear(1). The $99 wireless earphones from Carl Pei's new venture.`,
    creator: 'Dave2D',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLQjae6b5utMZa4thBe_Lj3b80UwxpctudgPiiVCGQ=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/-zTNuxUl5lM/hq720.jpg',
    views: '767,700',
    createdAt: '29 Jul 2021',
    src: 'https://www.youtube.com/embed/-zTNuxUl5lM',
    category: 'wearable',
    duration: '7:33',
  },
  {
    _id: uuid(),
    title: 'OnePlus Watch Review: They Settled!',
    description: 'OnePlus Watch vs the smartwatch formula',
    creator: 'Marques Brownlee',
    logo: 'https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/07mIwEa3xbQ/hq720.jpg',
    views: '3,037,641',
    createdAt: '27 Apr 2021',
    src: 'https://www.youtube.com/embed/07mIwEa3xbQ',
    category: 'wearable',
    duration: '11:05',
  },
  {
    _id: uuid(),
    title: 'This New Tech is Instant Cool...',
    description: `Coolify is a small wearable air conditioner that fits around your neck.`,
    creator: 'Unbox Therapy',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLQf2e6s9_FvCfjFM14z_q7LUwlu5J7sUaBak7VtPw=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/UheNgtAQSC4/hq720.jpg',
    views: '1,375,131',
    createdAt: '27 May 2021',
    src: 'https://www.youtube.com/embed/UheNgtAQSC4',
    category: 'wearable',
    duration: '12:22',
  },
  {
    _id: uuid(),
    title: 'OnePlus Band: Mixed Feelings!',
    description: `OnePlus has just unveiled its first wearable, the OnePlus Band. In this video, we take a look at the what's new in the O̶P̶P̶O̶ OnePlus Band and why we have mixed feelings about it. We also compare the OnePlus Band vs Mi Band 5.`,
    creator: 'Beebom',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLTQGRWqwoJ5mY6aSUe5PPE3QaYB8A_cwi-uY7-pzw=s68-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/coIuHjpJK6Q/hq720.jpg',
    views: '474,069',
    createdAt: '11 Jan 2021',
    src: 'https://www.youtube.com/embed/coIuHjpJK6Q',
    category: 'wearable',
    duration: '8:20',
  },
  //headphone
  {
    _id: uuid(),
    title: 'Sony WH-1000XM4 Review: The Final Form!',
    description: 'Even better headphones. Still a terrible name.',
    creator: 'Marques Brownlee',
    logo: 'https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/bInJjmH31Hk/hq720.jpg',
    views: '5,006,427',
    createdAt: '13 Aug 2020',
    src: 'https://www.youtube.com/embed/bInJjmH31Hk',
    category: 'headphone',
    duration: '7:38',
  },
  {
    _id: uuid(),
    title: 'OPPO Enco X: The Ultimate ANC Experience!',
    description: `Along with the new OPPO Reno5 Pro 5G, the company also launched the OPPO Enco X truly wireless earphones with noise cancellation. In this video, we talk about the OPPO Enco X's sound quality, the noise cancellation experience, features and more. `,
    creator: 'Beebom',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLTQGRWqwoJ5mY6aSUe5PPE3QaYB8A_cwi-uY7-pzw=s68-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/7-Et2Wzcbjc/hq720.jpg',
    views: '85,606',
    createdAt: '19 Jan 2021',
    src: 'https://www.youtube.com/embed/7-Et2Wzcbjc',
    category: 'headphone',
    duration: '7:11',
  },
  {
    _id: uuid(),
    title: 'MSI Stealth GS77 Review',
    description:
      'My review of the MSI Stealth GS77 and MSI Creator Z16P. New Laptops for 2022 with WAY better performance.',
    creator: 'Dave2D',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLQjae6b5utMZa4thBe_Lj3b80UwxpctudgPiiVCGQ=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/NSVUw3KF5PE/hq720.jpg',
    views: '431,016',
    createdAt: '7 Apr 2022',
    src: 'https://www.youtube.com/embed/NSVUw3KF5PE',
    category: 'laptop',
    duration: '9:33',
  },
  {
    _id: uuid(),
    title: 'Surface Headphones 2: Matte Black Everything!',
    description:
      'Microsoft. Do you think you can get me to like your headphones just for a new color?',
    creator: 'Marques Brownlee',
    logo: 'https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s48-c-k-c0x00ffffff-no-rj',
    thumbnail: 'https://i.ytimg.com/vi/ByayqNQU2fA/hq720.jpg',
    views: '2,004,377',
    createdAt: '20 May 2020',
    src: 'https://www.youtube.com/embed/ByayqNQU2fA',
    category: 'headphone',
    duration: '9:02',
  },
];
