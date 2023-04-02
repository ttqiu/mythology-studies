'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('creatures', [
      {
        name: 'Feng Huang',
        image:
          'https://static.wixstatic.com/media/b97502_8c2d259f76004e239f15b508374d907e~mv2.jpg/v1/fill/w_560,h_542,al_c,q_90,enc_auto/WechatIMG1823.jpg',
        description:
          'Fenghuang, also known as the Chinese Phoenix, is a mythical bird in Chinese mythology. It is often depicted as a majestic and noble creature with the head of a golden pheasant, the body of a mandarin duck, the tail of a peacock, and the legs of a crane. In ancient times, the fenghuang was depicted as a pair of birds, namely the male "feng" and the female "huang." Over time, the two beings merged into a single creature known as the "fenghuang." Unlike the phoenix, the fenghuang is believed to be immortal and lives forever. Fenghuang is often depicted in Chinese art and literature as a symbol of peace and prosperity, and is often used to represent the emperor or empress. In some legends, the bird is said to appear during times of peace and prosperity, while in other tales it is believed to bring good luck and ward off evil spirits.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Long',
        image:
          'https://studycli.org/wp-content/uploads/2021/06/chinese-dragon-colorful.jpeg',
        description:
          'The Chinese dragon is a legendary creature that plays an important role in Chinese mythology, folklore, and culture. Its unique features include the horns of a deer, head of a camel, eyes of a demon or devil, neck and body of a snake, abdomen of a cockle, scales of a carp, claws of an eagle, paws of a tiger, and ears of an ox. In Chinese tradition, dragons symbolize powerful and auspicious forces, especially control over water, rainfall, typhoons, and floods. The dragon is also associated with strength, power, and good luck, and is considered a symbol of prestige for individuals who are deserving of it in East Asian culture. Historically, during the era of Imperial China, the Emperor used the dragon as a symbol of his imperial strength and authority.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mermaid',
        image:
          'https://coolvibe.com/wp-content/uploads/2014/05/Fantasy-Art-Francis-Tneh-Mermaid.jpg',
        description:
          'Mermaids are mythical beings possessing a human upper body and a fish or aquatic creature lower body. They are frequently depicted with beautiful, long hair and an alluring appearance. The male equivalent of a mermaid is a merman, also a familiar figure in folklore and heraldry. Though mermen sightings and traditions are less common than those of mermaids, they are assumed to coexist with their female counterparts. Collectively, both genders are sometimes referred to as merfolk or merpeople. Mermaids are often associated with the sea and in some cultures, they are regarded as protectors of sailors and ocean creatures. Their enchanting voices have been known to lure sailors to their deaths with their songs. Mermaids are believed to possess magical powers and capable of granting wishes in some legends. Throughout history, they have been a popular subject in literature, art, and folklore, and they continue to inspire people worldwide. In many tales, mermaids are portrayed as using their beauty and songs to lure sailors to their doom.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pegasus',
        image:
          'https://www.ancient-origins.net/sites/default/files/field/image/Pegasus-Greek-mythology.jpg',
        description:
          'Pegasus is a mythical creature from Greek mythology. It is depicted as a winged horse with a white coat and the ability to fly. According to legend, Pegasus was born from the blood of the Gorgon Medusa when the hero Perseus beheaded her. Pegasus was then tamed and ridden by the hero Bellerophon, who used him to slay the monstrous Chimera. In some versions of the myth, Pegasus is said to have created the fountain of Hippocrene with a strike of his hoof. Pegasus has become a popular subject in art and literature, and is often portrayed as a symbol of poetic inspiration and artistic creativity.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Airavata',
        image: 'https://arungovil.in/wp-content/uploads/2020/11/airavat.jpg',
        description:
          "It is depicted as a white elephant with multiple tusks and a pair of wings. Airavata is believed to be the mount of the god Indra, king of the gods and ruler of heaven in Hinduism. According to legend, Airavata was born during the churning of the ocean of milk, a mythological event in which the gods and demons churned the ocean to extract the nectar of immortality. Airavata emerged from the ocean along with other divine objects and creatures. It is said that Airavata's ability to fly helped Indra defeat his enemies and maintain his position as the king of the gods. Airavata has since become an important symbol in Hindu culture, often associated with royalty and power. It is also a popular subject in art and literature, and is sometimes depicted with multiple heads or eyes to represent its divine nature.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sphinx',
        image:
          'https://www.fineartstorehouse.com/p/629/egyptian-sphinx-handcoloured-copper-engraving-19075653.jpg.webp',
        description:
          'The Sphinx is a mythical creature that appears in both Greek and Egyptian mythology, but the two versions of the creature have some differences. In Greek mythology, the Sphinx is typically depicted as having the head of a woman, the body of a lion, and the wings of a bird. The Sphinx is known for posing a riddle to travelers, asking them to solve it or be killed. In Egyptian mythology, the Sphinx is depicted as having the head of a human and the body of a lion, and is often shown wearing a headdress or crown. The Sphinx was typically seen as a guardian, and was believed to protect tombs and temples. It was also associated with the sun god, Ra, who was believed to pass by the Sphinx during his journey across the sky each day. Despite these differences, both the Greek and Egyptian versions of the Sphinx have become iconic symbols of their respective cultures, and their likeness has been depicted in countless works of art and literature throughout history.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ugallu',
        image:
          'https://scontent-lga3-2.xx.fbcdn.net/v/t31.18172-8/18815138_1538805636152498_6638377713697663784_o.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=I3hgDJzQFrwAX-fLUA8&_nc_ht=scontent-lga3-2.xx&oh=00_AfCpqCnEIyHwlKryN4hPxlDi5s_hh4CatsgNgWt8mVcldw&oe=64518545',
        description:
          'Ugallu is a creature from ancient Mesopotamian mythology, specifically from Babylonian and Sumerian mythology. It is often depicted as a demonic figure, with the body of a lion and the arms and head of a human. Its name translates to "great lion" or "big weather-beast". In some myths, Ugallu is believed to be one of the guardians of the gates of the underworld, along with two other demonic creatures known as the Pazuzu and the Hanbi. Ugallu is also sometimes associated with the god Ninurta, who was believed to have defeated it in a great battle. The Ugallu has been depicted in Mesopotamian art as a symbol of chaos and destruction, and it was believed to have the power to cause disease and other forms of harm to humans. Its image was often used in amulets and other protective talismans as a means of warding off evil spirits and demons.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leprechaun',
        image:
          'https://www.irelandbeforeyoudie.com/wp-content/uploads/2018/12/leprechaun-Coll-and-his-encounter-with-%C3%81ine.jpg',
        description:
          "The Leprechaun is a mythical creature from Irish folklore. It is usually depicted as a small, mischievous, and solitary fairy-like being, often dressed in green and wearing a hat. Leprechauns are known for their cunning, trickery, and the ability to grant wishes to humans who catch them. According to legend, Leprechauns are cobblers by trade and they spend much of their time making and repairing shoes. They are also believed to be keepers of a pot of gold at the end of a rainbow. The Leprechaun's gold is said to be magical and to bring good fortune to those who possess it. In Irish folklore, it is believed that if you catch a Leprechaun, it will grant you three wishes in exchange for its freedom. However, Leprechauns are known for their trickery, and catching one is not an easy task.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ljósálfar',
        image:
          'https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/18057822_1001741576592868_4532632789882045655_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9267fe&_nc_ohc=1A6R9KgatrsAX_pmKDl&_nc_ht=scontent-lga3-2.xx&oh=00_AfAfqF7qLnjiZdImY2MDWpNBbT_kWAP7buZNoeV_TyNjKQ&oe=645175DB',
        description:
          'Ljósálfar, also known as Light Elves, are supernatural beings from Norse mythology. They are often depicted as beautiful and radiant creatures, with a glowing appearance that shines like the sun. According to Norse mythology, they are one of the two types of elves, the other being the dark elves, or Dökkálfar. The Ljósálfar are believed to reside in Álfheimr, which is one of the Nine Worlds in Norse mythology. They are associated with fertility, light, and beauty, and are said to be responsible for bringing light into the world. It is believed that they are able to control the weather and the seasons, and that they have healing powers. In Norse mythology, the Ljósálfar are also known for their musical abilities, and are said to be able to play enchanting music that can bring joy and happiness to those who hear it. They are also associated with love and romance, and are believed to be guardians of the sacred bonds between lovers.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('creatures', null, {})
  }
}
