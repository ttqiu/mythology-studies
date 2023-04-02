'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('origins', [
      {
        origin: 'Greek Mythology',
        description:
          'Greek mythology is a broad and captivating collection of stories, featuring gods, goddesses, heroes, monsters, warriors, and foolish characters that played a significant role in ancient Greek society. These myths provided explanations for everything from religious practices to natural phenomena, and gave people a sense of meaning in their surroundings. Although some of these stories are purely fictional, some have historical roots.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        origin: 'Chinese Mythology',
        description:
          'Chinese mythology is a rich and diverse collection of cultural history, religious traditions, and folktales that have been passed down for centuries, both through oral tradition and written form. It encompasses a range of themes, including creation myths, legends, and stories about the founding of Chinese culture and the state. These myths often explore moral and ethical issues, providing a framework for understanding Chinese culture and values. While Chinese mythology is not necessarily considered to be a factual recording of history, some people do believe that it contains elements of historical truth. The myths are thought to have originated around the 12th century BCE and were passed down orally for over a thousand years before being recorded in written form. Early works such as Shui Jing Zhu and Shan Hai Jing are important sources for the myths that have survived to the present day. Chinese mythology has also been influenced by other belief systems, including Confucianism, Taoism, and Buddhism. These systems have adapted some elements of pre-existing mythology, while also incorporating some of their own beliefs and teachings into Chinese mythology. For instance, the Taoist belief in a spiritual paradise became part of Chinese mythology as the dwelling place of immortals and deities. Similarly, Confucian political philosophy incorporated myths glorifying the benevolent rulers of the past, known as the Three August Ones and Five Emperors.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        origin: 'Hindu Mythology',
        description:
          "Hindu mythology is a rich and complex collection of stories, beliefs, and traditions that have been passed down through generations in India. It encompasses a wide range of themes, from creation myths and legends to tales of gods and goddesses, heroes, and monsters. Hindu mythology plays a central role in Indian culture and religion, and has influenced literature, art, and philosophy. One of the most important aspects of Hindu mythology is the belief in reincarnation, the idea that the soul passes through a cycle of birth, death, and rebirth. This belief is closely linked to the concept of karma, the idea that a person's actions in one life can affect their future lives. Hindu mythology also includes a pantheon of gods and goddesses, each with their own unique personalities and powers.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        origin: 'Egyptian Mythology',
        description:
          'Egyptian mythology refers to the collection of beliefs and stories that were central to the religious practices of ancient Egypt. These myths and legends were used to explain the creation of the world, the roles of the gods and goddesses, and the afterlife. Egyptian mythology is characterized by a complex pantheon of deities with unique powers and personalities. Some of the most well-known gods and goddesses include Ra, Osiris, Isis, Horus, and Anubis. Egyptian mythology played a vital role in the daily life of the ancient Egyptians, and it was integrated into their art, architecture, and literature. The stories of the gods and goddesses were used to justify the actions of the pharaohs, and temples were built in their honor throughout Egypt. The belief in the afterlife was also an important aspect of Egyptian mythology, and elaborate burial rituals and tombs were created to ensure a successful transition into the afterlife. The myths of Egyptian mythology have endured throughout history, and they continue to influence modern literature, art, and culture. Many of the stories and characters have been adapted and reimagined in popular media, demonstrating the continued relevance and power of these ancient beliefs.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        origin: 'Mesopotamian Mythology',
        description:
          'Mesopotamian mythology refers to the ancient beliefs, myths, and stories of the civilizations that thrived in the region known as Mesopotamia, located in modern-day Iraq. These myths and legends were an integral part of Mesopotamian culture and were passed down orally from generation to generation. Mesopotamian mythology features a pantheon of gods and goddesses who governed different aspects of life, including creation, death, war, and agriculture. Some of the most well-known deities include Anu, the god of the sky; Enlil, the god of wind and storms; and Inanna, the goddess of love and fertility. The myths of Mesopotamian mythology often explore themes such as the creation of the universe, the origin of humanity, and the struggle between good and evil. One of the most famous stories is the Epic of Gilgamesh, which tells the story of a heroic king who seeks immortality and comes to understand the limitations of human life. Mesopotamian mythology has had a significant impact on the development of Western civilization, with many of its stories and themes being echoed in later cultures. Its influence can be seen in the religious and mythological beliefs of ancient Greece and Rome, as well as in the Judeo-Christian tradition.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        origin: 'Celtic Mythology',
        description:
          'Celtic mythology refers to the myths, legends, and folklore of the ancient Celtic peoples who lived in Western Europe, particularly in Ireland, Scotland, and Wales. These myths and stories were originally passed down orally from generation to generation, but were later recorded in manuscripts and written works. Celtic mythology features a rich and diverse cast of characters, including gods and goddesses, heroes and heroines, and magical creatures such as fairies and giants. Some of the most well-known deities include the Morrigan, a goddess of war and fate; Lugh, a god of the sun and harvest; and Brigid, a goddess of fertility and healing. The stories of Celtic mythology often explore themes such as the cycles of nature, the struggle between good and evil, and the importance of community and tradition. One of the most famous stories is the tale of King Arthur and the Knights of the Round Table, which has been adapted and retold in countless forms throughout history.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        origin: 'Norse Mythology',
        description:
          'Norse mythology refers to the myths, legends, and beliefs of the ancient Scandinavian people, particularly those of Norway, Sweden, and Denmark. These myths were passed down orally from generation to generation, and were eventually recorded in written form in the 13th century in texts such as the Prose Edda and the Poetic Edda. Norse mythology features a pantheon of powerful gods and goddesses, such as Odin, Thor, and Loki, as well as other mythical creatures including giants, dwarves, and dragons. The stories often explore themes of heroism, fate, and the natural world, and are known for their epic scope and grandeur.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('origins', null, {})
  }
}
