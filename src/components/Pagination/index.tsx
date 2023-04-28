import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { IPagination } from './Models';

import * as S from './styles';
import Colors from '../../global/colors';

const Pagination: React.FC<IPagination> = ({
  totalPosts,
  postsPerPage,
  setCurrentPages,
  currentPage,
}) => {

  let preview = currentPage - 1;
  let next = currentPage + 1;
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const setPreview = () => {
    if (currentPage > 1) {
      setCurrentPages(preview)
    }
  }

  const setNext = () => {
    if (currentPage < pages.length) {
      setCurrentPages(next)
    }
  }

  return (
    <S.Container>
      {currentPage > 1 && (
        <S.CustomButtonArrow onPress={setPreview}>
          <AntDesign name="caretleft" size={25} color={Colors.RED_PRIMARY} />
        </S.CustomButtonArrow>
      )}

      {pages.map((page: any, index: any) => {
        return (
          <S.BoxButton key={index}
          >
            <S.CustomButton
              key={index}
              testID='buttonCustom'
              onPress={() => setCurrentPages(page)}
              currentPage={page === currentPage ? currentPage : !currentPage}
            >
              <S.LabelPage testID='textButtonCustom' currentPage={page === currentPage ? currentPage : !currentPage}>{page}</S.LabelPage>
            </S.CustomButton>
          </S.BoxButton>
        )
      })}
      {currentPage < pages.length && (
        <S.CustomButtonArrow onPress={setNext}>
          <AntDesign name="caretright" size={25} color={Colors.RED_PRIMARY} />
        </S.CustomButtonArrow>
      )}
    </S.Container>
  );
}

export default Pagination;