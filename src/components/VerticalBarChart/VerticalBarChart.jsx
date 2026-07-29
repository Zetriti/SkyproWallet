import React from "react";
import * as S from "./VerticalBarChart.styled";

const VerticalBarChart = ({
  total,
  dateLabel,
  categories,
  showTitle = false,
}) => {
  const maxAmount = Math.max(...categories.map((c) => c.amount), 1);
  const maxBarHeight = 328;

  const getBarHeight = (amount) => {
    if (amount === 0) return 4;
    return (amount / maxAmount) * maxBarHeight;
  };

  return (
    <S.ChartContainer>
      <S.Header>
        {showTitle && <S.ChartTitle>Анализ расходов</S.ChartTitle>}
        <S.Total>{total.toLocaleString()} ₽</S.Total>
        <S.DateRange>
          Расходы за <span>{dateLabel}</span>
        </S.DateRange>
      </S.Header>
      <S.BarsWrapper>
        {categories.map((cat) => (
          <S.BarColumn key={cat.name}>
            <S.Amount>{cat.amount.toLocaleString()} ₽</S.Amount>
            <S.Bar color={cat.color} height={getBarHeight(cat.amount)} />
            <S.Label title={cat.name}>{cat.name}</S.Label>
          </S.BarColumn>
        ))}
      </S.BarsWrapper>
    </S.ChartContainer>
  );
};

export default VerticalBarChart;
