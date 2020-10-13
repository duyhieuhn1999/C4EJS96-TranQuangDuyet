const products =[
    {   
        id: '01',
        category : `apparel`,
                // + shoes 
                // + accessories
        name : `BADGE OF SPORT FRENCH TERRY PANTS`,
        brand : `adidas`,
        size : ['S','M','L','XL','XXL'],
        color : ['white','black','grey'],
        gender : ['male'],
                // female
        price : 50,
        productType : `pants`,
            // t-shirt, pants , suits ,trousers ,...
    },
    {   
        id: '02',
        category : `apparel`,
        name : `CONTINENT CAMO CITY LONG SHORTS`,
        brand : `adidas`,
        size : ['S','M','L','XL','XXL'],
        color : ['white','black','grey','gold'],
        gender : ['male'],
        price : 45,
        productType : `shorts`,
    },
    {   
        id: '03',
        category : `apparel`,
        name : `COLD.RDY DOWN JACKET`,
        brand : `adidas`,
        size : ['S','M','L','XL','XXL'],
        color : ['white','black','grey'],
        gender : ['male'],
        price : 400,
        productType : `jacket`,
    },
    {   
        id: '04',
        category : `shoes`,
        name : `ZX 2K BOOST SHOES`,
        brand : `adidas`,
        size : [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        color : ['black','pink','blue','white'],
        gender : ['male','female'],
        price : 150,
        productType : `originals`,
    },
    {   
        id: '05',
        category : `shoes`,
        name : `DONOVAN MITCHELL D.O.N. ISSUE #2 CRAYOLA SHOES`,
        brand : `adidas`,
        size : [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        color : ['cyan','yellow','black','white'],
        gender : ['male','female'],
        price : 700,
        productType : `originals`,
    },
    {   
        id: '06',
        category : `shoes`,
        name : `X9000L4 SHOES`,
        brand : `adidas`,
        size : [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        color : ['cyan','yellow','black','white'],
        gender : ['female'],
        price : 500,
        productType : `running`,
    },
    {   
        id: '07',
        category : `apparel`,
        name : `TREFOIL HOODIE`,
        brand : `adidas`,
        size : ['S','M','L','XL','XXL'],
        color : ['white','black'],
        gender : ['female'],
        price : 65,
        productType : `hoodie`,
    },
    {   
        id: '08',
        category : `apparel`,
        name : `ADIDAS X ZOE SALDANA COLLECTION WOMEN'S LONG SLEEVE SHIRT`,
        brand : `adidas`,
        size : ['S','M','L','XL','XXL'],
        color : ['white','black','blue'],
        gender : ['male'],
        price : 40,
        productType : `shirt`,
    },
    {   
        id: '09',
        category : `apparel`,
        name : `ADIDAS X ZOE SALDANA COLLECTION WOMEN'S TIGHT`,
        brand : `adidas`,
        size : ['S','M','L','XL','XXL'],
        color : ['white','black','grey'],
        gender : ['female'],
        price : 55,
        productType : `tight`,
    },
    {   
        id: '10',
        category : `apparel`,
        name : `COLD.RDY DOWN JACKET`,
        brand : `adidas`,
        size : ['S','M','L','XL','XXL'],
        color : ['white','black','grey'],
        gender : ['female'],
        price : 400,
        productType : `jacket`,
    }, 
    // vietkhuat data
    {   
        id: '11',
        category : `accessories`,
        name : `GOTHIC EMBROIDERED HAT`,
        brand : `VETEMENTS`,
        size : [`no size`],
        color : ['black'],
        gender : ['male','female'],
        price : 350,
        productType : `hats`,
            // t-shirt, pants , suits ,trousers ,...
    },
    {   
        id: '12',
        category : `accessories`,
        name : `LOGO MERINO-WOOL SCARF`,
        brand : `VETEMENTS`,
        size : [`no size`],
        color : ['white','black'],
        gender : ['female'],
        price : 750,
        productType : `scarves`,
    },
    {   
        id: '13',
        category : `apparel`,
        name : `LOGO PRINT RAINCOAT`,
        brand : `VETEMENTS`,
        size : ['S','M','L','XL','XXL'],
        color : ['black'],
        gender : ['male'],
        price : 1350,
        productType : `coast`,
    },
    {   
        id: '14',
        category : `shoes,`,
        name : `SPIKE RUNNER 2 SNEAKERS`,
        brand : `VETEMENTS`,
        size : [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        color : ['orange','red','blue'],
        gender : ['male','female'],
        price : 590,
        productType : [`shoes`, `sneakers`],
    },
    {   
        id: '15',
        category : `shoes`,
        name : `BOOMERANG PATENT LEATHER ANKLE BOOTS`,
        brand : `VETEMENTS`,
        size : [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        color : ['black',],
        gender : ['female'],
        price : 1390,
        productType : [`shoes`,`boots`],
    },
    {   
        id: '16',
        category : `apparel`,
        name : `REVERSIBLE WHITE & BLACK BOMBER JACKET`,
        brand : `VETEMENTS`,
        size : ['S','M','L','XL','XXL'],
        color : ['black','white'],
        gender : ['women'],
        price : 1590,
        productType : `jackets`,
    },
    {   
        id: '17',
        category : `apparel`,
        name : `CRYSTAL-EMBELLISHED HOODED SWEATSHIRT IN BLACK`,
        brand : `VETEMENTS`,
        size : ['S','M','L','XL','XXL'],
        color : ['black'],
        gender : ['women'],
        price : 770,
        productType : `hoodie`,
    },
    {   
        id: '18',
        category : `accessories`,
        name : `BLACK LOGO BACKPACK`,
        brand : `VETEMENTS`,
        size : [],
        color : ['black',],
        gender : ['unisex'],
        price : 850,
        productType : `bags`,
    },
    {   
        id: '19',
        category : `apparel`,
        name : `IT COSTS COTTON T-SHIRT`,
        brand : `VETEMENTS`,
        size : ['S','M','L','XL','XXL'],
        color : ['black'],
        gender : ['unisex'],
        price : 190,
        productType : `t-shirts`,
    },
    {   
        id: '20',
        category : `accessories`,
        name : `LOGO-ENGRAVED SIGNET RING`,
        brand : `VETEMENTS`,
        size : ['12','13','14','15'],
        color : ['silver'],
        gender : ['unisex'],
        material : ['brass'],
        price : 300,
        productType : `ring`,
    }, 
    //ng bao long data
    {
        id: '21',
        category : `apparel`,
                // + shoes 
                // + accessories
        name : `WE ARE PINK MEDIUM FIT HOODIE`,
        brand : `balenciaga`,
        size : ['S','M','L','XL','XXL'],
        color : ['black','while'],
        gender : ['male'],
                // female
        price : 950,
        productType : `hoodie`,
    },
    {
        id: '22',
        category : `apparel`,
                // + shoes 
                // + accessories
        name : `WE ARE PINK LARGE FIT T-SHIRT`,
        brand : `balenciaga`,
        size : ['S','M','L','XL','XXL'],
        color : ['black','while'],
        gender : ['male'],
                // female
        price : 510,
        productType : `t-shirt`,
    },
    {
        id: '23',
        category : `accessories`,
                // + shoes 
                // + apparel
        name : `NEO CLASSIC LARGE TOP HANDLE BAG`,
        brand : `balenciaga`,
        size : [`no size`],
        color : ['black','while'],
        gender : ['female'],
                
        price : 2650,
        productType : `bag`,
    },
    {
        id: '24',
        category : `accessories`,
                // + shoes 
                // + apparel
        name : `NEO CLASSIC SMALL TOP HANDLE BAG`,
        brand : `balenciaga`,
        size : [`no size`],
        color : ['black','grey'],
        gender : ['female'],
                
        price : 2250,
        productType : `bag`,
    },
    {
        id: '25',
        category : `accessories`,
                // + shoes 
                // + apparel
        name : `NEO CLASSIC MINI TOP HANDLE BAG`,
        brand : `balenciaga`,
        size : [`no size`],
        color : ['black','blue','red'],
        gender : ['female'],
                
        price : 1980,
        productType : `bag`,
    },
    {
        id: '26',
        category : `shoes`,
                // + accessories 
                // + apparel
        name : `TRACK SLIDE SANDAL`,
        brand : `balenciaga`,
        size : [4,4.5,5,5.5,6,6.5,7,7.5,8],
        color : ['black','while'],
        gender : ['female'],
                //male
        price : 630,
        productType : `track`,
    },
    {
        id: '27',
        category : `shoes`,
                // + accessories 
                // + apparel
        name : `TRACK SNEAKER`,
        brand : `balenciaga`,
        size : [4 , 4.5 , 5 , 5.5 , 6 , 6.5 , 7 , 7.5 , 8 , 8.5 , 9],
        color : ['black','while','blue',],
        gender : ['female'],
                //male
        price : 1005,
        productType : `track`,
    },
    {
        id: '28',
        category : `shoes`,
                // + accessories 
                // + apparel
        name : `TRIPLE S SNEAKER`,
        brand : `balenciaga`,
        size : [4 , 4.5 , 5 , 5.5 , 6 , 6.5 , 7 , 7.5 , 8],
        color : ['black','while','red','blue','grey'],
        gender : ['female'],
                //male
        price : 1110,
        productType : `triple s`,
    },
    {
        id: '29',
        category : `shoes`,
                // + accessories 
                // + apparel
        name : `SPEED SNEAKER`,
        brand : `balenciaga`,
        size : [4 , 4.5 , 5 , 5.5 , 6 , 6.5 , 7 , 7.5 , 8],
        color : ['black','while','muticolor'],
        gender : ['female'],
                //male
        price : 840,
        productType : `speed`,
    },
    {
        id: '30',
        category : `shoes`,
                // + accessories 
                // + apparel
        name : `SPEED 2.0 SNEAKER`,
        brand : `balenciaga`,
        size : [4 , 4.5 , 5 , 5.5 , 6 , 6.5 , 7 , 7.5 , 8],
        color : ['black','while','red','blue','grey','muticolor'],
        gender : ['female'],
                //male
        price : 950,
        productType : `speed 2.0`,
    },
    // do duy hieu data
    {   id: '31',
        category : `apparel`,
        name : `Nike Sportwear`,
        brand : `Nike`,
        size : ['S','M','L','XL','XXL'],
        color : ['white','black','grey'],
        gender : ['male','female'],
                 
        price : 48,
        productType : `T- Shirt`,
           
    },
    {   id: '32',
        category : `apparel`,
        name : `Nike Dri-FIT Player`,
        brand : `Nike`,
        size : ['S','M','L','XL','XXL'],
        color : ['white','black','grey',],
        gender : ['male'],
        price : 150,
        productType : `Polo`,
    },
    {   
        id: '33',
        category : `apparel`,
        name : `Short-Sleeve Running Top`,
        brand : `Nike`,
        size : ['S','M','L','XL'],
        color : ['white','black','grey'],
        gender : ['famale'],
        price : 220,
        productType : `T-shirt`,
    },
    {   
        id: '34',
        category : `shoes`,
        name : `Nike Air Force 1 Crater`,
        brand : `Nike`,
        size : [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        color : ['black','pink','blue','white'],
        gender : ['male','female'],
        price : 1050,
        productType : `originals`,
    },
    {   
        id: '35',
        category : `shoes`,
        name : `Nike Air Force 1 React LV8`,
        brand : `Nike`,
        size : [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        color : ['cyan','yellow','black','white'],
        gender : ['male','female'],
        price : 900,
        productType : `originals`,
    },
    {
        id: '36',
        category : `shoes`,
        name : `Nike Tạnun`,
        brand : `Nike`,
        size : [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12],
        color : ['cyan','yellow','black','white'],
        gender : ['male'],
        price : 1500,
        productType : `running`,
    },
    {   
        id: '37',
        category : `apparel`,
        name : `Nike BETRUE`,
        brand : `Nike`,
        size : ['S','M','L','XL','XXL'],
        color : ['white','black'],
        gender : ['male'],
        price : 780,
        productType : `hoodie`,
    },
    {   
        id: '38',
        category : `apparel`,
        name : `Nike Sport Tech Pack`,
        brand : `Nike`,
        size : ['S','M','L','XL','XXL'],
        color : ['white','black','blue'],
        gender : ['male','female'],
        price : 468,
        productType : `Jacket`,
    },
    {   
        id: '39',
        category : `apparel`,
        name : `Nike SportSwear`,
        brand : `Nike`,
        size : ['S','M','L','XL'],
        color : ['Track Rede'],
        gender : ['female'],
        price : 860,
        productType : `Dress`,
    },
    {   
        id: '40',
        category : `apparel`,
        name : `Nike Essential`,
        brand : `Nike`,
        size : ['S','M','L','XL','XXL'],
        color : ['white','black','grey'],
        gender : ['male'],
        price : 400,
        productType : `pants `,
    }, 
],
// tk user + admin
const user =[
    {
        email : 'admin123@gmail.com',
        userName : 'admin dep trai',
        password : 'Anh213210',
        role: 'admin'
    },
    {
        userName : 'duyet tran',
        name : 'Trần Quang Duyệt',
        age : 20,
        address : '20 Đồng Me , Mễ Trì , Nam Từ Liêm , Hà Nội',
        phoneNumber : `0969907663`,
        email : 'hieuminhtran050300@gmail.com',
        password : '123456789',
        role : 'client',
    },
    {   
        userName : 'hieuthuba',
        name : 'Đỗ Duy Hiếu',
        age : 21,
        address : '1207C kdt Linh Đàm , Hà Nội',
        phoneNumber : `0123456789`,
        email : 'duyhieu99@gmail.com',
        password : '123456789',
        role : 'client',
    },
    {
        userName : 'long bot',
        name : 'Nguyễn bảo Long',
        age : 20,
        address : '14 ngõ 32/47 Đỗ Đức Dục , Mễ Trì , Nam Từ Liêm , Hà Nội',
        phoneNumber : `0969567890`,
        email : 'longbot00@gmail.com',
        password : '123456789',
        role : 'client',
    },
    {
        userName : 'vietbatkhuat',
        name : 'Khuất Quang Việt',
        age : 20,
        address : '79 Lê Trọng Tấn, Hà Đông , Hà Nội',
        phoneNumber : `0382512348`,
        email : 'vietkhuat00@gmail.com',
        password : '123456789',
        role : 'client',
    },
]