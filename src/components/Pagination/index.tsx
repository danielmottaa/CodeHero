import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IPagination } from './Models';

import * as S from './styles';

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
        <Text onPress={setPreview}> ESQUERDA </Text>
      )}

      {pages.map((page: any, index: any) => {
        return (
          <S.BoxButton key={index}>
            <S.CustomButton key={index} onPress={() => setCurrentPages(page)} currentPage={page === currentPage ? currentPage : !currentPage}>
              <S.LabelPage currentPage={page === currentPage ? currentPage : !currentPage}>{page}</S.LabelPage>
            </S.CustomButton>
          </S.BoxButton>
        )
      })}
      {currentPage < pages.length && (
        <Text onPress={setNext}> DIREITA </Text>
      )}
    </S.Container>
  );
}

export default Pagination;