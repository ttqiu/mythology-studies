'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('zodiacs', [
      {
        zodiac: 'Rat',
        description:
          'The Rat is the first of the repeating 12-year cycle of animals which appear in the Chinese zodiac, constituting part of the Chinese calendar system . The rat is associated with the first branch of the Earthly Branch symbol 子 (zǐ), which starts a repeating cycle of twelve years. ',
        personality:
          'People born in the Year of the Rat are typically quick-witted, resourceful, and versatile individuals who can adapt to different situations easily. Rats are known to be charming and sociable, making them great at networking and making new friends. At the same time, they can be quite cunning and opportunistic, which can sometimes come across as manipulative to others. They are also known for their intelligence and creativity, often excelling in fields that require strategic thinking and problem-solving abilities. Rats are ambitious and hardworking individuals, constantly striving to achieve their goals. However, they can also be impulsive and prone to taking risks, which can sometimes lead to unexpected consequences. Overall, those born in the Year of the Rat are believed to be clever, adaptable, and ambitious individuals.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zodiac: 'Ox',
        description:
          'The Ox is the second of the repeating 12-year cycle of animals which appear in the Chinese zodiac. The Year of the Ox is also denoted by the Earthly Branch symbol chǒu.',
        personality:
          'People born in the Year of the Ox are typically hardworking, dependable, and honest individuals who take great pride in their work. Oxen are known for their perseverance and resilience, often able to overcome obstacles and challenges with ease. At the same time, they can be quite stubborn and set in their ways, which can make it difficult for them to adapt to change. They are also known for their practicality and common sense, often preferring to stick to traditional methods and ideas. Oxen are patient and methodical, taking their time to think things through before making decisions. They are also known for their loyalty and sense of responsibility, often taking on leadership roles in their personal and professional lives. Overall, those born in the Year of the Ox are believed to be hardworking, dependable, and practical individuals who value tradition and stability.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zodiac: 'Tiger',
        description:
          'The Tiger is the third of the repeating 12-year cycle of animals which appear in the Chinese zodiac. The Year of the Tiger is also denoted by the Earthly Branch symbol yín.',
        personality:
          'People born in the Year of the Tiger are typically confident, passionate, and courageous individuals who are not afraid to take risks. Tigers are known for their energy and enthusiasm, often approaching life with a sense of adventure and excitement. At the same time, they can be quite impulsive and quick-tempered, which can sometimes lead to conflicts with others. They are also known for their independent nature, often preferring to work alone and follow their own path. Tigers are charismatic and magnetic, often attracting others to them with their charm and personality. They are also known for their strong sense of justice and fairness, often standing up for what they believe is right. Overall, those born in the Year of the Tiger are believed to be confident, passionate, and independent individuals who are not afraid to take risks and follow their own path.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zodiac: 'Rabbit',
        description:
          'The Rabbit is the fourth of the repeating 12-year cycle of animals which appear in the Chinese zodiac. The Year of the Rabbit is also denoted by the Earthly Branch symbol chén.',
        personality:
          'People born in the Year of the Rabbit are typically gentle, kind-hearted, and compassionate individuals who value harmony and peace in their relationships with others. Rabbits are known for their soft-spoken nature and their ability to listen to others with empathy and understanding. At the same time, they can be quite sensitive and easily hurt by criticism or conflict. They are also known for their refined taste and appreciation for the finer things in life, often enjoying art, music, and other cultural pursuits. Rabbits are intuitive and perceptive, often able to read the emotions and needs of others with ease. They are also known for their diplomacy and tact, often able to resolve conflicts and bring people together. Overall, those born in the Year of the Rabbit are believed to be gentle, compassionate, and perceptive individuals who value harmony and peace in their relationships with others.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zodiac: 'Dragon',
        description:
          'The Dragon is the fifth of the repeating 12-year cycle of animals which appear in the Chinese zodiac. The Year of the Dragon is also denoted by the Earthly Branch symbol mǎo.',
        personality:
          'People born in the Year of the Dragon are typically confident, ambitious, and charismatic individuals who are natural leaders. Dragons are known for their energy and enthusiasm, often approaching life with a sense of excitement and adventure. At the same time, they can be quite stubborn and set in their ways, which can sometimes make it difficult for them to accept criticism or advice. They are also known for their independent nature, often preferring to work alone and follow their own path. Dragons are creative and imaginative, often able to think outside the box and come up with innovative solutions to problems. They are also known for their strong sense of justice and fairness, often standing up for what they believe is right. Overall, those born in the Year of the Dragon are believed to be confident, ambitious, and creative individuals who are natural leaders and often able to inspire others with their energy and charisma.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zodiac: 'Snake',
        description:
          'The Snake is the sixth of the repeating 12-year cycle of animals which appear in the Chinese zodiac. The Year of the Snake is also denoted by the Earthly Branch symbol sì.',
        personality:
          "People born in the Year of the Snake are typically introspective, intuitive, and refined individuals who value their privacy and independence. Snakes are known for their grace and elegance, often moving through life with a sense of poise and purpose. At the same time, they can be quite mysterious and secretive, often keeping their thoughts and feelings to themselves. They are also known for their wisdom and insight, often able to see beyond the surface and understand the deeper truths of a situation. Snakes are strategic and analytical, often able to solve complex problems with ease. They are also known for their strong will and determination, often pursuing their goals with single-minded focus. Overall, those born in the Year of the Snake are believed to be introspective, intuitive, and determined individuals who value their privacy and independence. They often have a keen sense of insight and understanding, and are able to navigate life's challenges with grace and purpose.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zodiac: 'Horse',
        description:
          'The Horse is the seventh of the repeating 12-year cycle of animals which appear in the Chinese zodiac. The Year of the Horse is also denoted by the Earthly Branch symbol wǔ.',
        personality:
          'People born in the Year of the Horse are typically energetic, independent, and adventurous individuals who value their freedom and love to explore the world around them. Horses are known for their high spirits and their love of excitement and new experiences. At the same time, they can be quite impulsive and restless, sometimes lacking the patience and focus needed to see things through to the end. They are also known for their strong sense of loyalty and their deep emotional connections with others. Horses are charismatic and outgoing, often able to make friends easily and inspire others with their enthusiasm and charm. They are also known for their intelligence and their ability to learn quickly. Overall, those born in the Year of the Horse are believed to be energetic, adventurous, and loyal individuals who love to explore the world around them. They have a natural charisma and a deep emotional connection with others, and are often able to inspire and lead those around them.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zodiac: 'Ram',
        description:
          'The Ram is the eighth of the repeating 12-year cycle of animals which appear in the Chinese zodiac. The Year of the Ram is also denoted by the Earthly Branch symbol wèi.',
        personality:
          'People born in the Year of the Ram are typically gentle, kind-hearted, and artistic individuals who value their relationships with others. Rams are known for their sensitive nature and their ability to empathize with others on a deep level. At the same time, they can be quite indecisive and timid, sometimes lacking the confidence needed to pursue their goals. They are also known for their refined taste and their appreciation for the arts and culture. Rams are creative and imaginative, often able to express themselves through various forms of art and self-expression. They are also known for their intuition and their ability to sense the emotions and needs of those around them. Overall, those born in the Year of the Ram are believed to be gentle, artistic, and empathetic individuals who value their relationships with others. They have a refined taste and a deep appreciation for the arts and culture, and are often able to express themselves in creative and meaningful ways.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zodiac: 'Monkey',
        description:
          'The Monkey is the ninth of the repeating 12-year cycle of animals which appear in the Chinese zodiac. The Year of the Monkey is also denoted by the Earthly Branch symbol shēn.',
        personality:
          'People born in the Year of the Monkey are typically clever, playful, and sociable individuals who love to have fun and enjoy life to the fullest. Monkeys are known for their energy and their ability to adapt to new situations with ease. At the same time, they can be quite mischievous and unpredictable, sometimes getting themselves into trouble with their playful antics. They are also known for their intelligence and their ability to learn quickly. Monkeys are charismatic and outgoing, often able to make friends easily and captivate those around them with their wit and charm. They are also known for their creativity and their ability to think outside the box. Overall, those born in the Year of the Monkey are believed to be clever, playful, and sociable individuals who love to have fun and enjoy life to the fullest. They have a natural charisma and a knack for entertaining others, and are often able to adapt to new situations with ease.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zodiac: 'Rooster',
        description:
          'The Rooster is the tenth of the repeating 12-year cycle of animals which appear in the Chinese zodiac. The Year of the Rooster is also denoted by the Earthly Branch symbol yǒu.',
        personality:
          'People born in the Year of the Rooster are typically confident, hardworking, and proud individuals who value their appearance and reputation. Roosters are known for their flamboyant nature and their love of attention. At the same time, they can be quite critical and perfectionistic, sometimes setting impossibly high standards for themselves and others. They are also known for their honesty and their willingness to speak their minds, even if it means causing conflict or controversy. Roosters are ambitious and dedicated, often working tirelessly to achieve their goals and succeed in their chosen fields. They are also known for their intelligence and their ability to think strategically. Overall, those born in the Year of the Rooster are believed to be confident, hardworking, and ambitious individuals who value their appearance and reputation. They have a flamboyant nature and a love of attention, and are often willing to speak their minds and take risks in pursuit of their goals.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zodiac: 'Dog',
        description:
          'The Dog is the eleventh of the repeating 12-year cycle of animals which appear in the Chinese zodiac. The Year of the Dog is also denoted by the Earthly Branch symbol Xū.',
        personality:
          'People born in the Year of the Dog are typically loyal, honest, and dependable individuals who value their relationships with others. Dogs are known for their strong sense of justice and their willingness to defend those who are vulnerable. At the same time, they can be quite stubborn and opinionated, sometimes refusing to back down even when it would be in their best interest to do so. They are also known for their protective nature and their tendency to be fiercely loyal to their loved ones. Dogs are reliable and hardworking, often dedicating themselves to a cause or a career with great passion and commitment. They are also known for their intelligence and their ability to read and understand the emotions of others. Overall, those born in the Year of the Dog are believed to be loyal, honest, and dependable individuals who value their relationships with others. They have a strong sense of justice and a protective nature, and are often willing to go to great lengths to defend those who are vulnerable.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zodiac: 'Boar',
        description:
          'The Boar is the twelfth of the repeating 12-year cycle of animals which appear in the Chinese zodiac. The Year of the Boar is also denoted by the Earthly Branch symbol hài.',
        personality:
          'People born in the Year of the Boar are typically honest, straightforward, and sincere individuals who value their relationships with others. Boars are known for their generosity and their willingness to help those in need. At the same time, they can be quite naive and trusting, sometimes being taken advantage of by others who are not as honest or well-intentioned. They are also known for their optimism and their ability to see the best in people and situations. Boars are hardworking and diligent, often dedicating themselves to their work or their passions with great enthusiasm and focus. They are also known for their hospitality and their love of good food and drink. Overall, those born in the Year of the Boar are believed to be honest, generous, and optimistic individuals who value their relationships with others. They have a strong sense of duty and a willingness to work hard, and are often well-liked and respected by those around them.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('zodiacs', null, {})
  }
}
