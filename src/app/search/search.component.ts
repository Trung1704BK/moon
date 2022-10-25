import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText!: string;
  title = 'recourse5_angular1';

  heroes = [
    {id: 1, title: 'WHEN is Mid-Autumn Festival?', Coutry: 'China',
      content: 'Traditionally Mid-Autumn takes place on the fifteenth day of the eight month of the lunar calendar, the Mid-Autumn Festival is the time of the “Harvest Moon” when the moon appears at its fullest during the autumnal equinox. The image of a full moon symbolizes a happy family reunion.',
      img: 'https://c4.wallpaperflare.com/wallpaper/264/854/323/lights-the-moon-china-nanjing-wallpaper-preview.jpg'},
    {id: 2, title: 'WHO celebrates Mid-Autumn Festival?', Coutry: 'China',
      content: 'The Mid-Autumn Festival is one of the most important holidays in China and is recognized and celebrated by ethnic Chinese around the world. Similar holidays are celebrated in Japan (Tsukimi), Korea (Chuseok), Vietnam (Tết Trung Thu), and other countries in East and Southeast Asia.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Bav5xeha6ywx15VlbfdQi8cGMOpNsKPjRK38SIRPbgVdcyXQGVuICtE_MwATV3eR4Qg&usqp=CAU'},
    {id: 3, title: 'WHICH food is the iconic Mid-Autumn Festival treat?', Coutry: 'China',
      content: 'Traditionally, popular Mid-Autumn Festival foods include Pomelo, pumpkin, taro, osmanthus wine, and hairy crabs. But the must-eat treat? Moon cakes! Moon cakes (or "yue bing" in Chinese) are a type of Chinese cake with a sweet fillings like bean paste, lotus seed paste, nuts, and savory duck eggs. It is typically eaten with tea and shared with loved ones, under a beautiful full moon.\n' +
          '\n' +
          'There is another moon cake origin story: In late Yuan Dynasty, people could not bear the cruel rule of the court. Zhu Yuanzhang, the leader of Ming, united various resistance forces to prepare for the uprising. But it was hard to deliver military massage secretly. The smart rebels came up with an idea that put the note writing “Uprising on the 15th night of 8th lunar month” into the mooncakes, and then sent them to other resistance forces. On the day of the uprising, the uprising troops from different places got together and fight against the Yuan troop. Soon the uprising succeeded and Zhu Yuanzhang presented mooncakes to the ministers as gifts. It is said that since then the custom of eating mooncakes in the Mid-Autumn Festival was formed. ',
      img: 'https://cf.shopee.com.my/file/ebcf9965ff28dc54b47165687ba954c9'},
    {id: 4, title: 'WHO is the Moon Goddess and the Moon Rabbit?', Coutry: 'China',
      content: 'In Chinese mythology the Moon Goddess is named Chang’e, 嫦娥. There are many stories about Chang’e, including the origin of the Mid-Autumn Festival. Chang’e was a beautiful woman married to an archer named Houyi 后羿. 10 suns had risen into the sky and were scorching the earth, so Houyi shot down 9 of them, leaving just 1 sun in the sky. As a reward Houyi was given 2 elixirs that would grant immortality which he gave to Chang’e to keep safe. While he was out hunting his apprentice tried to steal the elixirs. To keep the elixirs from the evil apprentice, Chang’e drank them and became immortal. She then flew to the moon so she could still be close to her husband. (Some versions of the story say that Chang’e stole the elixirs from her husband and escaped to the moon so he couldn’t find her). When Houyi found out, he made an alter and filled it with his wife’s favorite fruits and cakes, and then took his own life. This is why when the full Moon appears during Mid-Autumn some people will set up an alter for the worship of Chang’e with fruits and pastries.\n' +
          '\n' +
          'Chang’e also has a companion with her, the Moon Rabbit 月兔, or Jade Rabbit 玉兔. In many Southeast Asian cultures, The Moon Rabbit sits with the Moon Goddess and creates herbs and elixirs in his mortar and pestle. If you look up at the full moon you might be able to see the outline of the Moon Rabbit hard at work!',
      img: 'https://static.vecteezy.com/system/resources/previews/008/297/617/original/mid-autumn-festival-the-rabbit-greeting-happy-chinese-mid-autumn-traditional-with-moonlight-on-blue-background-vector.jpg'},
    {id: 5, title: 'Moonlit celebrations', Coutry: 'Viet Nam',
      content: 'On the night of the full moon, children bearing brightly coloured lanterns form raucous processions and tour their neighbourhoods singing songs. You will see a male dancer wearing a round happy-faced mask that symbolises the moon. He urges the lion dancers on and delights the crowd with his comical moves. This is the Earth God, Ông Địa, who represents the fullness of the earth and reminds onlookers to give thanks for its bounty. Ông Địa always brings joy and puts a smile on every Vietnamese child\'s face. ',
      img: 'https://vietnam.travel/sites/default/files/inline-images/mid-autumn%20festival%20Vietnam%202019-15.jpg'},
    {id: 6, title: 'Mooncake madness', Coutry: 'Viet Nam',
      content: 'All across Vietnam, families welcome Tết Trung Thu by placing a five-fruit tray and cakes on our ancestral altar. We offer the food to our ancestors and worship, before feasting on mooncakes -- usually outside under the light of the moon. Round or square, these cakes are moulded with elaborate details of flowers, carp and geometric patterns.\n' +
          '\n' +
          'The two most common types are bánh dẻo (soft, sticky cakes with a mochi-texture) and bánh nướng (baked cakes with a thick wheat crust). Mooncakes in Vietnam come in a seemingly infinite variety of flavours, both sweet and savoury. Feel free to buy a box of mooncakes to enjoy yourself, or to share with your Vietnamese friends and hosts.',
      img: 'https://vietnam.travel/sites/default/files/inline-images/mid-autumn%20festival%20Vietnam%202019-4.jpg'},
    {id: 7, title: 'Lion dancing', Coutry: 'Viet Nam',
      content: 'Lion dancing or múa lân is an essential element of the Mid-autumn festivities. Groups of children gather, each carrying a red lantern. Everyone sings along to the cheerful Mid-autumn Festival songs memorized since childhood. Excitement peaks when drumbeats ring out from down the dark street. The smaller kids shrink back and the older ones run forward as a mythical lion bursts into their courtyard, its giant head and sinuous body borne by a team of acrobatic dancers.\n' +
          '\n' +
          'With its gaping mouth and protruding eyes, the lion is both comical and formidable. The dancers lunge closer to the crowd, making the kids scream and laugh at their antics. Under the light of the full moon, the lion’s red sequined body sparkles as it dances. For Vietnamese children, not much else beats this spectacular performance on the night of Trung Thu.',
      img: 'https://vietnam.travel/sites/default/files/inline-images/mid-autumn%20festival%20Vietnam%202019-6.jpg'},
    {id: 8, title: 'Where to celebrate the Mid-autumn Festival in Vietnam', Coutry: 'Viet Nam',
      content: 'Hanoi\n' +
          'If you’re in Hanoi before the Mid-Autumn Festival, be sure to visit Hàng Mã and Lương Văn Can. These streets will be packed with a variety of toys and lanterns. Another Hanoi address to visit before the big night is 87 Mã Mây, where you can watch local artisans preparing festival crafts. On the eve of Mid-autumn, the Youth Theatre on Ngô Thì Nhậm Street and the Children’s Palace on Lý Thái Tổ Street host children’s musical shows.\n' +
          '\n' +
          'Hội An\n' +
          'Hội An is famous for its full moon celebrations year-round. For the Mid-autumn Festival, this riverside town kicks the party up a notch. Locals and travellers pour into the Ancient Town on foot. Dancers and their drumming troupes prowl the streets, performing in front of pagodas and businesses. There\'s music and all sorts of revelry up and down the banks of the Thu Bồn River, and in the countryside, every home has an altar out front.\n' +
          '\n' +
          'Ho Chi Minh City\n' +
          'The area of Chợ Lớn in Ho Chi Minh City is home to exciting Mid-autumn festivities. Stop by Lương Như Hộc Street, famous for its lanterns, masks and lion heads overflowing on the sidewalks. This is the perfect spot to pick up a souvenir lion head. The shop at 109 Triệu Quang Phục Street has been selling lion heads to the city’s best dancers for five decades.',
      img: 'https://vietnam.travel/sites/default/files/inline-images/mid-autumn%20festival%20Vietnam%202019-14.jpg'},
    {id: 9, title: 'History:', Coutry: 'Japan',
      content: 'The origins of Tsukimi can be traced back to the Japanese tradition of holding festivals to watch the harvest moon. It is believed that Japanese nobles started the custom during the Heian period, gathering to recite and exchange poetry during the full moon. The eighth month of the Japanese lunar calendar (roughly September in the Gregorian calendar) has been consistently described as the best time to view the moon, as the relative positions of the earth, moon and sun make the moon appear exceptionally bright. On the evening of the full moon, it is tradition to gather, decorate the scene with susuki and serve tsukimi dango and other types of tsukimi ryōri (見料理, tsukimi dishes), such as taro, edamame, and chestnuts. These seasonal foods and sake serve as offerings to the moon to pray for a bountiful harvest.',
      img: 'https://jref.com/attachments/tsukimi-dango-susuki-jpg.89494/'},
    {id: 10, title: 'Tsukimi food', Coutry: 'Japan',
      content: ' Typical foods enjoyed during tsukimi are rice cakes, tsukimi dango, which are supposed to remind us of the full moon\'s beauty and are usually presented in a stack of fifteen balls corresponding to the old date of the festival. Other seasonal foods are related to autumn, such as tsukimi soba or tsukimi udon with nori and a raw egg in the middle, symbolising the full moon. Sushi garnished with a raw quail egg is called tsukimi style. Japanese fast food restaurants offer unique fried egg sandwiches in September and October called tsukimi burgers . Family restaurants offer tsukimi sets.',
      img: 'https://jref.com/attachments/tsukimi-potatoe-salad-jpg.89492/'},
    {id: 11, title: 'Legend of the moon rabbit:', Coutry: 'Japan',
      content: 'In Japanese mythology, the moon rabbit is called Tsuki no Usagi (月の兎) and originates in Shintō, referring to the "Legend of the Fox, the Monkey and the Rabbit". According to this legend, a fox, a monkey and a rabbit - bound by deep friendship - played in the mountains during the day and hunted, spending the night together in the forest. The Lord of Heaven, Taishakuten (帝釈天), got word of this curious companionship and sought out the three friends, disguised as an old wanderer. He found them in the evening around the campfire and asked them for food. The monkey offered him nuts, and the fox served him fish. The rabbit, however, found nothing to share with the wanderer. When the monkey and the fox lambasted the rabbit, it leapt into the campfire in despair and shouted, "Eat me!". Deeply moved by this gesture, the Lord of Heaven revived the rabbit\'s body and took it to the moon. The smoke produced by the rabbit\'s self-sacrifice covered the shining surface of the moon and has been showing the rabbit\'s silhouette to this day.',
      img: 'https://c4.wallpaperflare.com/wallpaper/264/854/323/lights-the-moon-china-nanjing-wallpaper-preview.jpg'},  {id: 1, title: 'WHEN is Mid-Autumn Festival?',
      content: 'Traditionally Mid-Autumn takes place on the fifteenth day of the eight month of the lunar calendar, the Mid-Autumn Festival is the time of the “Harvest Moon” when the moon appears at its fullest during the autumnal equinox. The image of a full moon symbolizes a happy family reunion.',
      img: 'https://jref.com/attachments/tsuki-no-usagi-jpg.89505/'},
    {id: 12, title: 'Tsukimi customs', Coutry: 'Japan',
      content: ' Tsukimi customs include placing sprays of Japanese pampas grass (芒 susuki) and preparing rice dumplings called tsukimi dango (月見団子) to celebrate the lunar beauty. Seasonal foods like sweet potatoes, beans and chestnuts are offered to the moon. The alternative names of the festival, imomeigetsu (芋名月, "potato harvest moon"), mamemeigetsu (豆名月, "bean harvest moon") or kurimeigetsu (栗名月, "chestnut harvest moon") derive from these customs. The rabbit is another symbol associated with Tsukimi.',
      img: 'https://jref.com/attachments/twelve-beauties-moon-viewing-jpg.89493/'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
