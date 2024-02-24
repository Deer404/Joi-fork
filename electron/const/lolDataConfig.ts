interface champDict {
	[propName: string]: {
		champId: string;
		label: string;
		alias: string;
		title: string;
	};
}

//todo 重构计划： 从客户端获取英雄数据
//https://ddragon.leagueoflegends.com/cdn/14.2.1/data/zh_CN/champion.json
//Object.values(json.data).reduce((p,c)=>{p[c.key]={champId:c.key,label:c.name,alias:c.id,title:c.title};return p},{})
export const champDict: champDict = {
	"1": {
		champId: "1",
		label: "黑暗之女",
		alias: "Annie",
		title: "安妮"
	},
	"2": {
		champId: "2",
		label: "狂战士",
		alias: "Olaf",
		title: "奥拉夫"
	},
	"3": {
		champId: "3",
		label: "正义巨像",
		alias: "Galio",
		title: "加里奥"
	},
	"4": {
		champId: "4",
		label: "卡牌大师",
		alias: "TwistedFate",
		title: "崔斯特"
	},
	"5": {
		champId: "5",
		label: "德邦总管",
		alias: "XinZhao",
		title: "赵信"
	},
	"6": {
		champId: "6",
		label: "无畏战车",
		alias: "Urgot",
		title: "厄加特"
	},
	"7": {
		champId: "7",
		label: "诡术妖姬",
		alias: "Leblanc",
		title: "乐芙兰"
	},
	"8": {
		champId: "8",
		label: "猩红收割者",
		alias: "Vladimir",
		title: "弗拉基米尔"
	},
	"9": {
		champId: "9",
		label: "远古恐惧",
		alias: "Fiddlesticks",
		title: "费德提克"
	},
	"10": {
		champId: "10",
		label: "正义天使",
		alias: "Kayle",
		title: "凯尔"
	},
	"11": {
		champId: "11",
		label: "无极剑圣",
		alias: "MasterYi",
		title: "易"
	},
	"12": {
		champId: "12",
		label: "牛头酋长",
		alias: "Alistar",
		title: "阿利斯塔"
	},
	"13": {
		champId: "13",
		label: "符文法师",
		alias: "Ryze",
		title: "瑞兹"
	},
	"14": {
		champId: "14",
		label: "亡灵战神",
		alias: "Sion",
		title: "赛恩"
	},
	"15": {
		champId: "15",
		label: "战争女神",
		alias: "Sivir",
		title: "希维尔"
	},
	"16": {
		champId: "16",
		label: "众星之子",
		alias: "Soraka",
		title: "索拉卡"
	},
	"17": {
		champId: "17",
		label: "迅捷斥候",
		alias: "Teemo",
		title: "提莫"
	},
	"18": {
		champId: "18",
		label: "麦林炮手",
		alias: "Tristana",
		title: "崔丝塔娜"
	},
	"19": {
		champId: "19",
		label: "祖安怒兽",
		alias: "Warwick",
		title: "沃里克"
	},
	"20": {
		champId: "20",
		label: "雪原双子",
		alias: "Nunu",
		title: "努努和威朗普"
	},
	"21": {
		champId: "21",
		label: "赏金猎人",
		alias: "MissFortune",
		title: "厄运小姐"
	},
	"22": {
		champId: "22",
		label: "寒冰射手",
		alias: "Ashe",
		title: "艾希"
	},
	"23": {
		champId: "23",
		label: "蛮族之王",
		alias: "Tryndamere",
		title: "泰达米尔"
	},
	"24": {
		champId: "24",
		label: "武器大师",
		alias: "Jax",
		title: "贾克斯"
	},
	"25": {
		champId: "25",
		label: "堕落天使",
		alias: "Morgana",
		title: "莫甘娜"
	},
	"26": {
		champId: "26",
		label: "时光守护者",
		alias: "Zilean",
		title: "基兰"
	},
	"27": {
		champId: "27",
		label: "炼金术士",
		alias: "Singed",
		title: "辛吉德"
	},
	"28": {
		champId: "28",
		label: "痛苦之拥",
		alias: "Evelynn",
		title: "伊芙琳"
	},
	"29": {
		champId: "29",
		label: "瘟疫之源",
		alias: "Twitch",
		title: "图奇"
	},
	"30": {
		champId: "30",
		label: "死亡颂唱者",
		alias: "Karthus",
		title: "卡尔萨斯"
	},
	"31": {
		champId: "31",
		label: "虚空恐惧",
		alias: "Chogath",
		title: "科加斯"
	},
	"32": {
		champId: "32",
		label: "殇之木乃伊",
		alias: "Amumu",
		title: "阿木木"
	},
	"33": {
		champId: "33",
		label: "披甲龙龟",
		alias: "Rammus",
		title: "拉莫斯"
	},
	"34": {
		champId: "34",
		label: "冰晶凤凰",
		alias: "Anivia",
		title: "艾尼维亚"
	},
	"35": {
		champId: "35",
		label: "恶魔小丑",
		alias: "Shaco",
		title: "萨科"
	},
	"36": {
		champId: "36",
		label: "祖安狂人",
		alias: "DrMundo",
		title: "蒙多医生"
	},
	"37": {
		champId: "37",
		label: "琴瑟仙女",
		alias: "Sona",
		title: "娑娜"
	},
	"38": {
		champId: "38",
		label: "虚空行者",
		alias: "Kassadin",
		title: "卡萨丁"
	},
	"39": {
		champId: "39",
		label: "刀锋舞者",
		alias: "Irelia",
		title: "艾瑞莉娅"
	},
	"40": {
		champId: "40",
		label: "风暴之怒",
		alias: "Janna",
		title: "迦娜"
	},
	"41": {
		champId: "41",
		label: "海洋之灾",
		alias: "Gangplank",
		title: "普朗克"
	},
	"42": {
		champId: "42",
		label: "英勇投弹手",
		alias: "Corki",
		title: "库奇"
	},
	"43": {
		champId: "43",
		label: "天启者",
		alias: "Karma",
		title: "卡尔玛"
	},
	"44": {
		champId: "44",
		label: "瓦洛兰之盾",
		alias: "Taric",
		title: "塔里克"
	},
	"45": {
		champId: "45",
		label: "邪恶小法师",
		alias: "Veigar",
		title: "维迦"
	},
	"48": {
		champId: "48",
		label: "巨魔之王",
		alias: "Trundle",
		title: "特朗德尔"
	},
	"50": {
		champId: "50",
		label: "诺克萨斯统领",
		alias: "Swain",
		title: "斯维因"
	},
	"51": {
		champId: "51",
		label: "皮城女警",
		alias: "Caitlyn",
		title: "凯特琳"
	},
	"53": {
		champId: "53",
		label: "蒸汽机器人",
		alias: "Blitzcrank",
		title: "布里茨"
	},
	"54": {
		champId: "54",
		label: "熔岩巨兽",
		alias: "Malphite",
		title: "墨菲特"
	},
	"55": {
		champId: "55",
		label: "不祥之刃",
		alias: "Katarina",
		title: "卡特琳娜"
	},
	"56": {
		champId: "56",
		label: "永恒梦魇",
		alias: "Nocturne",
		title: "魔腾"
	},
	"57": {
		champId: "57",
		label: "扭曲树精",
		alias: "Maokai",
		title: "茂凯"
	},
	"58": {
		champId: "58",
		label: "荒漠屠夫",
		alias: "Renekton",
		title: "雷克顿"
	},
	"59": {
		champId: "59",
		label: "德玛西亚皇子",
		alias: "JarvanIV",
		title: "嘉文四世"
	},
	"60": {
		champId: "60",
		label: "蜘蛛女皇",
		alias: "Elise",
		title: "伊莉丝"
	},
	"61": {
		champId: "61",
		label: "发条魔灵",
		alias: "Orianna",
		title: "奥莉安娜"
	},
	"62": {
		champId: "62",
		label: "齐天大圣",
		alias: "MonkeyKing",
		title: "孙悟空"
	},
	"63": {
		champId: "63",
		label: "复仇焰魂",
		alias: "Brand",
		title: "布兰德"
	},
	"64": {
		champId: "64",
		label: "盲僧",
		alias: "LeeSin",
		title: "李青"
	},
	"67": {
		champId: "67",
		label: "暗夜猎手",
		alias: "Vayne",
		title: "薇恩"
	},
	"68": {
		champId: "68",
		label: "机械公敌",
		alias: "Rumble",
		title: "兰博"
	},
	"69": {
		champId: "69",
		label: "魔蛇之拥",
		alias: "Cassiopeia",
		title: "卡西奥佩娅"
	},
	"72": {
		champId: "72",
		label: "水晶先锋",
		alias: "Skarner",
		title: "斯卡纳"
	},
	"74": {
		champId: "74",
		label: "大发明家",
		alias: "Heimerdinger",
		title: "黑默丁格"
	},
	"75": {
		champId: "75",
		label: "沙漠死神",
		alias: "Nasus",
		title: "内瑟斯"
	},
	"76": {
		champId: "76",
		label: "狂野女猎手",
		alias: "Nidalee",
		title: "奈德丽"
	},
	"77": {
		champId: "77",
		label: "兽灵行者",
		alias: "Udyr",
		title: "乌迪尔"
	},
	"78": {
		champId: "78",
		label: "圣锤之毅",
		alias: "Poppy",
		title: "波比"
	},
	"79": {
		champId: "79",
		label: "酒桶",
		alias: "Gragas",
		title: "古拉加斯"
	},
	"80": {
		champId: "80",
		label: "不屈之枪",
		alias: "Pantheon",
		title: "潘森"
	},
	"81": {
		champId: "81",
		label: "探险家",
		alias: "Ezreal",
		title: "伊泽瑞尔"
	},
	"82": {
		champId: "82",
		label: "铁铠冥魂",
		alias: "Mordekaiser",
		title: "莫德凯撒"
	},
	"83": {
		champId: "83",
		label: "牧魂人",
		alias: "Yorick",
		title: "约里克"
	},
	"84": {
		champId: "84",
		label: "离群之刺",
		alias: "Akali",
		title: "阿卡丽"
	},
	"85": {
		champId: "85",
		label: "狂暴之心",
		alias: "Kennen",
		title: "凯南"
	},
	"86": {
		champId: "86",
		label: "德玛西亚之力",
		alias: "Garen",
		title: "盖伦"
	},
	"89": {
		champId: "89",
		label: "曙光女神",
		alias: "Leona",
		title: "蕾欧娜"
	},
	"90": {
		champId: "90",
		label: "虚空先知",
		alias: "Malzahar",
		title: "玛尔扎哈"
	},
	"91": {
		champId: "91",
		label: "刀锋之影",
		alias: "Talon",
		title: "泰隆"
	},
	"92": {
		champId: "92",
		label: "放逐之刃",
		alias: "Riven",
		title: "锐雯"
	},
	"96": {
		champId: "96",
		label: "深渊巨口",
		alias: "KogMaw",
		title: "克格莫"
	},
	"98": {
		champId: "98",
		label: "暮光之眼",
		alias: "Shen",
		title: "慎"
	},
	"99": {
		champId: "99",
		label: "光辉女郎",
		alias: "Lux",
		title: "拉克丝"
	},
	"101": {
		champId: "101",
		label: "远古巫灵",
		alias: "Xerath",
		title: "泽拉斯"
	},
	"102": {
		champId: "102",
		label: "龙血武姬",
		alias: "Shyvana",
		title: "希瓦娜"
	},
	"103": {
		champId: "103",
		label: "九尾妖狐",
		alias: "Ahri",
		title: "阿狸"
	},
	"104": {
		champId: "104",
		label: "法外狂徒",
		alias: "Graves",
		title: "格雷福斯"
	},
	"105": {
		champId: "105",
		label: "潮汐海灵",
		alias: "Fizz",
		title: "菲兹"
	},
	"106": {
		champId: "106",
		label: "不灭狂雷",
		alias: "Volibear",
		title: "沃利贝尔"
	},
	"107": {
		champId: "107",
		label: "傲之追猎者",
		alias: "Rengar",
		title: "雷恩加尔"
	},
	"110": {
		champId: "110",
		label: "惩戒之箭",
		alias: "Varus",
		title: "韦鲁斯"
	},
	"111": {
		champId: "111",
		label: "深海泰坦",
		alias: "Nautilus",
		title: "诺提勒斯"
	},
	"112": {
		champId: "112",
		label: "机械先驱",
		alias: "Viktor",
		title: "维克托"
	},
	"113": {
		champId: "113",
		label: "北地之怒",
		alias: "Sejuani",
		title: "瑟庄妮"
	},
	"114": {
		champId: "114",
		label: "无双剑姬",
		alias: "Fiora",
		title: "菲奥娜"
	},
	"115": {
		champId: "115",
		label: "爆破鬼才",
		alias: "Ziggs",
		title: "吉格斯"
	},
	"117": {
		champId: "117",
		label: "仙灵女巫",
		alias: "Lulu",
		title: "璐璐"
	},
	"119": {
		champId: "119",
		label: "荣耀行刑官",
		alias: "Draven",
		title: "德莱文"
	},
	"120": {
		champId: "120",
		label: "战争之影",
		alias: "Hecarim",
		title: "赫卡里姆"
	},
	"121": {
		champId: "121",
		label: "虚空掠夺者",
		alias: "Khazix",
		title: "卡兹克"
	},
	"122": {
		champId: "122",
		label: "诺克萨斯之手",
		alias: "Darius",
		title: "德莱厄斯"
	},
	"126": {
		champId: "126",
		label: "未来守护者",
		alias: "Jayce",
		title: "杰斯"
	},
	"127": {
		champId: "127",
		label: "冰霜女巫",
		alias: "Lissandra",
		title: "丽桑卓"
	},
	"131": {
		champId: "131",
		label: "皎月女神",
		alias: "Diana",
		title: "黛安娜"
	},
	"133": {
		champId: "133",
		label: "德玛西亚之翼",
		alias: "Quinn",
		title: "奎因"
	},
	"134": {
		champId: "134",
		label: "暗黑元首",
		alias: "Syndra",
		title: "辛德拉"
	},
	"136": {
		champId: "136",
		label: "铸星龙王",
		alias: "AurelionSol",
		title: "奥瑞利安·索尔"
	},
	"141": {
		champId: "141",
		label: "影流之镰",
		alias: "Kayn",
		title: "凯隐"
	},
	"142": {
		champId: "142",
		label: "暮光星灵",
		alias: "Zoe",
		title: "佐伊"
	},
	"143": {
		champId: "143",
		label: "荆棘之兴",
		alias: "Zyra",
		title: "婕拉"
	},
	"145": {
		champId: "145",
		label: "虚空之女",
		alias: "Kaisa",
		title: "卡莎"
	},
	"147": {
		champId: "147",
		label: "星籁歌姬",
		alias: "Seraphine",
		title: "萨勒芬妮"
	},
	"150": {
		champId: "150",
		label: "迷失之牙",
		alias: "Gnar",
		title: "纳尔"
	},
	"154": {
		champId: "154",
		label: "生化魔人",
		alias: "Zac",
		title: "扎克"
	},
	"157": {
		champId: "157",
		label: "疾风剑豪",
		alias: "Yasuo",
		title: "亚索"
	},
	"161": {
		champId: "161",
		label: "虚空之眼",
		alias: "Velkoz",
		title: "维克兹"
	},
	"163": {
		champId: "163",
		label: "岩雀",
		alias: "Taliyah",
		title: "塔莉垭"
	},
	"164": {
		champId: "164",
		label: "青钢影",
		alias: "Camille",
		title: "卡蜜尔"
	},
	"166": {
		champId: "166",
		label: "影哨",
		alias: "Akshan",
		title: "阿克尚"
	},
	"200": {
		champId: "200",
		label: "虚空女皇",
		alias: "Belveth",
		title: "卑尔维斯"
	},
	"201": {
		champId: "201",
		label: "弗雷尔卓德之心",
		alias: "Braum",
		title: "布隆"
	},
	"202": {
		champId: "202",
		label: "戏命师",
		alias: "Jhin",
		title: "烬"
	},
	"203": {
		champId: "203",
		label: "永猎双子",
		alias: "Kindred",
		title: "千珏"
	},
	"221": {
		champId: "221",
		label: "祖安花火",
		alias: "Zeri",
		title: "泽丽"
	},
	"222": {
		champId: "222",
		label: "暴走萝莉",
		alias: "Jinx",
		title: "金克丝"
	},
	"223": {
		champId: "223",
		label: "河流之王",
		alias: "TahmKench",
		title: "塔姆"
	},
	"233": {
		champId: "233",
		label: "狂厄蔷薇",
		alias: "Briar",
		title: "贝蕾亚"
	},
	"234": {
		champId: "234",
		label: "破败之王",
		alias: "Viego",
		title: "佛耶戈"
	},
	"235": {
		champId: "235",
		label: "涤魂圣枪",
		alias: "Senna",
		title: "赛娜"
	},
	"236": {
		champId: "236",
		label: "圣枪游侠",
		alias: "Lucian",
		title: "卢锡安"
	},
	"238": {
		champId: "238",
		label: "影流之主",
		alias: "Zed",
		title: "劫"
	},
	"240": {
		champId: "240",
		label: "暴怒骑士",
		alias: "Kled",
		title: "克烈"
	},
	"245": {
		champId: "245",
		label: "时间刺客",
		alias: "Ekko",
		title: "艾克"
	},
	"246": {
		champId: "246",
		label: "元素女皇",
		alias: "Qiyana",
		title: "奇亚娜"
	},
	"254": {
		champId: "254",
		label: "皮城执法官",
		alias: "Vi",
		title: "蔚"
	},
	"266": {
		champId: "266",
		label: "暗裔剑魔",
		alias: "Aatrox",
		title: "亚托克斯"
	},
	"267": {
		champId: "267",
		label: "唤潮鲛姬",
		alias: "Nami",
		title: "娜美"
	},
	"268": {
		champId: "268",
		label: "沙漠皇帝",
		alias: "Azir",
		title: "阿兹尔"
	},
	"350": {
		champId: "350",
		label: "魔法猫咪",
		alias: "Yuumi",
		title: "悠米"
	},
	"360": {
		champId: "360",
		label: "沙漠玫瑰",
		alias: "Samira",
		title: "莎弥拉"
	},
	"412": {
		champId: "412",
		label: "魂锁典狱长",
		alias: "Thresh",
		title: "锤石"
	},
	"420": {
		champId: "420",
		label: "海兽祭司",
		alias: "Illaoi",
		title: "俄洛伊"
	},
	"421": {
		champId: "421",
		label: "虚空遁地兽",
		alias: "RekSai",
		title: "雷克塞"
	},
	"427": {
		champId: "427",
		label: "翠神",
		alias: "Ivern",
		title: "艾翁"
	},
	"429": {
		champId: "429",
		label: "复仇之矛",
		alias: "Kalista",
		title: "卡莉丝塔"
	},
	"432": {
		champId: "432",
		label: "星界游神",
		alias: "Bard",
		title: "巴德"
	},
	"497": {
		champId: "497",
		label: "幻翎",
		alias: "Rakan",
		title: "洛"
	},
	"498": {
		champId: "498",
		label: "逆羽",
		alias: "Xayah",
		title: "霞"
	},
	"516": {
		champId: "516",
		label: "山隐之焰",
		alias: "Ornn",
		title: "奥恩"
	},
	"517": {
		champId: "517",
		label: "解脱者",
		alias: "Sylas",
		title: "塞拉斯"
	},
	"518": {
		champId: "518",
		label: "万花通灵",
		alias: "Neeko",
		title: "妮蔻"
	},
	"523": {
		champId: "523",
		label: "残月之肃",
		alias: "Aphelios",
		title: "厄斐琉斯"
	},
	"526": {
		champId: "526",
		label: "镕铁少女",
		alias: "Rell",
		title: "芮尔"
	},
	"555": {
		champId: "555",
		label: "血港鬼影",
		alias: "Pyke",
		title: "派克"
	},
	"711": {
		champId: "711",
		label: "愁云使者",
		alias: "Vex",
		title: "薇古丝"
	},
	"777": {
		champId: "777",
		label: "封魔剑魂",
		alias: "Yone",
		title: "永恩"
	},
	"875": {
		champId: "875",
		label: "腕豪",
		alias: "Sett",
		title: "瑟提"
	},
	"876": {
		champId: "876",
		label: "含羞蓓蕾",
		alias: "Lillia",
		title: "莉莉娅"
	},
	"887": {
		champId: "887",
		label: "灵罗娃娃",
		alias: "Gwen",
		title: "格温"
	},
	"888": {
		champId: "888",
		label: "炼金男爵",
		alias: "Renata",
		title: "烈娜塔 · 戈拉斯克"
	},
	"895": {
		champId: "895",
		label: "不羁之悦",
		alias: "Nilah",
		title: "尼菈"
	},
	"897": {
		champId: "897",
		label: "纳祖芒荣耀",
		alias: "KSante",
		title: "奎桑提"
	},
	"901": {
		champId: "901",
		label: "炽炎雏龙",
		alias: "Smolder",
		title: "斯莫德"
	},
	"902": {
		champId: "902",
		label: "明烛",
		alias: "Milio",
		title: "米利欧"
	},
	"910": {
		champId: "910",
		label: "异画师",
		alias: "Hwei",
		title: "彗"
	},
	"950": {
		champId: "950",
		label: "百裂冥犬",
		alias: "Naafiri",
		title: "纳亚菲利"
	}
};
export const optionsChampion = [
	{
		label: "黑暗之女",
		alias: "Annie",
		title: "安妮",
		value: 1
	},
	{
		label: "狂战士",
		alias: "Olaf",
		title: "奥拉夫",
		value: 2
	},
	{
		label: "正义巨像",
		alias: "Galio",
		title: "加里奥",
		value: 3
	},
	{
		label: "卡牌大师",
		alias: "TwistedFate",
		title: "崔斯特",
		value: 4
	},
	{
		label: "德邦总管",
		alias: "XinZhao",
		title: "赵信",
		value: 5
	},
	{
		label: "无畏战车",
		alias: "Urgot",
		title: "厄加特",
		value: 6
	},
	{
		label: "诡术妖姬",
		alias: "Leblanc",
		title: "乐芙兰",
		value: 7
	},
	{
		label: "猩红收割者",
		alias: "Vladimir",
		title: "弗拉基米尔",
		value: 8
	},
	{
		label: "远古恐惧",
		alias: "Fiddlesticks",
		title: "费德提克",
		value: 9
	},
	{
		label: "正义天使",
		alias: "Kayle",
		title: "凯尔",
		value: 10
	},
	{
		label: "无极剑圣",
		alias: "MasterYi",
		title: "易",
		value: 11
	},
	{
		label: "牛头酋长",
		alias: "Alistar",
		title: "阿利斯塔",
		value: 12
	},
	{
		label: "符文法师",
		alias: "Ryze",
		title: "瑞兹",
		value: 13
	},
	{
		label: "亡灵战神",
		alias: "Sion",
		title: "赛恩",
		value: 14
	},
	{
		label: "战争女神",
		alias: "Sivir",
		title: "希维尔",
		value: 15
	},
	{
		label: "众星之子",
		alias: "Soraka",
		title: "索拉卡",
		value: 16
	},
	{
		label: "迅捷斥候",
		alias: "Teemo",
		title: "提莫",
		value: 17
	},
	{
		label: "麦林炮手",
		alias: "Tristana",
		title: "崔丝塔娜",
		value: 18
	},
	{
		label: "祖安怒兽",
		alias: "Warwick",
		title: "沃里克",
		value: 19
	},
	{
		label: "雪原双子",
		alias: "Nunu",
		title: "努努和威朗普",
		value: 20
	},
	{
		label: "赏金猎人",
		alias: "MissFortune",
		title: "厄运小姐",
		value: 21
	},
	{
		label: "寒冰射手",
		alias: "Ashe",
		title: "艾希",
		value: 22
	},
	{
		label: "蛮族之王",
		alias: "Tryndamere",
		title: "泰达米尔",
		value: 23
	},
	{
		label: "武器大师",
		alias: "Jax",
		title: "贾克斯",
		value: 24
	},
	{
		label: "堕落天使",
		alias: "Morgana",
		title: "莫甘娜",
		value: 25
	},
	{
		label: "时光守护者",
		alias: "Zilean",
		title: "基兰",
		value: 26
	},
	{
		label: "炼金术士",
		alias: "Singed",
		title: "辛吉德",
		value: 27
	},
	{
		label: "痛苦之拥",
		alias: "Evelynn",
		title: "伊芙琳",
		value: 28
	},
	{
		label: "瘟疫之源",
		alias: "Twitch",
		title: "图奇",
		value: 29
	},
	{
		label: "死亡颂唱者",
		alias: "Karthus",
		title: "卡尔萨斯",
		value: 30
	},
	{
		label: "虚空恐惧",
		alias: "Chogath",
		title: "科加斯",
		value: 31
	},
	{
		label: "殇之木乃伊",
		alias: "Amumu",
		title: "阿木木",
		value: 32
	},
	{
		label: "披甲龙龟",
		alias: "Rammus",
		title: "拉莫斯",
		value: 33
	},
	{
		label: "冰晶凤凰",
		alias: "Anivia",
		title: "艾尼维亚",
		value: 34
	},
	{
		label: "恶魔小丑",
		alias: "Shaco",
		title: "萨科",
		value: 35
	},
	{
		label: "祖安狂人",
		alias: "DrMundo",
		title: "蒙多医生",
		value: 36
	},
	{
		label: "琴瑟仙女",
		alias: "Sona",
		title: "娑娜",
		value: 37
	},
	{
		label: "虚空行者",
		alias: "Kassadin",
		title: "卡萨丁",
		value: 38
	},
	{
		label: "刀锋舞者",
		alias: "Irelia",
		title: "艾瑞莉娅",
		value: 39
	},
	{
		label: "风暴之怒",
		alias: "Janna",
		title: "迦娜",
		value: 40
	},
	{
		label: "海洋之灾",
		alias: "Gangplank",
		title: "普朗克",
		value: 41
	},
	{
		label: "英勇投弹手",
		alias: "Corki",
		title: "库奇",
		value: 42
	},
	{
		label: "天启者",
		alias: "Karma",
		title: "卡尔玛",
		value: 43
	},
	{
		label: "瓦洛兰之盾",
		alias: "Taric",
		title: "塔里克",
		value: 44
	},
	{
		label: "邪恶小法师",
		alias: "Veigar",
		title: "维迦",
		value: 45
	},
	{
		label: "巨魔之王",
		alias: "Trundle",
		title: "特朗德尔",
		value: 48
	},
	{
		label: "诺克萨斯统领",
		alias: "Swain",
		title: "斯维因",
		value: 50
	},
	{
		label: "皮城女警",
		alias: "Caitlyn",
		title: "凯特琳",
		value: 51
	},
	{
		label: "蒸汽机器人",
		alias: "Blitzcrank",
		title: "布里茨",
		value: 53
	},
	{
		label: "熔岩巨兽",
		alias: "Malphite",
		title: "墨菲特",
		value: 54
	},
	{
		label: "不祥之刃",
		alias: "Katarina",
		title: "卡特琳娜",
		value: 55
	},
	{
		label: "永恒梦魇",
		alias: "Nocturne",
		title: "魔腾",
		value: 56
	},
	{
		label: "扭曲树精",
		alias: "Maokai",
		title: "茂凯",
		value: 57
	},
	{
		label: "荒漠屠夫",
		alias: "Renekton",
		title: "雷克顿",
		value: 58
	},
	{
		label: "德玛西亚皇子",
		alias: "JarvanIV",
		title: "嘉文四世",
		value: 59
	},
	{
		label: "蜘蛛女皇",
		alias: "Elise",
		title: "伊莉丝",
		value: 60
	},
	{
		label: "发条魔灵",
		alias: "Orianna",
		title: "奥莉安娜",
		value: 61
	},
	{
		label: "齐天大圣",
		alias: "MonkeyKing",
		title: "孙悟空",
		value: 62
	},
	{
		label: "复仇焰魂",
		alias: "Brand",
		title: "布兰德",
		value: 63
	},
	{
		label: "盲僧",
		alias: "LeeSin",
		title: "李青",
		value: 64
	},
	{
		label: "暗夜猎手",
		alias: "Vayne",
		title: "薇恩",
		value: 67
	},
	{
		label: "机械公敌",
		alias: "Rumble",
		title: "兰博",
		value: 68
	},
	{
		label: "魔蛇之拥",
		alias: "Cassiopeia",
		title: "卡西奥佩娅",
		value: 69
	},
	{
		label: "水晶先锋",
		alias: "Skarner",
		title: "斯卡纳",
		value: 72
	},
	{
		label: "大发明家",
		alias: "Heimerdinger",
		title: "黑默丁格",
		value: 74
	},
	{
		label: "沙漠死神",
		alias: "Nasus",
		title: "内瑟斯",
		value: 75
	},
	{
		label: "狂野女猎手",
		alias: "Nidalee",
		title: "奈德丽",
		value: 76
	},
	{
		label: "兽灵行者",
		alias: "Udyr",
		title: "乌迪尔",
		value: 77
	},
	{
		label: "圣锤之毅",
		alias: "Poppy",
		title: "波比",
		value: 78
	},
	{
		label: "酒桶",
		alias: "Gragas",
		title: "古拉加斯",
		value: 79
	},
	{
		label: "不屈之枪",
		alias: "Pantheon",
		title: "潘森",
		value: 80
	},
	{
		label: "探险家",
		alias: "Ezreal",
		title: "伊泽瑞尔",
		value: 81
	},
	{
		label: "铁铠冥魂",
		alias: "Mordekaiser",
		title: "莫德凯撒",
		value: 82
	},
	{
		label: "牧魂人",
		alias: "Yorick",
		title: "约里克",
		value: 83
	},
	{
		label: "离群之刺",
		alias: "Akali",
		title: "阿卡丽",
		value: 84
	},
	{
		label: "狂暴之心",
		alias: "Kennen",
		title: "凯南",
		value: 85
	},
	{
		label: "德玛西亚之力",
		alias: "Garen",
		title: "盖伦",
		value: 86
	},
	{
		label: "曙光女神",
		alias: "Leona",
		title: "蕾欧娜",
		value: 89
	},
	{
		label: "虚空先知",
		alias: "Malzahar",
		title: "玛尔扎哈",
		value: 90
	},
	{
		label: "刀锋之影",
		alias: "Talon",
		title: "泰隆",
		value: 91
	},
	{
		label: "放逐之刃",
		alias: "Riven",
		title: "锐雯",
		value: 92
	},
	{
		label: "深渊巨口",
		alias: "KogMaw",
		title: "克格莫",
		value: 96
	},
	{
		label: "暮光之眼",
		alias: "Shen",
		title: "慎",
		value: 98
	},
	{
		label: "光辉女郎",
		alias: "Lux",
		title: "拉克丝",
		value: 99
	},
	{
		label: "远古巫灵",
		alias: "Xerath",
		title: "泽拉斯",
		value: 101
	},
	{
		label: "龙血武姬",
		alias: "Shyvana",
		title: "希瓦娜",
		value: 102
	},
	{
		label: "九尾妖狐",
		alias: "Ahri",
		title: "阿狸",
		value: 103
	},
	{
		label: "法外狂徒",
		alias: "Graves",
		title: "格雷福斯",
		value: 104
	},
	{
		label: "潮汐海灵",
		alias: "Fizz",
		title: "菲兹",
		value: 105
	},
	{
		label: "不灭狂雷",
		alias: "Volibear",
		title: "沃利贝尔",
		value: 106
	},
	{
		label: "傲之追猎者",
		alias: "Rengar",
		title: "雷恩加尔",
		value: 107
	},
	{
		label: "惩戒之箭",
		alias: "Varus",
		title: "韦鲁斯",
		value: 110
	},
	{
		label: "深海泰坦",
		alias: "Nautilus",
		title: "诺提勒斯",
		value: 111
	},
	{
		label: "机械先驱",
		alias: "Viktor",
		title: "维克托",
		value: 112
	},
	{
		label: "北地之怒",
		alias: "Sejuani",
		title: "瑟庄妮",
		value: 113
	},
	{
		label: "无双剑姬",
		alias: "Fiora",
		title: "菲奥娜",
		value: 114
	},
	{
		label: "爆破鬼才",
		alias: "Ziggs",
		title: "吉格斯",
		value: 115
	},
	{
		label: "仙灵女巫",
		alias: "Lulu",
		title: "璐璐",
		value: 117
	},
	{
		label: "荣耀行刑官",
		alias: "Draven",
		title: "德莱文",
		value: 119
	},
	{
		label: "战争之影",
		alias: "Hecarim",
		title: "赫卡里姆",
		value: 120
	},
	{
		label: "虚空掠夺者",
		alias: "Khazix",
		title: "卡兹克",
		value: 121
	},
	{
		label: "诺克萨斯之手",
		alias: "Darius",
		title: "德莱厄斯",
		value: 122
	},
	{
		label: "未来守护者",
		alias: "Jayce",
		title: "杰斯",
		value: 126
	},
	{
		label: "冰霜女巫",
		alias: "Lissandra",
		title: "丽桑卓",
		value: 127
	},
	{
		label: "皎月女神",
		alias: "Diana",
		title: "黛安娜",
		value: 131
	},
	{
		label: "德玛西亚之翼",
		alias: "Quinn",
		title: "奎因",
		value: 133
	},
	{
		label: "暗黑元首",
		alias: "Syndra",
		title: "辛德拉",
		value: 134
	},
	{
		label: "铸星龙王",
		alias: "AurelionSol",
		title: "奥瑞利安索尔",
		value: 136
	},
	{
		label: "影流之镰",
		alias: "Kayn",
		title: "凯隐",
		value: 141
	},
	{
		label: "暮光星灵",
		alias: "Zoe",
		title: "佐伊",
		value: 142
	},
	{
		label: "荆棘之兴",
		alias: "Zyra",
		title: "婕拉",
		value: 143
	},
	{
		label: "虚空之女",
		alias: "Kaisa",
		title: "卡莎",
		value: 145
	},
	{
		label: "星籁歌姬",
		alias: "Seraphine",
		title: "萨勒芬妮",
		value: 147
	},
	{
		label: "迷失之牙",
		alias: "Gnar",
		title: "纳尔",
		value: 150
	},
	{
		label: "生化魔人",
		alias: "Zac",
		title: "扎克",
		value: 154
	},
	{
		label: "疾风剑豪",
		alias: "Yasuo",
		title: "亚索",
		value: 157
	},
	{
		label: "虚空之眼",
		alias: "Velkoz",
		title: "维克兹",
		value: 161
	},
	{
		label: "岩雀",
		alias: "Taliyah",
		title: "塔莉垭",
		value: 163
	},
	{
		label: "青钢影",
		alias: "Camille",
		title: "卡蜜尔",
		value: 164
	},
	{
		label: "影哨",
		alias: "Akshan",
		title: "阿克尚",
		value: 166
	},
	{
		label: "虚空女皇",
		alias: "Belveth",
		title: "卑尔维斯",
		value: 200
	},
	{
		label: "弗雷尔卓德之心",
		alias: "Braum",
		title: "布隆",
		value: 201
	},
	{
		label: "戏命师",
		alias: "Jhin",
		title: "烬",
		value: 202
	},
	{
		label: "永猎双子",
		alias: "Kindred",
		title: "千珏",
		value: 203
	},
	{
		label: "祖安花火",
		alias: "Zeri",
		title: "泽丽",
		value: 221
	},
	{
		label: "暴走萝莉",
		alias: "Jinx",
		title: "金克丝",
		value: 222
	},
	{
		label: "河流之王",
		alias: "TahmKench",
		title: "塔姆",
		value: 223
	},
	{
		label: "狂厄蔷薇",
		alias: "Briar",
		title: "贝蕾亚",
		value: 233
	},
	{
		label: "破败之王",
		alias: "Viego",
		title: "佛耶戈",
		value: 234
	},
	{
		label: "涤魂圣枪",
		alias: "Senna",
		title: "赛娜",
		value: 235
	},
	{
		label: "圣枪游侠",
		alias: "Lucian",
		title: "卢锡安",
		value: 236
	},
	{
		label: "影流之主",
		alias: "Zed",
		title: "劫",
		value: 238
	},
	{
		label: "暴怒骑士",
		alias: "Kled",
		title: "克烈",
		value: 240
	},
	{
		label: "时间刺客",
		alias: "Ekko",
		title: "艾克",
		value: 245
	},
	{
		label: "元素女皇",
		alias: "Qiyana",
		title: "奇亚娜",
		value: 246
	},
	{
		label: "皮城执法官",
		alias: "Vi",
		title: "蔚",
		value: 254
	},
	{
		label: "暗裔剑魔",
		alias: "Aatrox",
		title: "亚托克斯",
		value: 266
	},
	{
		label: "唤潮鲛姬",
		alias: "Nami",
		title: "娜美",
		value: 267
	},
	{
		label: "沙漠皇帝",
		alias: "Azir",
		title: "阿兹尔",
		value: 268
	},
	{
		label: "魔法猫咪",
		alias: "Yuumi",
		title: "悠米",
		value: 350
	},
	{
		label: "沙漠玫瑰",
		alias: "Samira",
		title: "莎弥拉",
		value: 360
	},
	{
		label: "魂锁典狱长",
		alias: "Thresh",
		title: "锤石",
		value: 412
	},
	{
		label: "海兽祭司",
		alias: "Illaoi",
		title: "俄洛伊",
		value: 420
	},
	{
		label: "虚空遁地兽",
		alias: "RekSai",
		title: "雷克塞",
		value: 421
	},
	{
		label: "翠神",
		alias: "Ivern",
		title: "艾翁",
		value: 427
	},
	{
		label: "复仇之矛",
		alias: "Kalista",
		title: "卡莉丝塔",
		value: 429
	},
	{
		label: "星界游神",
		alias: "Bard",
		title: "巴德",
		value: 432
	},
	{
		label: "幻翎",
		alias: "Rakan",
		title: "洛",
		value: 497
	},
	{
		label: "逆羽",
		alias: "Xayah",
		title: "霞",
		value: 498
	},
	{
		label: "山隐之焰",
		alias: "Ornn",
		title: "奥恩",
		value: 516
	},
	{
		label: "解脱者",
		alias: "Sylas",
		title: "塞拉斯",
		value: 517
	},
	{
		label: "万花通灵",
		alias: "Neeko",
		title: "妮蔻",
		value: 518
	},
	{
		label: "残月之肃",
		alias: "Aphelios",
		title: "厄斐琉斯",
		value: 523
	},
	{
		label: "镕铁少女",
		alias: "Rell",
		title: "芮尔",
		value: 526
	},
	{
		label: "血港鬼影",
		alias: "Pyke",
		title: "派克",
		value: 555
	},
	{
		label: "愁云使者",
		alias: "Vex",
		title: "薇古丝",
		value: 711
	},
	{
		label: "封魔剑魂",
		alias: "Yone",
		title: "永恩",
		value: 777
	},
	{
		label: "腕豪",
		alias: "Sett",
		title: "瑟提",
		value: 875
	},
	{
		label: "含羞蓓蕾",
		alias: "Lillia",
		title: "莉莉娅",
		value: 876
	},
	{
		label: "灵罗娃娃",
		alias: "Gwen",
		title: "格温",
		value: 887
	},
	{
		label: "炼金男爵",
		alias: "Renata",
		title: "烈娜塔 · 戈拉斯克",
		value: 888
	},
	{
		label: "不羁之悦",
		alias: "Nilah",
		title: "尼菈",
		value: 895
	}
];

export const queue: { [key: string]: string } = {
	"-1": "自定义",
	0: "训练模式",
	2: "匹配模式",
	4: "单双排位",
	6: "5v5 Ranked Premade games",
	7: "Co-op vs AI games",
	8: "3v3 Normal games",
	9: "3v3 Ranked Flex games",
	14: "5v5 Draft Pick games",
	16: "5v5 Dominion Blind Pick games",
	17: "5v5 Dominion Draft Pick games",
	25: "Dominion Co-op vs AI games",
	31: "人机对战",
	32: "人机对战",
	33: "人机对战",
	41: "3v3 Ranked Team games",
	42: "5v5 Ranked Team games",
	52: "Co-op vs AI games",
	61: "5v5 Team Builder games",
	65: "极地乱斗",
	67: "ARAM Co-op vs AI games",
	70: "克隆作战",
	72: "1v1 Snowdown Showdown games",
	73: "2v2 Snowdown Showdown games",
	75: "6v6 Hexakill games",
	76: "Ultra Rapid Fire games",
	78: "One For All: Mirror Mode games",
	83: "Co-op vs AI Ultra Rapid Fire games",
	91: "Doom Bots Rank 1 games",
	92: "Doom Bots Rank 2 games",
	93: "Doom Bots Rank 5 games",
	96: "Ascension games",
	98: "6v6 Hexakill games",
	100: "极地乱斗",
	300: "Legend of the Poro King games",
	310: "Nemesis games",
	313: "Black Market Brawlers games",
	315: "Nexus Siege games",
	317: "Definitely Not Dominion games",
	318: "火力",
	325: "All Random games",
	400: "5v5 Draft Pick games",
	410: "5v5 Ranked Dynamic games",
	420: "单双排位",
	430: "匹配模式",
	440: "灵活组排",
	450: "极地乱斗",
	460: "3v3 Blind Pick games",
	470: "3v3 Ranked Flex games",
	600: "Blood Hunt Assassin games",
	610: "Dark Star: Singularity games",
	700: "Clash games",
	800: "人机对战", //'Co-op vs. AI Intermediate Bot games',
	810: "人机对战", //'Co-op vs. AI Intro Bot games',
	820: "人机对战", //'Co-op vs. AI Beginner Bot games',
	830: "人机对战", //'Co-op vs. AI Intro Bot games',
	840: "人机对战", //'Co-op vs. AI Beginner Bot games',
	850: "人机对战", //'Co-op vs. AI Intermediate Bot games',
	900: "无限火力",
	910: "Ascension games",
	920: "Legend of the Poro King games",
	940: "Nexus Siege games",
	950: "Doom Bots Voting games",
	960: "Doom Bots Standard games",
	980: "Star Guardian Invasion: Normal games",
	990: "Star Guardian Invasion: Onslaught games",
	1000: "PROJECT: Hunters games",
	1010: "无限火力",
	1020: "克隆模式",
	1030: "Odyssey Extraction: Intro games",
	1040: "Odyssey Extraction: Cadet games",
	1050: "Odyssey Extraction: Crewmember games",
	1060: "Odyssey Extraction: Captain games",
	1070: "Odyssey Extraction: Onslaught games",
	1090: "Teamfight Tactics games",
	1100: "Ranked Teamfight Tactics games",
	1110: "Teamfight Tactics Tutorial games",
	1111: "Teamfight Tactics test games",
	1200: "Nexus Blitz games",
	1300: "极限闪击",
	1400: "终极魔典",
	1700: "斗魂竞技场",
	1900: "无限火力",
	2000: "Tutorial 1",
	2010: "Tutorial 2",
	2020: "Tutorial 3"
};

export const spells: { [key: number]: string } = {
	1: "SummonerBoost",
	3: "SummonerExhaust",
	4: "SummonerFlash",
	6: "SummonerHaste",
	7: "SummonerHeal",
	11: "SummonerSmite",
	12: "SummonerTeleport",
	13: "SummonerMana",
	14: "SummonerDot",
	21: "SummonerBarrier",
	32: "SummonerSnowball"
};
