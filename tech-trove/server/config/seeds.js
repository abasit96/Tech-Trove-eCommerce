const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Monitors' },
    { name: 'Chairs' },
    { name: 'Keyboards' },
    { name: 'Mice' },
    { name: 'Headsets' },
    { name: 'Miscellaneous' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: ' Lenovo - ThinkVision M15 15.6" LED Mobile Monitor (USB 3.1 Type-C) - Black ',
      description:
        'The power pass through to the laptop works well, letting me have a monitor and laptop on the same USB-C charger even though the laptop only has the one USB-C port! ...There is no lag time from moving from laptop screen to the monitor and back, and I’m whipping through edits in a fast paced event. ...Great monitor!',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 200.99,
      quantity: 100
    },
    {
      name: 'ASUS - ZenScreen 15.6” IPS LED FHD USB Type-C Portable Monitor with Foldable Smart Case - Dark Gray',
      description:
        'Great Monitor for the price...Clear picture, great second monitor to extend your laptop desktop. The price is better than most for what you get....This is the portable monitor you want!...Excellent monitor for the price! East to set up and fits in laptop bag with no problem!',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 209.99,
      quantity: 150
    },
    {
      name: 'Steelcase - Gesture Shell Back Office Chair - Night Owl',
      category: categories[1]._id,
      description:
        'Perfect for the endurance sitter and technology power user, Gesture adapts to your every move, and every device you use, to provide ultimate, long-lasting comfort and support for your body. With the most inclusive fit of any chair in our portfolio, everyone feels comfortable sitting in Gesture. Our proprietary seat cushion design leverages built in air pockets that conform to your body and reduce pressure that comes from long term sitting.',
      image: 'toilet-paper.jpg',
      price: 1329.99,
      quantity: 70
    },
    {
      name: 'Insignia™ - Essential PC Gaming Chair - Black',
      category: categories[1]._id,
      description:
        'Whether you enjoy gaming for the competition or just to relax, you deserve to be comfortable while doing it. With the Insignia NS-PCGV30 PC Gaming Chair, feel free to sit back and game the day away. With an adjustable seat height and a swivel and tilt mechanism, adjust the chair to your liking for optimum comfort and support.',
      image: 'chair.jpg',
      price: 119.99,
      quantity: 50
    },
    {
      name: 'Insignia™ - Ergonomic Mesh Office Chair with Adjustable Arms - Black',
      category: categories[1]._id,
      description:
        'Your office chair should be nothing but comfortable. With the Insignia NS-FPAMC23 Ergonomic Mesh Office Chair with Adjustable Arms, feel free to sit back and work away. With an adjustable seat, arm rest and a swivel and tilt mechanism, adjust the chair to your liking for optimum comfort and support. This chair also has reinforced lumbar support, alleviating unnecessary strain on your lower back.',
      image: 'chair.jpg',
      price: 169.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
