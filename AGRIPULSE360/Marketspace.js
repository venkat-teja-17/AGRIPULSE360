
    // Sample data for fruits and vegetables
    const marketItems = [{
        name: 'Tomato',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-6QVkNbO5SKS1InuN3riDYtExHP5G1y2qw&s',
        currentPrice: '20',
        previousPrice: '18',
        surroundingPrice: '22',
        availability: 'Lucknow, Kanpur, Varanasi'
      },
      {
        name: 'Cauliflower',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXo1pTXhMFZ52F1Ydkf5Qd7yrdSOrGfYMIQA&s',
        currentPrice: '20',
        previousPrice: '18',
        surroundingPrice: '22',
        availability: 'Lucknow, Kanpur, Varanasi'
      },
      {
        name: 'Mango',
        image: 'https://media.istockphoto.com/id/529964085/photo/mango.jpg?s=612x612&w=0&k=20&c=rmcMZlLOZFdn4NhUcjnaJ3EBHKYZQ4xH4xzpzFU4JgY=',
        currentPrice: '50',
        previousPrice: '45',
        surroundingPrice: '55',
        availability: 'Agra, Allahabad, Varanasi'
      },
      {
        name: 'Potato',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzwEkOXQTxOSef5zel8-cY4a4Y2TShrSBcA&s',
        currentPrice: '15',
        previousPrice: '12',
        surroundingPrice: '17',
        availability: 'Bareilly, Gorakhpur, Kanpur'
      },
      {
        name: 'Onion',
        image: 'https://www.jiomart.com/images/product/original/590001744/onion-5-kg-pack-product-images-o590001744-p590001744-1-202410141659.jpg?im=Resize=(420,420)',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Rice',
        image:'https://www.nextechagrisolutions.com/blog/wp-content/uploads/2014/11/Rice-Parts.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Mazie',
        image: 'https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Bajra',
        image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/z/g/u/1-bajra-seeds-1-kg-seeds-stokiya-original-imagn6d5ugnmmt63.jpeg?q=90&crop=false',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Jowar',
        image: 'https://vibrantliving.in/cdn/shop/files/JowarMillet.png?v=1731059461&width=2048',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Groundnut',
        image: 'https://storage.googleapis.com/cgiarorg/2019/07/groundnut-representation.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Sugarcane',
        image: 'https://www.saveur.com/uploads/2022/03/05/sugarcane-linda-xiao.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Finger Millet',
        image: 'https://twobrothersindiashop.com/cdn/shop/articles/Finger_Millet_1000x.png?v=1688645482',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Sawan',
        image: 'https://admin.chhayakart.com/storage/products/1723208908_38457.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Kodo',
        image: 'https://i0.wp.com/www.smartfood.org/wp-content/uploads/2020/10/kodo-husk-on-1.png?resize=946%2C1024&ssl=1',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Tur',
        image: 'https://i0.wp.com/livelifewell.in/wp-content/uploads/2021/03/toordal-wellnest-livelifewell.jpg?fit=1000%2C1000&ssl=1',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'urd',
        image:'https://www.en.krishakjagat.org/wp-content/uploads/2023/10/Undertitled-1.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Moong',
        image: 'https://www.rajbhog.com/wp-content/uploads/2020/12/Moong-Dal-870x635.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Soyben',
        image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/d/g/o/500-organic-yellow-soya-bean-whole-500gm-0-5-kg-rudra-original-imagpfp7begfhv6r.jpeg?q=20&crop=false',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Wheat',
        image: 'https://5.imimg.com/data5/ST/QW/MY-38700875/fresh-wheat-crop-500x500.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Barley',
        image: 'https://www.naatigrains.com/image/cache/catalog/naatigrains-products/NG277/instant-pot-barley-pearl-dehusked-eatable-form-order-online-chennai-bangalore-naati-grains-1000x1000.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Gram',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qGyZAu1aWu0hACoPYWOVknv42s1rBjo7kA&s',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Sesame',
        image: 'https://static.toiimg.com/thumb/msid-115597939,width-1280,height-720,imgsize-141062,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Linseed',
        image: 'https://img.feedstrategy.com/files/base/wattglobalmedia/all/image/2019/10/fs.linseed-in-animal-feed.png?auto=format%2Ccompress&fit=max&q=70&w=1200',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Castor Seed',
        image: 'https://thewholesaler.in/cdn/shop/files/thewholesaler_arandi-seeds_24fb49a6-a288-4f0e-a351-4c690a7230a0_460x@2x.jpg?v=1730876468',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Sunflower',
        image: 'https://amijivdaya.com/wp-content/uploads/2023/01/DSC_0192-scaled.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Cotton',
        image: 'https://agribegri.com/productimage/9db6f41a2f7e9d86500f8667e6307a14-07-07-19-21-13-05.webp',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Jute',
        image: 'https://5.imimg.com/data5/ANDROID/Default/2023/1/AI/BS/UW/24751178/product-jpeg.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Mint',
        image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/275/275944/mint-on-a-wooden-table.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Tobacco',
        image: 'https://etimg.etb2bimg.com/photo/68196562.cms',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Poplar',
        image: 'https://cdn.britannica.com/77/118077-050-D68D8C4F/European-aspen.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Eucalyptus',
        image: 'https://nurserylive.com/cdn/shop/products/nurserylive-eucalyptus-tree-nilgiri-tree-plant_512x512.jpg?v=1634219075',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Indigo',
        image: 'https://nurserylive.com/cdn/shop/products/nurserylive-eucalyptus-tree-nilgiri-tree-plant_512x512.jpg?v=1634219075',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Guava',
        image: 'https://cdn.britannica.com/59/139059-050-30794D53/Guava-fruit.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Banana',
        image: 'https://www.happysprout.com/wp-content/uploads/sites/4/2021/02/banana-tree-with-ripe-fruit.jpg?fit=1200%2C800&p=1',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Little Millet',
        image: 'https://m.media-amazon.com/images/I/51OxKnY9LsL._AC_UF1000,1000_QL80_.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Masoor',
        image: 'https://5.imimg.com/data5/VR/BN/MY-8008107/whole-masoor-dal-500x500.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Rajma',
        image: 'https://gonefarmers.com/cdn/shop/products/image_a17ffd00-73ea-495a-bd90-f3b09829eabc_1024x1024@2x.jpg?v=1619775482',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Beans',
        image: 'https://organicmandya.com/cdn/shop/files/Beans_Hurulikayi.jpg?v=1721370274&width=1000',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Carrot',
        image: 'https://www.hhs1.com/hubfs/carrots%20on%20wood-1.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Fennel',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/fro/fro02619/y/7.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Litchi',
        image: 'https://m.media-amazon.com/images/I/71Z9-lwXGIL._AC_UF1000,1000_QL80_.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Watermelon',
        image: 'https://cdn.shopaccino.com/rootz/products/watermelon-3kg-866084_m.jpg?v=496',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Papaya',
        image: 'https://www.megawecare.com/_next/image?url=https%3A%2F%2Fcdn.megawecare.com%2FFeatured-Images%2FG4vDIrwfeCNSMGQC6XUG26dRbmIirn5dvZuoELpz.webp&w=1920&q=75',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Ber',
        image: 'https://veliyathgarden.com/cdn/shop/products/273211920_924651208254886_5644546060535225924_n_1445x.jpg?v=1653725995',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Jackfruit',
        image: 'https://www.huahintoday.com/wp-content/uploads/2019/03/jackfruit.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Aonla',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/LB/OG/PM/122603703/aonla-fruits.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Peas',
        image: 'https://m.media-amazon.com/images/I/612O377T9FL.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Bottle Gourd',
        image: 'https://budsnblush.com/cdn/shop/files/F1HybridBottleGourdBudsnblush.png?v=1709075516',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Tumeric',
        image: 'https://static-01.daraz.lk/p/9942b5e3b9c6efc13ccaccbd3e1710b0.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Green Chili',
        image: 'https://www.veggovilla.com/img/productimg/green_chilli_hot_0_1-296.webp',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Red Chili',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/331243951/PT/AH/NF/32159971/fresh-red-peppers.webp',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Ginger',
        image: 'https://fruitboxco.com/cdn/shop/products/Ginger_800x.jpg?v=1588920651',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Garlic',
        image: 'https://olamagroexportscompany.com/wp-content/uploads/2021/10/Garlic.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Okra',
        image: 'https://fruitique.in/cdn/shop/products/okra_1500_x_1500_750x810.jpg?v=1632308849',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Coriander',
        image: 'https://m.media-amazon.com/images/I/41oCRXEnZQL._AC_UF1000,1000_QL80_.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Fenugreek',
        image: 'https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/organic-methi-dana-fenugreek-seeds-200-gm-coorg-spices.20220909011538.webp',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Cumin',
        image: 'https://thenaturespalm.in/cdn/shop/files/611FEMWLEeL._AC_UF1000_1000_QL80.jpg?v=1716811922',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Tea',
        image: 'https://ceylonorganicstore.com/cdn/shop/files/tea-leaves-new-3.jpg?v=1693314598&width=720',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      
      {
        name: 'Timber',
        image: 'https://m.media-amazon.com/images/I/61h2ZxirCHL._AC_UF894,1000_QL80_.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Bamboo',
        image: 'https://d12oja0ew7x0i8.cloudfront.net/images/news/ImageForNews_59774_16606539847736385.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Chena',
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/JJ/KJ/HY/25900400/download.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Rapeseed',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Rapeseed%2C_roasted.jpg/220px-Rapeseed%2C_roasted.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      


      {
        name: 'Bittergourd',
        image: 'https://urjaseeds.com/cdn/shop/products/Picture1_3780d7fd-d5d2-4f51-ab7b-5cac71ee0594_1024x.png?v=1594029496',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      {
        name: 'Dragon Fruit',
        image: 'https://peppyflora.com/wp-content/uploads/2020/12/Pink-Dragon-Fruit-Plant-Pitaya-3x4-Product-Peppyflora-01-a-a-Moz.jpg',
        currentPrice: '30',
        previousPrice: '28',
        surroundingPrice: '32',
        availability: 'Lucknow, Agra, Kanpur'
      },
      // Add more items as needed
    ];
    // Function to display all items in the market container
    function displayItems(items) {
      const container = document.getElementById('marketItemsContainer');
      container.innerHTML = ''; // Clear previous content
      items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        itemCard.onclick = function() {
          showDetails(item);
        };
        itemCard.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
        `;
        container.appendChild(itemCard);
      });
    }
    // Function to show item details in the modal
    function showDetails(item) {
      document.getElementById('item-name').innerText = item.name;
      document.getElementById('item-image').src = item.image;
      document.getElementById('current-price').innerText = item.currentPrice;
      document.getElementById('previous-price').innerText = item.previousPrice;
      document.getElementById('surrounding-price').innerText = item.surroundingPrice;
      document.getElementById('availability').innerText = item.availability;
      document.getElementById('detailsModal').style.display = 'flex';
    }
    // Function to close the modal
    function closeModal() {
      document.getElementById('detailsModal').style.display = 'none';
    }
    // Function to filter items based on search query
    function searchItems() {
      const query = document.getElementById('searchInput').value.toLowerCase();
      const filteredItems = marketItems.filter(item => item.name.toLowerCase().includes(query));
      displayItems(filteredItems);
    }
    // Initial display of all items
    displayItems(marketItems);
