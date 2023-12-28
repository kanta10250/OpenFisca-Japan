"""
児童手当の実装
"""

import numpy as np
from openfisca_core.periods import DAY
from openfisca_core.variables import Variable
from openfisca_japan.entities import 世帯
from openfisca_japan.variables.全般 import 高校生学年, 中学生学年, 小学生学年


class 児童手当(Variable):
    value_type = float
    entity = 世帯
    definition_period = DAY
    label = "保護者への児童手当"
    reference = "https://www.cfa.go.jp/policies/kokoseido/jidouteate/annai/"
    documentation = """
    児童手当制度
    """

    def formula(対象世帯, 対象期間, parameters):
        児童手当 = parameters(対象期間).福祉.育児.児童手当

        年齢 = 対象世帯.members("年齢", 対象期間)
        学年 = 対象世帯.members("学年", 対象期間)

        高校生以下である = 対象世帯.has_role(世帯.子) * (学年 <= 高校生学年.三年生.value) * (年齢 <= 18)  
        高校生以下の出生順 = 対象世帯.get_rank(対象世帯, - 年齢, condition=高校生以下である)
        
        三歳未満である = 年齢 < 3
        # テストで学年が入力されていない場合は0が入るため年齢で大人を除外する
        三歳から小学校修了前である = (年齢 >= 3) * (学年 <= 小学生学年.六年生.value) * (年齢 <= 12)  
        三歳から小学校修了前かつ第二子以前である = 三歳から小学校修了前である * (高校生以下の出生順 >= 0) * (高校生以下の出生順 < 2)
        三歳から小学校修了前かつ第三子以降である = 三歳から小学校修了前である * (高校生以下の出生順 >= 2)

        中学生である = (学年 >= 中学生学年.一年生.value) * (学年 <= 中学生学年.三年生.value)

        児童手当金額 = 対象世帯.sum(児童手当.金額.三歳未満 * 三歳未満である + \
                                児童手当.金額.三歳から小学校修了前かつ第二子以前 * 三歳から小学校修了前かつ第二子以前である + \
                                児童手当.金額.三歳から小学校修了前かつ第三子以降 * 三歳から小学校修了前かつ第三子以降である + \
                                児童手当.金額.中学生 * 中学生である)
        
        中学生以下である = (学年 <= 中学生学年.三年生.value) * (年齢 <= 15)
        特例給付金額 = 対象世帯.sum(児童手当.金額.特例給付 * 中学生以下である)

        # 世帯で最も高い所得の人が基準となる  TODO: このformulaの中で対象となる控除を差し引く
        世帯高所得 = 対象世帯("控除後世帯高所得", 対象期間)
        扶養人数 = 対象世帯("扶養人数", 対象期間)
        所得制限限度額 = np.array(児童手当.所得制限限度額)[扶養人数]
        所得上限限度額 = np.array(児童手当.所得上限限度額)[扶養人数]
        児童手当所得条件 = 世帯高所得 < 所得制限限度額
        特例給付所得条件 = (世帯高所得 >= 所得制限限度額) * (世帯高所得 < 所得上限限度額)
        
        return 児童手当所得条件 * 児童手当金額 + 特例給付所得条件 * 特例給付金額
