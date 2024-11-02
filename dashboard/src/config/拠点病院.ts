// 以下webサイトの情報を参照
// https://hiv-hospital.jp/map/index_kubun@block.html

// TODO: 公式の訳語があればその名前を使用する

// 中核拠点病院
const centralBaseHospitalData: HIVBaseHospitalData = {
  北海道: {
    独立行政法人労働者健康安全機構釧路労災病院: {
      WebサイトURL: 'https://www.kushiroh.johas.go.jp/',
      所在地: '北海道釧路市中園町１３－２３',
      施設名: '独立行政法人労働者健康安全機構釧路労災病院',
      郵便番号: '085-8533',
      電話番号: '0154-22-7191',
      ブロック: '北海道',
    },
  },
  青森県: {
    青森県立中央病院: {
      WebサイトURL: 'https://aomori-kenbyo.jp/',
      所在地: '青森県青森市東造道２－１－１',
      施設名: '青森県立中央病院',
      郵便番号: '030-8553',
      電話番号: '017-726-8111',
      ブロック: '東北',
    },
  },
  岩手県: {
    岩手医科大学附属病院: {
      WebサイトURL: 'https://www.hosp.iwate-med.ac.jp/hiv/',
      所在地: '岩手県紫波郡矢巾町医大通二丁目１番１号',
      施設名: '岩手医科大学附属病院',
      郵便番号: '028-3695',
      電話番号: '019-613-7111',
      ブロック: '東北',
    },
  },
  宮城県: {
    独立行政法人国立病院機構仙台医療センター: {
      WebサイトURL: 'https://nsmc.hosp.go.jp/',
      所在地: '宮城県仙台市宮城野区宮城野２－１１－１２',
      施設名: '独立行政法人国立病院機構仙台医療センター',
      郵便番号: '983-8520',
      電話番号: '022-293-1111',
      ブロック: '東北',
    },
  },
  秋田県: {
    秋田大学医学部附属病院: {
      WebサイトURL: 'https://www.hos.akita-u.ac.jp/',
      所在地: '秋田県秋田市広面字蓮沼４４－２',
      施設名: '秋田大学医学部附属病院',
      郵便番号: '010-8543',
      電話番号: '018-834-1111',
      ブロック: '東北',
    },
  },
  山形県: {
    山形県立中央病院: {
      WebサイトURL: 'https://www.ypch.gr.jp',
      所在地: '山形県山形市大字青柳１８００番地',
      施設名: '山形県立中央病院',
      郵便番号: '990-2292',
      電話番号: '023-685-2626',
      ブロック: '東北',
    },
  },
  福島県: {
    福島県立医科大学附属病院: {
      WebサイトURL: 'https://www.fmu.ac.jp/',
      所在地: '福島県福島市光が丘１',
      施設名: '福島県立医科大学附属病院',
      郵便番号: '960-1295',
      電話番号: '024-547-1111',
      ブロック: '東北',
    },
  },
  茨城県: {
    筑波大学附属病院: {
      WebサイトURL: 'https://www.hosp.tsukuba.ac.jp/',
      所在地: '茨城県つくば市天久保２－１－１',
      施設名: '筑波大学附属病院',
      郵便番号: '305-8576',
      電話番号: '029-853-3900',
      ブロック: '関東甲信越',
    },
  },
  栃木県: {
    済生会宇都宮病院: {
      WebサイトURL: 'https://www.saimiya.com/',
      所在地: '栃木県宇都宮市竹林町９１１－１',
      施設名: '済生会宇都宮病院',
      郵便番号: '321-0974',
      電話番号: '028-626-5500',
      ブロック: '関東甲信越',
    },
    獨協医科大学病院: {
      WebサイトURL: 'https://www.dokkyomed.ac.jp/hosp-m/',
      所在地: '栃木県下都賀郡壬生町北小林８８０',
      施設名: '獨協医科大学病院',
      郵便番号: '321-0293',
      電話番号: '0282-86-1111',
      ブロック: '関東甲信越',
    },
    自治医科大学附属病院: {
      WebサイトURL: 'https://www.jichi.ac.jp/hospital/top/',
      所在地: '栃木県下野市薬師寺３３１１－１',
      施設名: '自治医科大学附属病院',
      郵便番号: '329-0498',
      電話番号: '0285-44-2111',
      ブロック: '関東甲信越',
    },
  },
  群馬県: {
    群馬大学医学部附属病院: {
      WebサイトURL: 'https://hospital.med.gunma-u.ac.jp/',
      所在地: '群馬県前橋市昭和町３－３９－１５',
      施設名: '群馬大学医学部附属病院',
      郵便番号: '371-8511',
      電話番号: '027-220-7111',
      ブロック: '関東甲信越',
    },
  },
  埼玉県: {
    東埼玉病院: {
      WebサイトURL: 'https://higashisaitama.hosp.go.jp/',
      所在地: '埼玉県蓮田市黒浜４１４７',
      施設名: '東埼玉病院',
      郵便番号: '349-0196',
      電話番号: '048-768-1161',
      ブロック: '関東甲信越',
    },
  },
  千葉県: {
    千葉大学医学部附属病院: {
      WebサイトURL: 'https://www.ho.chiba-u.ac.jp/',
      所在地: '千葉県千葉市中央区亥鼻１－８－１',
      施設名: '千葉大学医学部附属病院',
      郵便番号: '260-8677',
      電話番号: '043-222-7171',
      ブロック: '関東甲信越',
    },
  },
  東京都: {
    慶應義塾大学病院: {
      WebサイトURL: 'https://www.hosp.keio.ac.jp/',
      所在地: '東京都新宿区信濃町３５',
      施設名: '慶應義塾大学病院',
      郵便番号: '160-8582',
      電話番号: '03-3353-1211',
      ブロック: '関東甲信越',
    },
    東京慈恵会医科大学附属病院: {
      WebサイトURL: 'https://www.hosp.jikei.ac.jp/',
      所在地: '東京都港区西新橋３－１９－１８',
      施設名: '東京慈恵会医科大学附属病院',
      郵便番号: '105-8471',
      電話番号: '03-3433-1111',
      ブロック: '関東甲信越',
    },
    都立駒込病院: {
      WebサイトURL: 'https://www.tmhp.jp/komagome/',
      所在地: '東京都文京区本駒込３－１８－２２',
      施設名: '都立駒込病院',
      郵便番号: '113-8677',
      電話番号: '03-3823-2101',
      ブロック: '関東甲信越',
    },
  },
  神奈川県: {
    横浜市立大学附属病院: {
      WebサイトURL: 'https://www.yokohama-cu.ac.jp/fukuhp/',
      所在地: '神奈川県横浜市金沢区福浦３－９',
      施設名: '横浜市立大学附属病院',
      郵便番号: '236-0004',
      電話番号: '045-787-2800',
      ブロック: '関東甲信越',
    },
    横浜市立市民病院: {
      WebサイトURL: 'https://yokohama-shiminhosp.jp/index.html',
      所在地: '神奈川県横浜市神奈川区三ツ沢西町１番１号',
      施設名: '横浜市立市民病院',
      郵便番号: '221-0855',
      電話番号: '045-316-4580',
      ブロック: '関東甲信越',
    },
  },
  山梨県: {
    山梨県立中央病院: {
      WebサイトURL: 'https://www.ych.pref.yamanashi.jp/',
      所在地: '山梨県甲府市富士見１－１－１',
      施設名: '山梨県立中央病院',
      郵便番号: '400-8506',
      電話番号: '055-253-7111',
      ブロック: '関東甲信越',
    },
  },
  長野県: {
    長野県立信州医療センター: {
      WebサイトURL: 'https://shinshumedicalcenter.jp/',
      所在地: '長野県須坂市大字須坂１３３２',
      施設名: '長野県立信州医療センター',
      郵便番号: '382-8577',
      電話番号: '026-245-1650',
      ブロック: '関東甲信越',
    },
  },
  新潟県: {
    新潟大学医歯学総合病院: {
      WebサイトURL: 'https://www.nuh.niigata-u.ac.jp/',
      所在地: '新潟県新潟市中央区旭町通一番町７５４番地',
      施設名: '新潟大学医歯学総合病院',
      郵便番号: '951-8520',
      電話番号: '025-223-6161',
      ブロック: '関東甲信越',
    },
  },
  富山県: {
    富山県立中央病院: {
      WebサイトURL: 'https://www.tch.pref.toyama.jp/',
      所在地: '富山県富山市西長江２－２－７８',
      施設名: '富山県立中央病院',
      郵便番号: '930-8550',
      電話番号: '076-424-1531',
      ブロック: '北陸',
    },
  },
  石川県: {
    石川県立中央病院: {
      WebサイトURL: 'https://kenchu.ipch.jp/',
      所在地: '石川県金沢市鞍月東２丁目１番地',
      施設名: '石川県立中央病院',
      郵便番号: '920-8530',
      電話番号: '076-237-8211',
      ブロック: '北陸',
    },
  },
  福井県: {
    福井大学医学部附属病院: {
      WebサイトURL: 'https://www.hosp.u-fukui.ac.jp/',
      所在地: '福井県吉田郡永平寺町松岡下合月２３－３',
      施設名: '福井大学医学部附属病院',
      郵便番号: '910-1193',
      電話番号: '0776-61-3111',
      ブロック: '北陸',
    },
  },
  岐阜県: {
    岐阜大学医学部附属病院: {
      WebサイトURL: 'https://www.hosp.gifu-u.ac.jp/',
      所在地: '岐阜県岐阜市柳戸１番１',
      施設名: '岐阜大学医学部附属病院',
      郵便番号: '501-1194',
      電話番号: '058-230-6000',
      ブロック: '東海',
    },
  },
  静岡県: {
    地方独立行政法人静岡市立静岡病院: {
      WebサイトURL: 'https://www.shizuokahospital.jp/',
      所在地: '静岡県静岡市葵区追手町１０－９３',
      施設名: '地方独立行政法人静岡市立静岡病院',
      郵便番号: '420-8630',
      電話番号: '054-253-3125',
      ブロック: '東海',
    },
    浜松医療センター: {
      WebサイトURL: 'https://www.hmedc.or.jp/',
      所在地: '静岡県浜松市中区富塚町３２８',
      施設名: '浜松医療センター',
      郵便番号: '432-8580',
      電話番号: '053-453-7111',
      ブロック: '東海',
    },
  },
  愛知県: {
    名古屋大学医学部附属病院: {
      WebサイトURL: 'https://www.med.nagoya-u.ac.jp/hospital/',
      所在地: '愛知県名古屋市昭和区鶴舞町６５',
      施設名: '名古屋大学医学部附属病院',
      郵便番号: '466-8560',
      電話番号: '052-741-2111',
      ブロック: '東海',
    },
    独立行政法人国立病院機構名古屋医療センター: {
      WebサイトURL: 'https://nagoya.hosp.go.jp/',
      所在地: '愛知県名古屋市中区三の丸４－１－１',
      施設名: '独立行政法人国立病院機構名古屋医療センター',
      郵便番号: '460-0001',
      電話番号: '052-951-1111',
      ブロック: '東海',
    },
  },
  三重県: {
    三重大学医学部附属病院: {
      WebサイトURL: 'https://www.hosp.mie-u.ac.jp/',
      所在地: '三重県津市江戸橋２－１７４',
      施設名: '三重大学医学部附属病院',
      郵便番号: '514-8507',
      電話番号: '059-232-1111',
      ブロック: '東海',
    },
  },
  滋賀県: {
    滋賀医科大学医学部附属病院: {
      WebサイトURL: 'https://www.shiga-med.ac.jp/hospital/',
      所在地: '滋賀県大津市瀬田月輪町',
      施設名: '滋賀医科大学医学部附属病院',
      郵便番号: '520-2192',
      電話番号: '077-548-2111',
      ブロック: '近畿',
    },
  },
  京都府: {
    京都大学医学部附属病院: {
      WebサイトURL: 'https://www.kuhp.kyoto-u.ac.jp/',
      所在地: '京都府京都市左京区聖護院川原町５４',
      施設名: '京都大学医学部附属病院',
      郵便番号: '606-8507',
      電話番号: '075-751-3111',
      ブロック: '近畿',
    },
  },
  大阪府: {
    堺市立総合医療センター: {
      WebサイトURL: 'https://www.sakai-city-hospital.jp',
      所在地: '大阪府堺市西区家原寺町１－１－１',
      施設名: '堺市立総合医療センター',
      郵便番号: '593-8304',
      電話番号: '072-272-1199',
      ブロック: '近畿',
    },
    大阪市立総合医療センター: {
      WebサイトURL: 'https://www.osakacity-hp.or.jp/ocgh/',
      所在地: '大阪府大阪市都島区都島本通２－１３－２２',
      施設名: '大阪市立総合医療センター',
      郵便番号: '534-0021',
      電話番号: '06-6929-1221',
      ブロック: '近畿',
    },
    大阪急性期総合医療センター: {
      WebサイトURL: 'https://www.gh.opho.jp/',
      所在地: '大阪府大阪市住吉区万代東３－１－５６',
      施設名: '大阪急性期・総合医療センター',
      郵便番号: '558-8558',
      電話番号: '06-6692-1201',
      ブロック: '近畿',
    },
  },
  兵庫県: {
    兵庫医科大学病院: {
      WebサイトURL: 'https://www.hosp.hyo-med.ac.jp/',
      所在地: '兵庫県西宮市武庫川町１－１',
      施設名: '兵庫医科大学病院',
      郵便番号: '663-8501',
      電話番号: '0798-45-6111',
      ブロック: '近畿',
    },
  },
  奈良県: {
    奈良県立医科大学附属病院: {
      WebサイトURL: 'https://www.naramed-u.ac.jp/hospital/',
      所在地: '奈良県橿原市四条町８４０',
      施設名: '奈良県立医科大学附属病院',
      郵便番号: '634-8522',
      電話番号: '074-422-3051',
      ブロック: '近畿',
    },
  },
  和歌山県: {
    和歌山県立医科大学附属病院: {
      WebサイトURL: 'https://www.wakayama-med.ac.jp/hospital/',
      所在地: '和歌山県和歌山市紀三井寺８１１番地１',
      施設名: '和歌山県立医科大学附属病院',
      郵便番号: '641-8510',
      電話番号: '073-447-2300',
      ブロック: '近畿',
    },
  },
  鳥取県: {
    鳥取大学医学部附属病院: {
      WebサイトURL: 'https://www2.hosp.med.tottori-u.ac.jp/',
      所在地: '鳥取県米子市西町３６－１',
      施設名: '鳥取大学医学部附属病院',
      郵便番号: '683-8504',
      電話番号: '0859-33-1111',
      ブロック: '中国四国',
    },
  },
  島根県: {
    島根大学医学部附属病院: {
      WebサイトURL: 'https://www.med.shimane-u.ac.jp/hospital/',
      所在地: '島根県出雲市塩冶町８９－１',
      施設名: '島根大学医学部附属病院',
      郵便番号: '693-8501',
      電話番号: '0853-23-2111',
      ブロック: '中国四国',
    },
  },
  岡山県: {
    川崎医科大学附属病院: {
      WebサイトURL: 'https://h.kawasaki-m.ac.jp/',
      所在地: '岡山県倉敷市松島５７７',
      施設名: '川崎医科大学附属病院',
      郵便番号: '701-0192',
      電話番号: '086-462-1111',
      ブロック: '中国四国',
    },
  },
  広島県: {
    広島市立広島市民病院: {
      WebサイトURL: 'https://www.city-hosp.naka.hiroshima.jp/',
      所在地: '広島県広島市中区基町７－３３',
      施設名: '広島市立広島市民病院',
      郵便番号: '730-8518',
      電話番号: '082-221-2291',
      ブロック: '中国四国',
    },
    県立広島病院: {
      WebサイトURL: 'http://www.hph.pref.hiroshima.jp/',
      所在地: '広島県広島市南区宇品神田１－５－５４',
      施設名: '県立広島病院',
      郵便番号: '734-8530',
      電話番号: '082-254-1818',
      ブロック: '中国四国',
    },
    福山医療センター: {
      WebサイトURL: 'https://fukuyama.hosp.go.jp',
      所在地: '広島県福山市沖野上町４－１４－１７',
      施設名: '福山医療センター',
      郵便番号: '720-8520',
      電話番号: '084-922-0001',
      ブロック: '中国四国',
    },
  },
  山口県: {
    山口大学医学部附属病院: {
      WebサイトURL: 'http://www.hosp.yamaguchi-u.ac.jp/',
      所在地: '山口県宇部市南小串１－１－１',
      施設名: '山口大学医学部附属病院',
      郵便番号: '755-8505',
      電話番号: '0836-22-2111',
      ブロック: '中国四国',
    },
    関門医療センター: {
      WebサイトURL: 'https://kanmon.hosp.go.jp/',
      所在地: '山口県下関市長府外浦町１－１',
      施設名: '関門医療センター',
      郵便番号: '752-8510',
      電話番号: '083-241-1199',
      ブロック: '中国四国',
    },
  },
  徳島県: {
    徳島大学病院: {
      WebサイトURL: 'https://www.tokushima-hosp.jp/',
      所在地: '徳島県徳島市蔵本町２－５０－１',
      施設名: '徳島大学病院',
      郵便番号: '770-8503',
      電話番号: '088-631-3111',
      ブロック: '中国四国',
    },
    徳島県立中央病院: {
      WebサイトURL: 'https://tph.pref.tokushima.lg.jp/central/',
      所在地: '徳島県徳島市蔵本町１－１０－３',
      施設名: '徳島県立中央病院',
      郵便番号: '770-8539',
      電話番号: '088-631-7151',
      ブロック: '中国四国',
    },
  },
  香川県: {
    香川大学医学部附属病院: {
      WebサイトURL: 'http://www.med.kagawa-u.ac.jp/hosp/',
      所在地: '香川県木田郡三木町池戸１７５０－１',
      施設名: '香川大学医学部附属病院',
      郵便番号: '761-0793',
      電話番号: '087-898-5111',
      ブロック: '中国四国',
    },
  },
  愛媛県: {
    愛媛大学医学部附属病院: {
      WebサイトURL: 'https://www.hsp.ehime-u.ac.jp/',
      所在地: '愛媛県東温市志津川４５４',
      施設名: '愛媛大学医学部附属病院',
      郵便番号: '791-0295',
      電話番号: '089-964-5111',
      ブロック: '中国四国',
    },
  },
  高知県: {
    高知大学医学部附属病院: {
      WebサイトURL: 'http://www.kochi-u.ac.jp/kms/hsptl/',
      所在地: '高知県南国市岡豊町小蓮１８５－１',
      施設名: '高知大学医学部附属病院',
      郵便番号: '783-8505',
      電話番号: '088-866-5811',
      ブロック: '中国四国',
    },
  },
  福岡県: {
    産業医科大学病院: {
      WebサイトURL: 'https://www.uoeh-u.ac.jp/hospital/',
      所在地: '福岡県北九州市八幡西区医生ヶ丘１－１',
      施設名: '産業医科大学病院',
      郵便番号: '807-8556',
      電話番号: '093-603-1611',
      ブロック: '九州沖縄',
    },
  },
  佐賀県: {
    佐賀大学医学部附属病院: {
      WebサイトURL: 'https://www.hospital.med.saga-u.ac.jp/hp/',
      所在地: '佐賀県佐賀市鍋島５－１－１',
      施設名: '佐賀大学医学部附属病院',
      郵便番号: '849-8501',
      電話番号: '0952-31-6511',
      ブロック: '九州沖縄',
    },
  },
  長崎県: {
    長崎大学病院: {
      WebサイトURL: 'http://www.mh.nagasaki-u.ac.jp/',
      所在地: '長崎県長崎市坂本１－７－１',
      施設名: '長崎大学病院',
      郵便番号: '852-8501',
      電話番号: '095-819-7200',
      ブロック: '九州沖縄',
    },
  },
  熊本県: {
    熊本大学病院: {
      WebサイトURL: 'https://www.kuh.kumamoto-u.ac.jp',
      所在地: '熊本県熊本市中央区本荘１－１－１',
      施設名: '熊本大学病院',
      郵便番号: '860-8556',
      電話番号: '096-344-2111',
      ブロック: '九州沖縄',
    },
  },
  大分県: {
    大分大学医学部附属病院: {
      WebサイトURL: 'https://www.med.oita-u.ac.jp/',
      所在地: '大分県由布市挾間町医大ヶ丘１－１',
      施設名: '大分大学医学部附属病院',
      郵便番号: '879-5593',
      電話番号: '097-549-4411',
      ブロック: '九州沖縄',
    },
  },
  宮崎県: {
    宮崎県立宮崎病院: {
      WebサイトURL: 'https://www.kenritsu-miyazakibyouin.jp/',
      所在地: '宮崎県宮崎市北高松町５－３０',
      施設名: '宮崎県立宮崎病院',
      郵便番号: '880-8510',
      電話番号: '0985-24-4181',
      ブロック: '九州沖縄',
    },
  },
  鹿児島県: {
    鹿児島大学病院: {
      WebサイトURL: 'https://www.hosp.kagoshima-u.ac.jp/',
      所在地: '鹿児島県鹿児島市桜ヶ丘８－３５－１',
      施設名: '鹿児島大学病院',
      郵便番号: '890-8520',
      電話番号: '099-275-5111',
      ブロック: '九州沖縄',
    },
  },
  沖縄県: {
    琉球大学病院: {
      WebサイトURL: 'http://www.hosp.u-ryukyu.ac.jp/',
      所在地: '沖縄県中頭郡西原町上原２０７',
      施設名: '琉球大学病院',
      郵便番号: '903-0215',
      電話番号: '098-895-3331',
      ブロック: '九州沖縄',
    },
  },
};

// ブロック拠点病院
// NOTE: 中核拠点病院を兼ねている場所についても記載（ロジック側で重複回避している）
const blockBaseHospitalData: HIVBaseHospitalData = {
  北海道: {
    札幌医科大学附属病院: {
      施設名: '札幌医科大学附属病院',
      郵便番号: '060-8543',
      所在地: '北海道札幌市中央区南一条西１６－２９１',
      電話番号: '011-611-2111',
      WebサイトURL: 'https://web.sapmed.ac.jp/hospital/',
      ブロック: '北海道',
    },
    北海道大学病院: {
      施設名: '北海道大学病院',
      郵便番号: '060-8648',
      所在地: '北海道札幌市北区北十四条西５',
      電話番号: '011-716-1161',
      WebサイトURL: 'https://www.huhp.hokudai.ac.jp/',
      ブロック: '北海道',
    },
    旭川医科大学病院: {
      施設名: '旭川医科大学病院',
      郵便番号: '078-8510',
      所在地: '北海道旭川市緑が丘東２条１－１－１',
      電話番号: '0166-65-2111',
      WebサイトURL: 'https://www.asahikawa-med.ac.jp/',
      ブロック: '北海道',
    },
  },
  東北: {
    独立行政法人国立病院機構仙台医療センター: {
      WebサイトURL: 'https://nsmc.hosp.go.jp/',
      所在地: '宮城県仙台市宮城野区宮城野２－１１－１２',
      施設名: '独立行政法人国立病院機構仙台医療センター',
      郵便番号: '983-8520',
      電話番号: '022-293-1111',
      ブロック: '東北',
    },
  },
  関東甲信越: {
    新潟市民病院: {
      施設名: '新潟市民病院',
      郵便番号: '950-1197',
      所在地: '新潟県新潟市中央区鐘木４６３－７',
      電話番号: '025-281-5151',
      WebサイトURL: 'https://www.hosp.niigata.niigata.jp/',
      ブロック: '関東甲信越',
    },
    新潟大学医歯学総合病院: {
      WebサイトURL: 'https://www.nuh.niigata-u.ac.jp/',
      所在地: '新潟県新潟市中央区旭町通一番町７５４番地',
      施設名: '新潟大学医歯学総合病院',
      郵便番号: '951-8520',
      電話番号: '025-223-6161',
      ブロック: '関東甲信越',
    },
    新潟県立新発田病院: {
      施設名: '新潟県立新発田病院',
      郵便番号: '957-8588',
      所在地: '新潟県新発田市本町１丁目２番８号',
      電話番号: '0254-22-3121',
      WebサイトURL: 'http://www.sbthp.jp/',
      ブロック: '関東甲信越',
    },
  },
  北陸: {
    石川県立中央病院: {
      WebサイトURL: 'https://kenchu.ipch.jp/',
      所在地: '石川県金沢市鞍月東２丁目１番地',
      施設名: '石川県立中央病院',
      郵便番号: '920-8530',
      電話番号: '076-237-8211',
      ブロック: '北陸',
    },
  },
  東海: {
    独立行政法人国立病院機構名古屋医療センター: {
      WebサイトURL: 'https://nagoya.hosp.go.jp/',
      所在地: '愛知県名古屋市中区三の丸４－１－１',
      施設名: '独立行政法人国立病院機構名古屋医療センター',
      郵便番号: '460-0001',
      電話番号: '052-951-1111',
      ブロック: '東海',
    },
  },
  近畿: {
    大阪医療センター: {
      施設名: '大阪医療センター',
      郵便番号: '540-0006',
      所在地: '大阪府大阪市中央区法円坂２－１－１４',
      電話番号: '06-6942-1331',
      WebサイトURL: 'https://osaka.hosp.go.jp/department/khac/',
      ブロック: '近畿',
    },
  },
  中国四国: {
    広島市立広島市民病院: {
      WebサイトURL: 'https://www.city-hosp.naka.hiroshima.jp/',
      所在地: '広島県広島市中区基町７－３３',
      施設名: '広島市立広島市民病院',
      郵便番号: '730-8518',
      電話番号: '082-221-2291',
      ブロック: '中国四国',
    },
    県立広島病院: {
      WebサイトURL: 'http://www.hph.pref.hiroshima.jp/',
      所在地: '広島県広島市南区宇品神田１－５－５４',
      施設名: '県立広島病院',
      郵便番号: '734-8530',
      電話番号: '082-254-1818',
      ブロック: '中国四国',
    },
    広島大学病院: {
      施設名: '広島大学病院',
      郵便番号: '734-8551',
      所在地: '広島県広島市南区霞１－２－３',
      電話番号: '082-257-5555',
      WebサイトURL: 'https://www.hiroshima-u.ac.jp/hosp/',
      ブロック: '中国四国',
    },
  },
  九州沖縄: {
    九州医療センター: {
      施設名: '九州医療センター',
      郵便番号: '810-8563',
      所在地: '福岡県福岡市中央区地行浜１－８－１',
      電話番号: '092-852-0700',
      WebサイトURL: 'https://kyushu-mc.hosp.go.jp/',
      ブロック: '九州沖縄',
    },
  },
};

export const baseHospitalData = {
  中核拠点病院: centralBaseHospitalData,
  ブロック拠点病院: blockBaseHospitalData,
};

export type HIVBaseHospitalData = {
  [key: string]: { [key: string]: HIVBaseHospital };
};

export type HIVBaseHospital = {
  施設名: string;
  郵便番号: string;
  所在地: string;
  電話番号: string;
  WebサイトURL: string;
  ブロック: string;
};

// 都道府県が所属するブロックの一覧
export const blockOfPrefecture: { [key: string]: string } = {
  北海道: '北海道',
  青森県: '東北',
  岩手県: '東北',
  宮城県: '東北',
  秋田県: '東北',
  山形県: '東北',
  福島県: '東北',
  茨城県: '関東甲信越',
  栃木県: '関東甲信越',
  群馬県: '関東甲信越',
  埼玉県: '関東甲信越',
  千葉県: '関東甲信越',
  東京都: '関東甲信越',
  神奈川県: '関東甲信越',
  山梨県: '関東甲信越',
  長野県: '関東甲信越',
  新潟県: '関東甲信越',
  富山県: '北陸',
  石川県: '北陸',
  福井県: '北陸',
  岐阜県: '東海',
  静岡県: '東海',
  愛知県: '東海',
  三重県: '東海',
  滋賀県: '近畿',
  京都府: '近畿',
  大阪府: '近畿',
  兵庫県: '近畿',
  奈良県: '近畿',
  和歌山県: '近畿',
  鳥取県: '中国四国',
  島根県: '中国四国',
  岡山県: '中国四国',
  広島県: '中国四国',
  山口県: '中国四国',
  徳島県: '中国四国',
  香川県: '中国四国',
  愛媛県: '中国四国',
  高知県: '中国四国',
  福岡県: '九州沖縄',
  佐賀県: '九州沖縄',
  長崎県: '九州沖縄',
  熊本県: '九州沖縄',
  大分県: '九州沖縄',
  宮崎県: '九州沖縄',
  鹿児島県: '九州沖縄',
  沖縄県: '九州沖縄',
};
