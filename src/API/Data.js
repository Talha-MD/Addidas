import Logo from "../Assets/img11.svg";

import Pic1 from "../Assets/giphy.gif";
import Pic8 from "../Assets/img1.jpg";
import Pic9 from "../Assets/img103.jpeg";

import Sp1 from "../Assets/im1.jpg";
import Sp2 from "../Assets/im2.jpg";
import Sp3 from "../Assets/im3.jpg";
import Sp4 from "../Assets/im4.jpg";

import PP1 from "../Assets/img101.png";
import PP2 from "../Assets/img102.png";
import PP3 from "../Assets/img103.jpg";
import PP4 from "../Assets/img104.jpg";

import SlP1 from "../Assets/img105.jpg";
import SlP2 from "../Assets/boot1.jpg";
import SlP3 from "../Assets/img107.jpg";
import SlP4 from "../Assets/img105.jpg";
import SlP5 from "../Assets/img110.jpg";
import SlP6 from "../Assets/img109.jpg";
import SlP7 from "../Assets/img111.jpg";
import SlP8 from "../Assets/img112.jpg";
import SlP9 from "../Assets/img113.jpg";
import SlP10 from "../Assets/img114.jpg";
import SlP11 from "../Assets/img115.jpg";
import SlP12 from "../Assets/img116.jpg";

import IntSl1 from "../Assets/inter01.jpg";
import IntSl2 from "../Assets/inter02.jpg";
import IntSl3 from "../Assets/inter03.jpg";
import IntSl4 from "../Assets/inter04.jpg";
import IntSl5 from "../Assets/inter05.jpg";
import IntSl6 from "../Assets/inter06.jpg";
import IntSl7 from "../Assets/inter07.jpg";
import IntSl8 from "../Assets/inter08.jpg";
import IntSl9 from "../Assets/inter09.jpg";
import IntSl10 from "../Assets/inter10.jpg";
import IntSl11 from "../Assets/inter11.jpg";
import IntSl12 from "../Assets/inter12.jpg";

import GPic1 from "../Assets/img11.jpg.crdownload";
import GPic2 from "../Assets/200w.webp";
import GPic3 from "../Assets/img13.jpg";
import GPic4 from "../Assets/img12.jpg";

import Prmg1 from "../Assets/img14.jpg";
import Prmg2 from "../Assets/img15.jpg";
import Prmg3 from "../Assets/img16.jpg";
import Prmg4 from "../Assets/img17.jpg";
import Prmg5 from "../Assets/img18.jpg";
import Prmg6 from "../Assets/img19.jpg";

import Ic1 from "../Assets/icon1.png";
import Ic2 from "../Assets/icon2.png";
import Ic3 from "../Assets/icon3.png";
import Ic4 from "../Assets/icon4.png";
import Ic5 from "../Assets/icon5.png";
import Ic6 from "../Assets/icon6.png";

import {
  BsList,
  BsPerson,
  BsBag,
  BsSuitHeart,
  BsArrowRight,
} from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const Data = {
  CompNav: [
    {
      src: Logo,
      Ulies: ["MEN", "WOMEN", "KIDS", "BACK TO SCHOOL", "SALE", "3 STRIP LIFE"],
      icon: <BsList size={30} />,
      icon1: <AiOutlineClose size={30} />,
      search: <FaSearch size={20} />,
      icons: [<BsPerson />, <BsSuitHeart />, <BsBag />],
    },
  ],
  Hero: [
    {
      Images: [Pic1, Pic8, Pic9],
    },
  ],
  School: {
    heading: "SCHOOL IN STYLE",
    SPic: [
      {
        src: Sp1,
        Hg: "NEW SCHOOL KICKS",
        Para: "Get back in step for the school year ahead with all your favorite sneakers.",
        But: "SHOP NOW",
      },
      {
        src: Sp2,
        Hg: "HOODIES FOR THE WIN",
        Para: "A cozy hoodie is the perfect back to school staple.",
        But: "SHOP NOW",
      },
      {
        src: Sp3,
        Hg: "STYLED TO A TEE",
        Para: "Bold graphic tees are the perfect start to any outfit.",
        But: "SHOP NOW",
      },
      {
        src: Sp4,
        Hg: "NEW SCHOOL KICKS",
        Para: "Sturdy, school-ready backpacks with plenty of storage.",
        But: "A BRAND NEW BAG",
      },
    ],
  },

  Interested: {
    Hilight: "Most Interester?",
    IntSlider: [
      {
        src: IntSl1,
        Hrt: <BsSuitHeart size={20} />,
        Rs: "$160",
        Des: "NMD_V3Shoes",
        Ds1: "Men's Orignal",
        status: "new",
      },
      {
        src: IntSl2,
        Hrt: <BsSuitHeart size={20} />,
        Rs: "$160",
        Des: "NMD_V3Shoes",
        Ds1: "Men's Orignal",
        status: "new",
      },
      {
        src: IntSl3,
        Hrt: <BsSuitHeart size={20} />,
        Rs: "$60",
        Des: "COLIGATE SKIRT",
        Ds1: "Men's Orignal",
        status: "new",
      },
      {
        src: IntSl4,
        Hrt: <BsSuitHeart size={20} />,
        Rs: "$90",
        Des: "Men's Orignal",
        Ds1: "Orignal",
        status: "new",
      },
      {
        src: IntSl5,
        Hrt: <BsSuitHeart size={20} />,
        Rs: "$80",
        Des: "addidas Peloton Jacket",
        Ds1: "Men's Training",
        status: "new",
      },
      {
        src: IntSl6,
        Hrt: <BsSuitHeart size={20} />,
        Rs: "$75",
        Des: "Capabale  Jogar",
        Ds1: "Men's Training",
        status: "new",
      },
      {
        src: IntSl7,
        Hrt: <BsSuitHeart size={20} />,
        Rs: "$80",
        Des: "addidas Peloton Jacket",
        Ds1: "Men's Training",
        status: "new",
      },
      {
        src: IntSl8,
        Hrt: <BsSuitHeart size={20} />,
        Rs: "$75",
        Des: "Capabale Of Skreatness 7/8 Tights",
        Ds1: "Men's Training",
        status: "new",
      },
      {
        src: IntSl9,
        Hrt: <BsSuitHeart size={20} />,
        Rs: "$160",
        Des: "Dust Coat (Gender Neutral)",
        Ds1: "Sportswear",
        status: "new",
      },
      {
        src: IntSl10,
        Hrt: <BsSuitHeart size={20} />,
        Rs: "$45",
        Des: "Adilette Slides",
        Ds1: "Men's Orignal",
        status: "new",
      },
      {
        src: IntSl11,
        Hrt: <BsSuitHeart size={20} />,
        Rs: "$55",
        Des: "Active Ride 2.0 supports",
        Ds1: "Youth Sportswear",
        status: "Best seller",
      },
      {
        src: IntSl12,
        Hrt: <BsSuitHeart size={20} />,
        Rs: "$80",
        Des: "Ultra Boot 1.0 DNA Shoes",
        Ds1: "Sportswear",
        status: "Best seller",
      },
    ],
  },
  Popular: {
    heading: "POPULAR RIGHT NOW",
    title: ["ULTRABOOST", "NMD", "BACKPACK", "CLEATS", "STANSMITH"],
    PP: [
      {
        src: PP1,
        Butt: "MEN'S SHOES",
      },
      {
        src: PP2,
        Butt: "WOMEN'S SHOES",
      },
      {
        src: PP3,
        Butt: "MEN'S RUNNING SHOES",
      },
      {
        src: PP4,
        Butt: "WOMEN'S RUNNING SHOES",
      },
    ],
  },
  Headbar: {
    hilight: ["NEW ARRIVAL", "WHAT'S TRENDING", "MEMBER EXCLUSIVE"],
  },
  Slider2: [
    {
      src: SlP1,
      Hrt: <BsSuitHeart size={20} />,
      Rs: "$160",
      Des: "NMD_V3Shoes",
      Ds1: "Men's Orignal",
      status: "new",
    },
    {
      src: SlP2,
      Hrt: <BsSuitHeart size={20} />,
      Rs: "$160",
      Des: "NMD_V3Shoes",
      Ds1: "Men's Orignal",
      status: "new",
    },
    {
      src: SlP3,
      Hrt: <BsSuitHeart size={20} />,
      Rs: "$60",
      Des: "COLIGATE SKIRT",
      Ds1: "Men's Orignal",
      status: "new",
    },
    {
      src: SlP4,
      Hrt: <BsSuitHeart size={20} />,
      Rs: "$90",
      Des: "ANIVERSARY TRACKSUIT PANT",
      Ds1: "Orignal",
      status: "new",
    },
    {
      src: SlP5,
      Hrt: <BsSuitHeart size={20} />,
      Rs: "$80",
      Des: "addidas Peloton Jacket",
      Ds1: "Men's Training",
      status: "new",
    },
    {
      src: SlP6,
      Hrt: <BsSuitHeart size={20} />,
      Rs: "$75",
      Des: "Capabale Of Skreatness Jogar",
      Ds1: "Men's Training",
      status: "new",
    },
    {
      src: SlP7,
      Hrt: <BsSuitHeart size={20} />,
      Rs: "$80",
      Des: "addidas Peloton Jacket",
      Ds1: "Men's Training",
      status: "new",
    },
    {
      src: SlP8,
      Hrt: <BsSuitHeart size={20} />,
      Rs: "$75",
      Des: "Capabale Of Skreatness 7/8 Tights",
      Ds1: "Men's Training",
      status: "new",
    },
    {
      src: SlP9,
      Hrt: <BsSuitHeart size={20} />,
      Rs: "$160",
      Des: "Dust Coat (Gender Neutral)",
      Ds1: "Sportswear",
      status: "new",
    },
    {
      src: SlP10,
      Hrt: <BsSuitHeart size={20} />,
      Rs: "$45",
      Des: "Adilette Slides",
      Ds1: "Men's Orignal",
      status: "new",
    },
    {
      src: SlP11,
      Hrt: <BsSuitHeart size={20} />,
      Rs: "$55",
      Des: "Active Ride 2.0 supports",
      Ds1: "Youth Sportswear",
      status: "Best seller",
    },
    {
      src: SlP12,
      Hrt: <BsSuitHeart size={20} />,
      Rs: "$80",
      Des: "Ultra Boot 1.0 DNA Shoes",
      Ds1: "Sportswear",
      status: "Best seller",
    },
  ],
  Giphs: {
    SPic: [
      {
        src: GPic1,
        Hg: "NEW SCHOOL KICKS",
        Para: "Get back in step for the school year ahead with all your favorite sneakers.",
        But: "SHOP NOW",
      },
      {
        src: GPic2,
        Hg: "ENJOY YOUR COMPFORT ZONE",
        Para: "A cozy hoodie is the perfect back to school staple.",
        But: "SHOP NOW",
      },
      {
        src: GPic3,
        Hg: "The Art Of Style",
        Para: "Bold graphic tees are the perfect start to any outfit.",
        But: "SHOP NOW",
      },
      {
        src: GPic4,
        Hg: "addidas x Thebe Magugu",
        Para: "Sturdy, school-ready backpacks with plenty of storage.",
        But: "SHOP NOW",
      },
    ],
  },
  Pro: {
    PrSlider: [
      {
        src: Prmg1,
        Hrt: <BsSuitHeart size={20} />,
        Des: "ULTRABOOST SIZE GUIDE",
        Ds1: "Upgrade your runs with the adidas Ultraboost. Read our size guide to discover the differences between each Ultraboost version to find the perfect shoe for you.",
        But: "SHOP NOW",
      },
      {
        src: Prmg2,
        Hrt: <BsSuitHeart size={20} />,
        Des: "FORUM SIZE GUIDE",
        Ds1: "Upgrade your runs with the adidas Ultraboost. Read our size guide to discover the differences between each Ultraboost version to find the perfect shoe for you.",
        But: "SHOP NOW",
      },
      {
        src: Prmg3,
        Hrt: <BsSuitHeart size={20} />,
        Des: "BEST SHOES FOR NURSES",
        Ds1: "Upgrade your runs with the adidas Ultraboost. Read our size guide to discover the differences between each Ultraboost version to find the perfect shoe for you.",
        But: "SHOP NOW",
      },
      {
        src: Prmg4,
        Hrt: <BsSuitHeart size={20} />,
        Des: "BALANCE EXERCISES",
        Ds1: "Upgrade your runs with the adidas Ultraboost. Read our size guide to discover the differences between each Ultraboost version to find the perfect shoe for you.",
        But: "SHOP NOW",
      },
      {
        src: Prmg5,
        Hrt: <BsSuitHeart size={20} />,
        Des: "8 EXERCISES FOR STRONG KNEES",
        Ds1: "Upgrade your runs with the adidas Ultraboost. Read our size guide to discover the differences between each Ultraboost version to find the perfect shoe for you.",
        But: "SHOP NOW",
      },
      {
        src: GPic3,
        Hrt: <BsSuitHeart size={20} />,
        Des: "WARM UP BEFORE A WORKOUT",
        Ds1: "Upgrade your runs with the adidas Ultraboost. Read our size guide to discover the differences between each Ultraboost version to find the perfect shoe for you.",
        But: "SHOP NOW",
      },
      {
        src: Prmg6,
        Hrt: <BsSuitHeart size={20} />,
        Des: "HOW TO PREVENT CHAFING",
        Ds1: "Upgrade your runs with the adidas Ultraboost. Read our size guide to discover the differences between each Ultraboost version to find the perfect shoe for you.",
        But: "SHOP NOW",
      },
    ],
  },
  Work: {
    story: "Stories, style, and sporting goods at adidas, since 1949",
    story1: "Workout clothes, for any sport",
    workout:
      "adidas designs for athletes of all kinds. Creators who love to change the game. People who challenge conventions, break the rules, and define new ones. Then break them all over again. We design sports apparel that gets you moving, winning, and living life to the fullest. We create bras and tights for female athletes who play just as hard as the men. From low to high support. Maximum comfort. We design, innovate and iterate. We test new technologies in action. On the field, the track, the court, and in the pool. We’re inspired by retro workout clothes, creating new streetwear essentials. From NMD and Ozweego to our Firebird tracksuits. From Stan Smith to Superstar. Classic sports models are brought back to life on the streets and the stages around the world.",
    workout1:
      "Through our collections we blur the borders between high fashion and high performance. Like our adidas by Stella McCartney athletic clothing collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals lifestyle pieces, that can be worn as sports apparel too. Our lives are constantly changing. Becoming more and more versatile. And adidas designs with that in mind.",
    Sport:
      "Through sports, we have the power to change lives. Sports keep us fit. They keep us mindful. They bring us together. Athletes inspire us. They help us to get up and get moving. And sporting goods featuring the latest technologies help us beat our personal best. adidas is home to the runner, the basketball player, the soccer kid, the fitness enthusiast, the yogi. And even the weekend hiker looking to escape the city. The 3-Stripes are everywhere and anywhere. In sports. In music. On life’s stages. Before the whistle blows, during the race, and at the finish line. We’re here to support creators. To improve their game. To live their lives. And to change the world.",
    Sport1:
      "adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sporting goods, style and clothing that match the athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.",
  },
  Join: {
    Jon: "JOIN OUR ADICLUB & GET 15% OFF",
    Button: "SIGN UP FOR FREE",
    Arro: <BsArrowRight size={20} />,
  },
  Headliner: {
    Poducts: [
      "Shoes",
      "Clothing",
      "Accessories",
      "Gift Cards",
      "NEW Arrival",
      "Best Seller",
      "Release Dates",
      "Sale",
    ],
    Sports: [
      "Soccer",
      "Running",
      "Basketball",
      "Football",
      "Outdoor",
      "Golf",
      "Baseball",
      "Tennis",
      "Skateball",
      "Training",
    ],
    Collection: [
      "adicolor",
      "Ultraboost",
      "NMD",
      "Forum",
      "Superstar",
      "Running Shoes",
      "adilette",
      "Stan SMith",
      "adizero",
      "Tiro",
      "EQT",
    ],
    Support: [
      "Help",
      "Return & Exchange",
      "Shipping",
      "Order Tacker",
      "Store Locater",
      "Size Chart",
      "Gift Card Balance",
      "How to Clean",
      "Bra Fit Guid",
      "Breathing for Running",
      "Promotion",
    ],
    Company: [
      "About Us",
      "Student Discount",
      "Military & Healthcare",
      "addidas Stories",
      "Adidas App",
      "Sustainabilty",
      "adiClub",
      "Affiliates",
      "Press",
      "Careers",
      "Calafornia Transparency",
      "In Supply Chain Act",
      "Transparency in",
      "Coverage",
      "Location Selector",
    ],
    Follow: [Ic1, Ic2, Ic3, Ic4, Ic5, Ic6],
  },
  Footer: {
    foot: [
      "Data Setting",
      "Do not sell my personal information",
      "Privacy Policy",
      "Terms and Conditions",
    ],
    copy: "© 2022 adidas America, Inc.",
  },
};
export default Data;
