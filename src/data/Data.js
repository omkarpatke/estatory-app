import { v4 as uuid } from 'uuid';

const properties = [
    {
        _id: uuid(),
        name: '4 BHK House',
        address: 'Iswarnagar, Thane',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGkpt7ZI2_xXCWFPOxBTb-nttpZ3Zm0wKug&usqp=CAU',
        area: '2100',
        bedrooms:'4',
        popular:true,
        bathrooms:'3',
        rent: '35000'
    },
    {
        _id: uuid(),
        name: '1 BHK House',
        address: 'wakadewadi, pune',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouhZYdi4INM3L8yK00WlQ0Or2Yw1lCY3Rwg&usqp=CAU',
        area: '600',
        bedrooms:'1',
        popular:false,
        bathrooms:'1',
        rent: '8000'
    },
    {
        _id: uuid(),
        name: '2 BHK House',
        address: 'Kondhawa pune',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dO-B0PKIwTCrsRCKROAHjBD56SnWM6rxxA&usqp=CAU',
        area: '1290',
        bedrooms:'2',
        popular:true,
        bathrooms:'2',
        rent: '16000'
    },
    {
        _id: uuid(),
        name: '2 BHK Apartment',
        address: 'Melbourni Apartment, Lokhandwala',
        img: 'https://is1-2.housingcdn.com/01c16c28/2a8b85453f0b475e68ff8bf93297e96e/v0/medium/2_bhk_apartment-for-rent-andheri_west-Mumbai-hall.jpg.webp',
        area: '750',
        bedrooms:'2',
        popular:true,
        bathrooms:'2',
        rent: '14000'
    },
    {
        _id: uuid(),
        name: '1 BHK Independent House',
        address: 'Gokuldham Complex, Goregoan East',
        img: 'https://is1-3.housingcdn.com/01c16c28/02dcef8bab77b7c214fef430e8ea8345/v0/medium/1_bhk_independent_house-for-rent-goregaon_east-Mumbai-hall.jpg.webp',
        area: '460',
        bedrooms:'1',
        popular:false,
        bathrooms:'1',
        rent: '7500'
    },
    {
        _id: uuid(),
        name: '1 BHK House',
        address: 'Shivaji Raje Complex, Kandivali West',
        img: 'https://is1-3.housingcdn.com/01c16c28/6707a3e02961e862344cee0263b03605/v0/medium/1_bhk_apartment-for-rent-kandivali_west-Mumbai-hall.jpg.webp',
        area: '500',
        bedrooms:'1',
        popular:true,
        bathrooms:'1',
        rent: '8000'
    },
    {
        _id: uuid(),
        name: '1 RK House',
        address: 'Versowa Andheri West',
        img: 'https://is1-2.housingcdn.com/01c16c28/e6ee9cd47eece923b193bba6dfebdb41/v0/medium/1_rk_apartment-for-rent-andheri_west-Mumbai-hall.jpg.webp',
        area: '320',
        bedrooms:'0',
        popular:false,
        bathrooms:'1',
        rent: '4000'
    },
    {
        _id: uuid(),
        name: '1 RK Apartment',
        address: 'Virar East, Mumbai',
        img: 'https://is1-3.housingcdn.com/01c16c28/39c7505361f15dc0ae74f3319699e837/v0/large/1_rk_apartment-for-rent-virar_east-Mumbai-living_room.jpg.webp',
        area: '350',
        bedrooms:'0',
        popular:false,
        bathrooms:'1',
        rent: '5000'
    },
    {
        _id: uuid(),
        name: '2 BHK House',
        address: 'Anandnagar Kalwa, Thane',
        img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2022/Jul/31/Photo_h180_w240/24722191_1_IMG_20210505_112332_180_240.jpg',
        area: '980',
        bedrooms:'2',
        popular:true,
        bathrooms:'2',
        rent: '20000'
    },
    {
        _id: uuid(),
        name: '2 BHK Apartment',
        address: 'Iswarnagar, Thane',
        img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2022/Jul/30/Photo_h180_w240/62369591_3_HOTO-2022-07-24-18-41-44(6)_180_240.jpg',
        area: '800',
        bedrooms:'2',
        popular:true,
        bathrooms:'2',
        rent: '17000'
    },
    {
        _id: uuid(),
        name: '3 BHK House',
        address: 'kasaba peth , pune',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KCVTEu7UDDSgPrTfSec_CmtzSaUOU4qniQ&usqp=CAU',
        area: '1200',
        bedrooms:'3',
        popular:true,
        bathrooms:'4',
        rent: '25000'
    }
];

export { properties };