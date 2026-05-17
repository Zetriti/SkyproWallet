import React from "react";
import * as S from "./Analysis.styled";
import Calendar from "../../components/Calendar/Calendar";
import VerticalBarChart from "../../components/VerticalBarChart/VerticalBarChart";
import { PageTitle } from "../../components/Styles/shared.styled";

const Analysis = () => {
  return (
    <S.AnalysisWrapper>
      <div className="container">
        <PageTitle>
          <h4>Анализ расходов</h4>
        </PageTitle>

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
