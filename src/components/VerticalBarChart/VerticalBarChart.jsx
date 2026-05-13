import React from "react";
import * as S from "./VerticalBarChart.styled";

const VerticalBarChart = () => {
  const total = 9581;
  const dateLabel = "10 июля 2024";
  const categories = [
    { name: "Еда", amount: 3590, color: "#D9B6FF" },
    { name: "Транспорт", amount: 1835, color: "#FFB53D" },
    { name: "Жильё", amount: 0, color: "#6EE4FE" },
    { name: "Развлечения", amount: 1250, color: "#B0AEFF" },
    { name: "Образование", amount: 600, color: "#BCEC30" },
    { name: "Другое", amount: 2306, color: "#FFB9B8" },
  ];

  const maxAmount = 3590;
  const maxBarHeight = 328;

  const getBarHeight = (amount) => {
    if (amount === 0) return 4;
    return (amount / maxAmount) * maxBarHeight;
  };

  return (
    <S.ChartContainer>
      <S.Header>
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
            <S.Label>{cat.name}</S.Label>
          </S.BarColumn>
        ))}
      </S.BarsWrapper>
    </S.ChartContainer>
  );
};

export default VerticalBarChart;
