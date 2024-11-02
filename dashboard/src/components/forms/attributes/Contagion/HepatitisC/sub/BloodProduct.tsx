// 血液製剤の投与によってC型肝炎ウイルスに感染した

import { useState, useCallback, useEffect } from 'react';
import { useNavigationType } from 'react-router-dom';
import { Checkbox } from '@chakra-ui/react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { currentDateAtom, householdAtom } from '../../../../../../state';

export const BloodProduct = ({ personName }: { personName: string }) => {
  const navigationType = useNavigationType();
  const currentDate = useRecoilValue(currentDateAtom);

  const [household, setHousehold] = useRecoilState(householdAtom);
  const [isChecked, setIsChecked] = useState(false);

  // チェックボックスの値が変更された時
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newHousehold = { ...household };
    if (event.target.checked) {
      newHousehold.世帯員[
        personName
      ].血液製剤の投与によってC型肝炎ウイルスに感染した = {
        [currentDate]: true,
      };
    } else {
      newHousehold.世帯員[
        personName
      ].血液製剤の投与によってC型肝炎ウイルスに感染した = {
        [currentDate]: false,
      };
    }

    setHousehold({ ...newHousehold });
    setIsChecked(event.target.checked);
  }, []);

  // stored states set checkbox when page transition
  useEffect(() => {
    const bloodProductObj =
      household.世帯員[personName]
        .血液製剤の投与によってC型肝炎ウイルスに感染した;
    setIsChecked(bloodProductObj && bloodProductObj[currentDate]);
  }, [navigationType]);

  return (
    <>
      <Checkbox
        isChecked={isChecked}
        onChange={onChange}
        colorScheme="cyan"
        mb={2}
      >
        血液製剤の投与によってC型肝炎ウイルスに感染した
      </Checkbox>
      <br />
    </>
  );
};
