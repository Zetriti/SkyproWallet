import React from "react";
import * as S from "./Analysis.styled";
import Calendar from "../../components/Calendar/Calendar";
import VerticalBarChart from "../../components/VerticalBarChart/VerticalBarChart";

const Analysis = () => {
  return (
    <S.AnalysisWrapper>
      <div className="container">
        <S.AnalysisTitle>
          <h4>Анализ расходов</h4>
        </S.AnalysisTitle>

        <S.AnalysisBlock>
          <S.AnalysisCalendar>
            <Calendar />
          </S.AnalysisCalendar>

          <S.AnalysisGraph>
            <VerticalBarChart />
          </S.AnalysisGraph>
        </S.AnalysisBlock>
      </div>
    </S.AnalysisWrapper>
  );
};

export default Analysis;
