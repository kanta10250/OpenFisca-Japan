import { useState, useCallback, useEffect } from 'react';
import { useNavigationType } from 'react-router-dom';
import { Select, FormControl, FormLabel } from '@chakra-ui/react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { currentDateAtom, householdAtom } from '../../../state';

export const Occupation = ({ personName }: { personName: string }) => {
  const navigationType = useNavigationType();
  const [household, setHousehold] = useRecoilState(householdAtom);
  const currentDate = useRecoilValue(currentDateAtom);

  // ラベルとOpenFiscaの表記違いを明記(pythonは数字を頭にした変数名をつけられない)
  const items = [
    ['', '無'],
    ['会社員', '会社員'],
    ['公務員', '公務員'],
    ['自営業', '自営業'],
    ['その他', 'その他'],
  ];
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  // コンボボックスの値が変更された時
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedItemIndex(parseInt(event.currentTarget.value));
      const newHousehold = { ...household };
      newHousehold.世帯員[personName].就労形態 = {
        [currentDate]: items[parseInt(event.currentTarget.value)][1],
      };
      setHousehold({ ...newHousehold });
    },
    []
  );

  // 「あなた」の「子どもの数」が変更されたときに全ての子どもの就労形態が「無」に
  // リセットされるため、コンボボックスも「なし」に戻す
  // stored states set displayed value when page transition
  useEffect(() => {
    if (household.世帯員[personName].就労形態) {
      items.map((item, index) => {
        if (item[1] === household.世帯員[personName].就労形態[currentDate]) {
          setSelectedItemIndex(index);
        }
      });
    }
  }, [navigationType, household.世帯員[personName].就労形態]);

  return (
    <>
      <FormControl>
        <FormLabel fontWeight="Regular">就労形態</FormLabel>
        <Select
          value={selectedItemIndex}
          className="form-select"
          onChange={onChange}
          mb={3}
        >
          {items.map((item, index) => (
            <option value={index} key={index}>
              {item[0]}
            </option>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
