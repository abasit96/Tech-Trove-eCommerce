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
      image: 'mobileMon.jpg',
      category: categories[0]._id,
      price: .99,
      quantity: 100
    },
    {
      name: 'ASUS - ZenScreen 15.6” IPS LED FHD USB Type-C Portable Monitor with Foldable Smart Case - Dark Gray',
      description:
        'Great Monitor for the price...Clear picture, great second monitor to extend your laptop desktop. The price is better than most for what you get....This is the portable monitor you want!...Excellent monitor for the price! East to set up and fits in laptop bag with no problem!',
      image: 'asus.jpg',
      category: categories[0]._id,
      price: 209.99,
      quantity: 150
    },
    {
      name: 'Steelcase - Gesture Shell Back Office Chair - Night Owl',
      category: categories[1]._id,
      description:
        'Perfect for the endurance sitter and technology power user, Gesture adapts to your every move, and every device you use, to provide ultimate, long-lasting comfort and support for your body. With the most inclusive fit of any chair in our portfolio, everyone feels comfortable sitting in Gesture. Our proprietary seat cushion design leverages built in air pockets that conform to your body and reduce pressure that comes from long term sitting.',
      image: 'Steelcase-Seat.jpg',
      price: 1329.99,
      quantity: 70
    },
    {
      name: 'Insignia™ - Essential PC Gaming Chair - Black',
      category: categories[1]._id,
      description:
        'Whether you enjoy gaming for the competition or just to relax, you deserve to be comfortable while doing it. With the Insignia NS-PCGV30 PC Gaming Chair, feel free to sit back and game the day away. With an adjustable seat height and a swivel and tilt mechanism, adjust the chair to your liking for optimum comfort and support.',
      image: 'Insignia-Chair.jpg',
      price: 179.99,
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
      name: 'SteelSeries - Apex 3 Full Size Wired Membrane Whisper Quiet Switch Gaming Keyboard with 10 zone RGB Backlighting - Black',
      category: categories[2]._id,
      description:
        'The Apex 3 gaming keyboard was built for the needs of gamers, with IP32 water resistance for protection against spills and accidents, as well as premium features like low friction whisper quiet gaming switches, 10-zone RGB customization, a premium magnetic wrist rest, multimedia controls, and anti-ghosting. Compatible with Windows, Mac OS X, Xbox Series S, Xbox Series X, PS4, PS5.',
      image: 'SteelSeries-Keyboard.jpg',
      price: 49.99,
      quantity: 30
    },
    {
      name: 'Logitech - MX Keys Advanced Full-size Wireless Scissor Keyboard for PC and Mac with Backlit keys - Black',
      category: categories[2]._id,
      description:
        'Introducing MX Keys, an advanced wireless illuminated keyboard crafted for efficiency, stability, and precision. Perfect Stroke keys are shaped for your fingertips and increased key stability reduces noise while optimizing responsiveness. Tactile reference for hand positioning makes it easy to stay oriented and in your flow. The backlit keys light up the moment your hands approach, and automatically adjust to suit changing lighting conditions. With MX Keys you can truly master what you make.',
      image: 'Logitech-keyboard.jpg',
      price: 119.99,
      quantity: 25
    },
    {
      name: 'Razer - Basilisk Ultimate Wireless Optical with HyperSpeed Technology and Charging Dock Gaming Mouse - Black',
      category: categories[3]._id,
      description:
        'Improve your aim with this Razer Basilisk wireless gaming mouse. HyperSpeed wireless technology minimizes latency, and the Focus+ optical sensor lets you aim precisely with a sensitivity of up to 20,000 dpi. This Razer Basilisk wireless gaming mouse lets you customize your control scheme by mapping macros and frequently used functions to the 11 programmable buttons.',
      image: 'RZ01-mouse.jpg',
      price: 74.99,
      quantity: 70
    },
    {
      name: 'Logitech - MX Master 3S Wireless Laser Mouse with Ultrafast Scrolling - Black',
      category: categories[3]._id,
      description:
        'Introducing Logitech MX Master 3S – an iconic mouse remastered. Designed for designers and engineered for coders, now with Quiet Clicks and 8K DPI any-surface tracking for more feel and performance than ever before. It’s ergonomic silhouette is crafted to support your palm and fingers and allows you to work comfortably for hours across multiple computers and operating systems in one fluid workflow. With MX Master 3S, you can truly master what you make.',
      image: 'Logitech-mouse.jpg',
      price: 99.99,
      quantity: 59
    },
    {
      name: 'Logitech - G733 LIGHTSPEED Wireless DTS Headphone:X v2.0 Over-the-Ear Gaming Headset for PC and PlayStation - Black',
      category: categories[4]._id,
      description: 'Meet G733, a gaming headset designed to suit your style. Embrace total wireless with 2.4 GHZ LIGHTSPEED wireless, featuring up to 33 ft of range and up to 29 hours of battery life. Customize how you look and sound in G HUB with dual-zone, front-facing LIGHTSYNC RGB and Blue VO!CE real-time voice filters. G733 features advanced audio technologies, including 40 mm PRO-G audio drivers, internal acoustic chambers, and DTS Headphone:X 2.0. Play your way with four colorways to choose from and play with comfort with a comfortable, reversible headband, dual-layer memory foam earcups, and a lightweight headset that weighs just 9.8 oz.',
      image: 'Logitech-Headset.jpg',
      price: 137.99,
      quantity: 110
    },
    {
      name: 'SteelSeries - Arctis Nova Pro Wireless Multi Gaming Headset - Active Noise Cancellation, Premium Hi-Fi, Stealth Mic – PC,PS5/4,Switch - Black',
      category: categories[4]._id,
      description:
        'The Arctis Nova Pro Wirelessgaming headphones raises the bar with the Nova Pro Acoustic System, immersive 360° Spatial Audio, Sonar Software, Active Noise Cancellation, and a dual-battery system. Compatible with PC, PlayStation 5, PlayStation 4, Switch',
      image: 'SteelSeries-Headset.jpg',
      price: 349.99,
      quantity: 25
    },
    {
      name: 'Razer - Nari Ultimate Wireless THX Spatial Audio Gaming Headset for PC, PS5, and PS4 - Gunmetal',
      category: categories[4]._id,
      description:
        'Move closer to the action with this Razer Nari Ultimate wireless gaming headset. Featuring intelligent haptic technology developed by Lofelt that converts sound signals into dynamic touch-sensory feedback in real time. Haptics in gamepads today provide simple feedback and rumbling during key in-game events. With Razer HyperSense, the Razer Nari Ultimate picks up the shape and frequencies of game audio and transforms them into rich, lifelike haptic effects. Vibrations flow accurately from left to right, and with different intensities, depending on where the audio cues are coming from in the game. Gamers will now have heightened awareness of their in-game surroundings.',
      image: 'Razer-Headset.jpg',
      price: 119.99,
      quantity: 100
    },
    {
      name: 'HyperX - Cloud Stinger 2 Wired DTS Headphone:X Gaming Headset for PC - Black',
      category: categories[4]._id,
      description:
        'With a new design, the Cloud Stinger 2’s a refined version of the Cloud Stinger. Still weighing in at under 300g, the Cloud Stinger 2 is lightweight, but delivers a hefty audio punch. Get a wide frequency response so you will not miss important audio cues that give your opponents away. It also does not skimp on comfort, with soft memory foam and premium leatherette designed for all-day gaming. Gamers will appreciate HyperX’s passion for its craft, which shows up in quality-of-life features like 90° rotating earcups that make it easy to take a break, or the swivel-to-mute microphone that makes muting your mic simple and obvious. Its swivel-to-mute mic and volume controls are located on the headset, grouping all your most important audio functions right on your head for easy access. The passively noise-cancelling microphone is flexible, so you can precisely position it to give you clear communication with your team.',
      image: 'HyperX-Headset.jpg',
      price: 40.99,
      quantity: 60
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
